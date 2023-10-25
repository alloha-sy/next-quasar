"use client";
import {
  collection,
  getDocs,
  getFirestore,
  query,
  orderBy,
} from "firebase/firestore";
import app from "@/app/_firebase/config";
import { useEffect, useState } from "react";

export default function useQA() {
  const db = getFirestore(app);
  const [QA, setQA] = useState<
    { question: string; answer: number; id: string }[]
  >([]);
  const [order, setOrder] = useState("desc");
  const qaRef = collection(db, "QA");

  useEffect(() => {
    const fetchQA = async () => {
      try {
        const data = await getDocs(query(qaRef, orderBy("qaAskTime", order)));
        const list = data.docs.map((doc: any) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setQA(list);
      } catch (error) {
        console.log(error);
      }
    };
    fetchQA();
  }, [db, order]);
  return [QA, setQA, order, setOrder] as const;
}
