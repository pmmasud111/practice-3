import React, { useState } from "react";

export default function AvoidContradiction() {
  const [text, setText] = useState("");

  return (
    <div>
      <h1 className="text-3xl font-bold">
        How was your stay at The Prancing Pony?
      </h1>
      <div>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="border-2 mt-4 rounded-md p-2"
          name="feadback"
          id=""
          cols="30"
          rows="3"
        ></textarea>
      </div>
      <button className="text-xl font-semibold bg-purple-600 rounded py-1 px-6 text-white mt-2">
        Send
      </button>
    </div>
  );
}

// import React, { useState } from "react";

// export default function FeedbackForm() {
//   const [text, setText] = useState("");
//   const [status, setStatus] = useState("typing");

//   async function handleSubmit(e) {
//     e.preventDefault();
//     setStatus("sending");
//     await sendMessage(text);
//     setStatus("sent");
//   }

//   const isSending = status === "sending";
//   const isSent = status === "sent";

//   if (isSent) {
//     return <h1>Thanks for feedback!</h1>;
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <p>How was your stay at The Prancing Pony?</p>
//       <textarea
//         disabled={isSending}
//         value={text}
//         onChange={(e) => setText(e.target.value)}
//       />
//       <br />
//       <button disabled={isSending} type="submit">
//         Send
//       </button>
//       {isSending && <p>Sending...</p>}
//     </form>
//   );
// }

// // Pretend to send a message.
// function sendMessage(text) {
//   return new Promise((resolve) => {
//     setTimeout(resolve, 2000);
//   });
// }
