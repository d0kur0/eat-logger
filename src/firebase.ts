import { initializeApp } from "firebase/app";
import { browserLocalPersistence, getAuth, setPersistence } from "firebase/auth";
import { initializeFirestore, memoryLocalCache } from "firebase/firestore";
import { getStorage } from "firebase/storage";

import { firebaseConfig } from "./configs/firebase";

export const app = initializeApp(firebaseConfig);
export const db = initializeFirestore(app, {
	localCache: memoryLocalCache(),
});
export const auth = getAuth();
export const storage = getStorage(app);

auth.languageCode = "ru";

setPersistence(auth, browserLocalPersistence).catch(console.error);
