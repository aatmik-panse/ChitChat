import Comments from "./components/Comments";

function App() {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="font-sans flex flex-col text-center m-2 p-2">
        <h1 className="text-purple-950 text-4xl font-extrabold">Chat</h1>
        <a
          href="https://aatmik.de"
          target="_blank"
          className="text-blue-500 hover:underline"
        >
          <p className="text-purple-900 text-2xl">
            Welcome to the chat By Aatmik!{" "}
            <span role="img" aria-label="wave emoji">
              👋
            </span>
          </p>
        </a>
      </div>
      <Comments />
    </div>
  );
}

export default App;
