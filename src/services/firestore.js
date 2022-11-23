import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import {
    getFirestore,
    collection,
    doc,
    getDocs,
    getDoc,
    query,
    where
} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAcPR1GJvMdLGC-ClnHgZhiK0HUclw5AF0",
    authDomain: "react-9f404.firebaseapp.com",
    projectId: "react-9f404",
    storageBucket: "react-9f404.appspot.com",
    messagingSenderId: "1012848603579",
    appId: "1:1012848603579:web:aef7fd8017af856c46949e",
    measurementId: "G-C4PD23MM9E"
};

const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

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
