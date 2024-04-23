import { db } from "../config/firestore";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  onSnapshot,
  updateDoc,
} from "firebase/firestore";

export const getShopCollection = async () => {
  const collectionRef = collection(db, "shop-collection");

  const snapshot = await getDocs(collectionRef);
  const cleanedData = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  return cleanedData;
};

export const getProductById = async (id) => {
  // get the document reference

  const docRef = doc(db, "shop-collection", id);
  // look up the document based on reference
  const snapshot = await getDoc(docRef);
  // if there isn't a document with this id throw an error - good for UX
  if (!snapshot.exists()) {
    throw new Error("Could not find product with id " + id);
  }

  // otherwise we have the document. we want to share the data
  return { id: snapshot.id, ...snapshot.data() };
};
