import type { NextPage } from "next";
import { WelcomePage } from "../components/WelcomePage/welcome";
import { AppStyle } from "../components/App/styled";
import SignInForm from "../components/Sign In";
import SignUpForm from "../components/SignUp";
const Home: NextPage = () => {
  return <SignUpForm />;
};

export default Home;
