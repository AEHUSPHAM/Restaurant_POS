const functions = require("firebase-functions");
const admin = require('firebase-admin');
admin.initializeApp();



exports.recordOrder = functions.https.onCall(async (data, context) => {
    try {
        const db = admin.firestore()
        const cart = data.cart
        const recorded_cart = []
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

            recorded_cart.push({
                id: item.id,
                item_name: recorded_item.item_name,
                item_price: recorded_item.item_price,
                item_tag: recorded_item.item_tag,
                toppings: recorded_item.toppings,
                selected_toppings: item.selected_toppings,
                in_cart: item.in_cart,
            })

            functions.logger.log(recorded_cart)
        }

        //save the order
        const write_result = await db.collection("orders").add({
            cart: cart,
            total_money: total_money
        })

        return {
            status: 'success',
            order_id: write_result.id,
            cart: recorded_cart,
            total_money: total_money,
        }
    }catch(error){
        return {
            status: 'error',
            message: error.message
        }
    }
    
});