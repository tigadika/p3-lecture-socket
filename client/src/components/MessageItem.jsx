export default function MessageItem({ message }) {
  return (
    <>
      <div
        className={
          "flex flex-col " +
          (message.sender == localStorage.username ? "self-end items-end" : "")
        }
      >
        <span className="text-[9px]">{message.sender}</span>
        <div className="bg-white w-fit px-4 py-1">{message.message}</div>
      </div>
    </>
  );
}
