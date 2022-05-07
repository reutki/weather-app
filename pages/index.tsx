import type { NextPage } from "next";
import { WelcomePage } from "../components/WelcomePage/welcome";
import { AppStyle } from "../components/App/styled";
import SignInForm from "../components/Sign In";
import SignUpForm from "../components/SignUp";
import StartScreen from "../components/StartScreen";

const Home: NextPage = () => {
  return <StartScreen />;
};

export default Home;
