import { initializeApp } from "firebase/app";

import {
    GoogleAuthProvider,
    getAuth,
} from "firebase/auth";
import {
    getFirestore,
    collection,
    doc,
    getDocs,
    getDoc,
    query,
    where,
    addDoc
} from "firebase/firestore";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,

};

const app = initializeApp(firebaseConfig);

const DB = getFirestore(app)


export default async function getItems() {

    const collectionProducts = collection(DB, "ropa");

    const documentSnapshot = await getDocs(collectionProducts)

    const documentsData = documentSnapshot.docs.map((doc) => {

        return {
            ...doc.data(),
            id: doc.id,
        };
    });

    return documentsData;
}


export async function getSingleItem(idParams) {
    const docRef = doc(DB, "ropa", idParams);

    const docSnapshot = await getDoc(docRef);

    return {
        ...docSnapshot.data(),
        id: docSnapshot.id
    }

}

export async function getItemsByCategory(categoryParams) {
    const collectionProducts = collection(DB, "ropa");

    const queryCat = query(collectionProducts, where("category", "==", categoryParams))

    const documentSnapshot = await getDocs(queryCat)

    const documentsData = documentSnapshot.docs.map((doc) => {

        return {
            ...doc.data(),
            id: doc.id,
        };
    });

    return documentsData;
}

export async function createOrder(order) {
    const collectionProducts = collection(DB, "orders")
    const documentOrder = await addDoc(collectionProducts, order,)
    return (documentOrder.id)
}

export const provider = new GoogleAuthProvider();

export const auth = getAuth();