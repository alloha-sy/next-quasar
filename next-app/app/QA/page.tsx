"use client";
import useQA from "./useQA";

export default function Qa() {
  const [QA, setQA, order, setOrder] = useQA();
  const orderIsChange = (e: any) => {
    order === "desc" ? setOrder("asc") : setOrder("desc");
  };
  console.log(order);
  return (
    <>
      <button type="button" onClick={orderIsChange}>
        {order === "desc" ? "up" : "down"}
      </button>
      <div>
        <ul>
          {QA.map((x) => (
            <li key={x.id}>
              {x.question} / {x.answer}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
