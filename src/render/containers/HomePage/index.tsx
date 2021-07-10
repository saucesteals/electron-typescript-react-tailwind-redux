import { store } from "@store";
import ReactLogo from "@assets/icons/react.svg";
import { useSelector } from "react-redux";
import React, { useState } from "react";

const HomePage = () => {
  const [show, setShow] = useState(true);

  const currentState = useSelector((state) => state);

  return (
    <div
      style={{ fontFamily: "Open Sans" }}
      className="flex flex-col w-screen h-screen bg-black items-center justify-center p-12 text-white"
    >
      <img
        onClick={() => window.electron.openUrl("https://reactjs.org/")}
        src={ReactLogo}
        className="mb-12 cursor-pointer"
        height={69}
        width={69}
      />
      <div className="font-bold mb-4">
        React + Tailwind + Electron + Redux = ♥
      </div>
      <div className="flex flex-row text-pink-300">
        By&nbsp;
        <div
          className="cursor-pointer hover:text-blue-400 hover:underline"
          onClick={() =>
            window.electron.openUrl("https://github.com/saucesteals/")
          }
        >
          <strong>Daniel</strong>
        </div>
        &nbsp;&&nbsp;
        <div
          className="cursor-pointer hover:text-blue-400 hover:underline"
          onClick={() =>
            window.electron.openUrl("https://github.com/fourwadu/")
          }
        >
          <strong>Noah</strong>
        </div>
      </div>
      {show ? (
        <pre className="bg-blue-500 w-1/2 p-4 text-center rounded-md m-12">
          {JSON.stringify(currentState)}
        </pre>
      ) : null}
      <div className="cursor-pointer p-4" onClick={() => setShow(!show)}>
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

      <div className="flex flex-row text-pink-300 p-2">
        <button
          onClick={async () => {
            window.electron.openPath(await window.store.getPath());
          }}
        >
          Open Store
        </button>
      </div>
    </div>
  );
};

export default HomePage;
