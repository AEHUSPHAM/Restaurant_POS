const functions = require("firebase-functions");
const admin = require('firebase-admin');


admin.initializeApp();


exports.recordOrder = functions.https.onCall(async (data, context) => {
    //function to process the order when user places an order
    //TODO: verify the user's credentials
    try {
        const db = admin.firestore()
        const cart = data.cart
        const full_cart = []
        var total_money = 0

        if (cart.length === 0){
            return {
                status: 'error',
                message: 'Cart is empty. Please select one or more items.'
            }
        }

        //re-construct the full cart
        for (let i in cart) {
            const item = cart[i]
            const doc = await db.collection("menu").doc(item.id).get()
            const recorded_item = doc.data()
            var total_price = recorded_item.item_price

            //add topping prices
            item.selected_toppings.forEach((topping_name) => {
                const topping_price = recorded_item.toppings[topping_name]

                if (isNaN(topping_price)){
                    return {
                        'status': 'error',
                        'message': 'An item in the order does not exist in the database. Please reload the data.'
                    }
                }

                total_price += topping_price
            })
            
            total_money += item.in_cart * total_price

            full_cart.push({
                id: item.id,
                item_name: recorded_item.item_name,
                img_path: recorded_item.img_path,
                img_alt: recorded_item.item_name,
                item_price: recorded_item.item_price,
                total_price: total_price,
                toppings: recorded_item.toppings,
                selected_toppings: item.selected_toppings,
                in_cart: item.in_cart,
            })
        }

        //save the order
        const write_result = await db.collection("orders").add({
            cart: cart,
            total_money: total_money,
            status: 'pending'   //the status of the order
        })

        return {
            status: 'success',
            order_id: write_result.id,
            cart: full_cart,
            total_money: total_money,
        }
    }catch(error){
        return {
            status: 'error',
            message: error.message
        }
    }
});



exports.confirmOrder = functions.https.onCall(async (data, context) => {
    //function to process when user confirms the order
    try {
        const order_id = data.order_id
        const db = admin.firestore()

        const order = await db.collection("orders").doc(order_id).get()
        const order_data = order.data()
        
        if (order_data.status !== 'pending'){
            return {
                status: 'error',
                message: 'The order is not in pending state.'
            }
        }

        await db.collection("orders").doc(order_id).update({
            status: 'unpaid'
        })

        return {
            status: 'success'
        }
    }catch(error){
        return {
            status: 'error',
            message: error.message
        }
    }    
})


exports.confirmPayment = functions.https.onCall(async (data, context) => {
    try{
        const order_id = data.order_id
        const db = admin.firestore()
        const order = await db.collection("orders").doc(order_id).get()
        const order_data = order.data()

        if (order_data.status !== 'unpaid'){
            return {
                status: 'error',
                message: 'The order is not in unpaid state'
            }
        }

        //update the status of the order
        db.collection("orders").doc(order_id).update({
            status: 'paid'
        })

        return {
            status: 'success'
        }

    }catch(error){
        return {
            status: 'error',
            message: error.message
        }
    }
})



exports.cancelPayment = functions.https.onCall(async (data, context) => {
    try{
        const order_id = data.order_id
        const db = admin.firestore()
        const order = await db.collection("orders").doc(order_id).get()
        const order_data = order.data()

        if (order_data.status !== 'unpaid'){
            return {
                status: 'error',
                message: 'The order is not in unpaid state'
            }
        }

        //update the status of the order
        db.collection("orders").doc(order_id).update({
            status: 'cancelled'
        })

        return {
            status: 'success'
        }

    }catch(error){
        return {
            status: 'error',
            message: error.message
        }
    }
})

