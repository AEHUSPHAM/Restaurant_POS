import { initializeApp } from 'firebase/app'
import { firebase_config } from '@/firebase_config'
import { getFunctions, httpsCallable } from "firebase/functions";


initializeApp(firebase_config)

const functions = getFunctions()


export async function confirmPayment (order_id) {
    //send payment confirmation to back end
    const callable = httpsCallable(functions, 'confirmPayment')
    return callable({order_id: order_id})
}

export async function cancelPayment (order_id) {
    //cancel order
    //cancelled order cannot be processed anymore
    const callable = httpsCallable(functions, 'cancelPayment')
    return callable({order_id: order_id})
}