import { store } from "@store";
import ReactLogo from "@assets/icons/react.png";
import { useSelector } from "react-redux";
import { useState } from "react";
import { devNull } from "node:os";

const HomePage = () => {
  const [show, setShow] = useState(true);

  const currentState = useSelector((state) => state);

  const openUrl = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <div
      style={{ fontFamily: "Open Sans" }}
      className="flex flex-col w-screen h-screen bg-black items-center justify-center p-12 text-white"
    >
      <div className="font-bold mb-4">
        React + Tailwind + Electron + Redux = ♥
      </div>
      <div className="flex flex-row text-pink-300">
        By&nbsp;
        <div
          className="cursor-pointer hover:text-blue-400 hover:underline"
          onClick={() => openUrl("https://github.com/saucesteals/")}
        >
          <strong>Daniel</strong>
        </div>
        &nbsp;&&nbsp;
        <div
          className="cursor-pointer hover:text-blue-400 hover:underline"
          onClick={() => openUrl("https://github.com/fourwadu/")}
        >
          <strong>Noah</strong>
        </div>
      </div>
      {show ? (
        <pre className="bg-blue-500 w-1/2 p-4 text-center rounded-md m-12">
          {JSON.stringify(currentState)}
        </pre>
      ) : null}
      <div className="cursor-pointer mb-4" onClick={() => setShow(!show)}>
        Click here to {show ? "hide" : "show"} your <strong>Redux</strong> store
      </div>
      <div className="flex flex-row text-pink-300">
        <button
          className="mr-4"
          onClick={() => store.dispatch({ type: "counter/INCREMENT" })}
        >
          Increase
        </button>
        <button onClick={() => store.dispatch({ type: "counter/DECREMENT" })}>
          Decrease
        </button>
      </div>
    </div>
  );
};

export default HomePage;
