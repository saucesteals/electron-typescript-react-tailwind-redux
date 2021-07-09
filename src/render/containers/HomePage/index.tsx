import ReactLogo from '@assets/icons/react.png';
import TestSvg from '@assets/icons/test.svg';

const HomePage = () => {
  return (
    <div className="flex bg-pink-300 h-screen w-screen justify-center items-center p-6 flex-col">
      <h2>Hello from React!</h2>
      <img src={ReactLogo} width="100" />
      <img src={TestSvg} width="100" />
      <div className="flex flex-row justify-between mt-6 px-6 w-full">
        <button onClick={window.electron.quit}>Close</button>
        <button onClick={window.electron.hide}>Hide</button>
        <button onClick={window.electron.relaunch}>Relaunch</button>
      </div>
    </div>
  );
};

export default HomePage;
