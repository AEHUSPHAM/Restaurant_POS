import { initializeApp } from 'firebase/app'
import { getDocs, collection, getFirestore } from 'firebase/firestore'
import { firebase_config } from '@/firebase_config'
import { getFunctions, httpsCallable } from "firebase/functions";


initializeApp(firebase_config)

const db = getFirestore()
const functions = getFunctions()


export async function fetchMenu(){
    const items = []
    const snapshot = await getDocs(collection(db, "menu"))

    for (const doc of snapshot.docs){
        const item = doc.data()
        item.id = doc.id
        item.img_src = getDownloadUrl(item.img_path)
        item.img_alt = item.item_name
        items.push(item)
    }

    return items
}

export async function fetchTags(){
    const items = []
    const snapshot = await getDocs(collection(db, "tags"))

    for (const doc of snapshot.docs){
        const item = doc.data()
        item.img_src = getDownloadUrl(item.img_path)
        item.img_alt = item.tag
        items.push(item)
    }

    return items
}

export function formatMoney(amount) {
    return amount.toLocaleString('en-VN', {style: 'currency',currency: 'VND', minimumFractionDigits: 0})
}


export function getDownloadUrl(img_path){
    return 'https://storage.googleapis.com/' +  firebase_config.storageBucket + '/' + img_path
}


export async function sendOrder(order) {
    //sends the order to backend to record and returns the confirmation from the server
    const callable = httpsCallable(functions, 'recordOrder')
    return callable(order)
}