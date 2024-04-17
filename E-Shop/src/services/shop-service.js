import { db } from "../config/firestore";
import { collection, getDocs } from "firebase/firestore";

export const getShopCollection = async () => {
  const collectionRef = collection(db, "shop-collection");

  const snapshot = await getDocs(collectionRef);
  const cleanedData = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  return cleanedData;
};
