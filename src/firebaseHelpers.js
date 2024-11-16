// firebaseHelpers.js
import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc, addDoc, setDoc, getDoc, getDocs, query, where, updateDoc, arrayUnion } from "firebase/firestore";

// Firebase configuration (replace with your own config)
const firebaseConfig = {
  apiKey: "AIzaSyAKmcKzhSIV2ORe4O0piOYSzWYn0jNZwi8",
  authDomain: "pirateschest356.firebaseapp.com",
  projectId: "pirateschest356",
  storageBucket: "pirateschest356.appspot.com",
  messagingSenderId: "378539773969",
  appId: "1:378539773969:web:2151a430395389aee7a1b0"
};

// Initialize Firebase and Firestore
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Export Firestore instance
export { db };

/** Adds a new user with an auto-generated ID */
export const addUserAuto = async (username) => {
  const userCollectionRef = collection(db, "users");
  const userDocRef = await addDoc(userCollectionRef, {
    username,
    ipFiles: []
  });
  console.log("User added with ID:", userDocRef.id);
  return userDocRef.id;
};

/** Adds a new IP file with an auto-generated ID */
export const addIPFile = async (name, type, IPFileUID) => {
  const ipFilesCollectionRef = collection(db, "ipFiles");
  const ipFileDoc = await addDoc(ipFilesCollectionRef, {
    name,
    type,
    IPFileUID
  });
  console.log("IP File added with ID:", ipFileDoc.id);
  return ipFileDoc.id;
};

/** Links an IP file to a user by updating the user's ipFiles array */
export const linkIPFileToUser = async (userId, ipFileId) => {
  const userDocRef = doc(db, "users", userId);
  await updateDoc(userDocRef, {
    ipFiles: arrayUnion(ipFileId)
  });
  console.log("IP File linked to user successfully!");
};

/** Fetches all IP files associated with a given user */
export const getUserIPFiles = async (userId) => {
  const userDocRef = doc(db, "users", userId);
  const userDoc = await getDoc(userDocRef);

  if (userDoc.exists()) {
    const ipFileIds = userDoc.data().ipFiles;
    const ipFilesCollectionRef = collection(db, "ipFiles");

    // Query Firestore for all IP files with IDs in the ipFileIds array
    const ipFilesQuery = query(ipFilesCollectionRef, where("__name__", "in", ipFileIds));
    const querySnapshot = await getDocs(ipFilesQuery);

    const ipFiles = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data()
    }));

    return ipFiles;
  } else {
    console.log("User document not found!");
    return [];
  }
};
