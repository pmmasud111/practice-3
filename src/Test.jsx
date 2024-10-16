import { useState } from "react";

const Test = () => {
  const [answer, setAnswer] = useState([]);

  console.log(answer);

  const answers = [
    {
      index: "A",
      answer:
        "Listen to the recording and answer the question by selecting all the tortoise",
    },
    {
      index: "B",
      answer:
        "Listen to the recording and answer the question by selecting all the tortoise and Listen to the recording and answer the question by selecting all the tortoise Listen to the recording and answer the question by selecting all the tortoise and Listen to the recording and answer the question by selecting all the tortoise",
    },
    {
      index: "C",
      answer:
        "Listen to the recording and answer the question by selecting all the question color fact on global earth",
    },
    {
      index: "D",
      answer:
        "Listen to the recording and answer the question by selecting all the tortoise and Listen to the recording and answer the question by selecting all the tortoise",
    },
    {
      index: "E",
      answer:
        "Listen to the recording and answer the question by selecting all the question color fact on global earth",
    },
  ];

  return (
    <>
      <h1>Test</h1>
      <div className="max-w-[900px] mx-auto">
        {answers &&
          answers.map((item, i) => (
            <Label item={item} key={i} setAnswer={setAnswer} answer={answer} />
          ))}
      </div>
    </>
  );
};

export default Test;

const Label = ({ item, setAnswer, answer }) => {
  const [check, setCheck] = useState(false);

  const handleClick = (data) => {
    const value = data.answer;
    if (check) {
      setAnswer([...answer, value]);
    } else {
      setAnswer(answer.filter((newItem) => newItem.answer !== value));
    }
  };

  return (
    <label
      onClick={() => {
        handleClick(item);
        setCheck(!check);
      }}
      htmlFor={item?.index}
      className="flex items-center border p-4 my-2 rounded-md hover:bg-red-100 list-none gap-2 duration-300"
    >
      <input
        className="h-6 w-6 peer relative shrink-0 border-2 border-red-400 rounded-sm mt-1 bg-red-300 "
        type="checkbox"
        name=""
        id={item?.index}
      />
      <h1 className="font-semibold text-xl text-red-400">{item?.index}.</h1>
      <li className="text-md cursor-pointer">{item?.answer}</li>
    </label>
  );
};
