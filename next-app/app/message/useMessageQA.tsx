"use client";
import {
  collection,
  getDocs,
  getFirestore,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";
import app from "@/app/_firebase/config";
import { useEffect } from "react";

export default function useMessageQA() {
  const db = getFirestore(app);

  const messageQaRef = collection(db, "QA");
  const createQA = async () => {
    try {
      await addDoc(messageQaRef, {
        question: new Date().toLocaleString(),
        answer: "gpt",
        qaAskTime: serverTimestamp(),
      });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    createQA();
  }, [db]);
  return [createQA] as const;
}
