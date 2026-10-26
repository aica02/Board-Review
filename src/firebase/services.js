// src/firebase/services.js
import { db } from "./config";
import { collection, getDocs, addDoc, deleteDoc, doc } from "firebase/firestore";

const COLLECTION_NAME = "formulas";

// Fetch all cards from Firestore
export async function fetchCardsFromFirebase() {
  try {
    const querySnapshot = await getDocs(collection(db, COLLECTION_NAME));
    const cards = [];
    querySnapshot.forEach((doc) => {
      cards.push({ id: doc.id, ...doc.data() });
    });
    return cards;
  } catch (error) {
    console.error("Error fetching cards: ", error);
    return [];
  }
}

// Add a new manual card to Firestore
export async function addCardToFirebase(cardData) {
  try {
    const docRef = await addDoc(collection(db, COLLECTION_NAME), {
      ...cardData,
      createdAt: new Date().toISOString(),
      source: "Manual Input"
    });
    return { id: docRef.id, ...cardData };
  } catch (error) {
    console.error("Error adding card: ", error);
    throw error;
  }
}

// Delete a card from Firestore
export async function deleteCardFromFirebase(id) {
  try {
    await deleteDoc(doc(db, COLLECTION_NAME, id));
    return true;
  } catch (error) {
    console.error("Error deleting card: ", error);
    return false;
  }
}