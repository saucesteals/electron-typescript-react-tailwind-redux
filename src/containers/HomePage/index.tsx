import ReactLogo from "@assets/icons/react.png";
import TestSvg from "@assets/icons/test.svg";

const HomePage = () => {
  return (
    <div className="flex bg-pink-300 h-screen w-screen justify-center items-center p-6">
      <h2>Hello from React!</h2>
      <img src={ReactLogo} width="100" />
      <img src={TestSvg} width="100" />
    </div>
  );
};

export default HomePage;
