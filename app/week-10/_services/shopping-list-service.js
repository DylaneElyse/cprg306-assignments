import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

// retrieve all items for a specific user
export const getItems = async (userId) => {
  try {
    const items = [];
    const itemsCollection = collection(db, "users", userId, "items");
    const itemsSnapshot = await getDocs(itemsCollection);
    const mappedItems = itemsSnapshot.docs.map((itemDoc) => ({
      id: itemDoc.id,
      ...itemDoc.data(),
    }));
    return mappedItems;
  } catch (fetchItemsError) {
    console.error("Error in fetchItems: ", fetchItemsError);
  }
};

// add a new item to the shopping list
export async function addItem(userId, item) {
  try {
    const itemsCollection = collection(db, "users", userId, "items");
    const docRef = await addDoc(itemsCollection, item);
    return docRef;
  } catch (addItemError) {
    console.error("Error in addItem: ", addItemError);
  }
}
