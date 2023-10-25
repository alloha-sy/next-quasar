"use client";
import useMessageQA from "./useMessageQA";
export default function MessageQA() {
  const [createQA] = useMessageQA();
  return <button onClick={createQA}>+</button>;
}
