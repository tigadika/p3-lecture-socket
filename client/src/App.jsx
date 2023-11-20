import { useState } from "react";
import MessageItem from "./components/MessageItem";

function App() {
  const [messages, setMessages] = useState([
    { message: "testing", sender: "user1" },
    { message: "testing 2", sender: "user2" },
  ]);

  const [input, setInput] = useState({
    chat: "",
  });

  const handleTextAreaOnChange = (e) => {
    const { name, value } = e.target;
    setInput(() => ({ ...input, [name]: value }));
  };

  const handleSubmitFormMessage = (e) => {
    e.preventDefault();
    setMessages(() => [
      ...messages,
      { message: input.chat, sender: localStorage.username },
    ]);
    setInput(() => ({ chat: "" }));
  };

  return (
    <>
      <div className="container mx-auto bg-yellow-100 h-[768px] grid grid-cols-3 my-10">
        <div className="bg-white border border-gray-400 flex flex-col">
          <div className="bg-gray-300 px-4 py-6">Username</div>
          <div className="overflow-scroll h-[700px]">
            <div className="border px-4 py-6 hover:bg-gray-200 cursor-pointer">
              contact 1
            </div>
            <div className="border px-4 py-6 hover:bg-gray-200 cursor-pointer">
              contact 2
            </div>
          </div>
        </div>
        <div className="h-full col-span-2 bg-gray-300 border border-gray-400 flex flex-col-reverse">
          <form onSubmit={handleSubmitFormMessage}>
            <div className="bg-white px-4 py-6 flex justify-center gap-3 items-center">
              <textarea
                onChange={handleTextAreaOnChange}
                name="chat"
                id="chat"
                cols="100"
                rows="2"
                className="border border-gray-400 px-2 py-1"
                value={input.chat}
              ></textarea>
              <button className="px-6 py-3 bg-gray-300" type="submit">
                Send
              </button>
            </div>
          </form>

          {/* message container */}
          <div className="flex flex-col gap-3 m-3">
            {messages &&
              messages.map((el, i) => <MessageItem key={i} message={el} />)}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
