import type { NextPage } from "next";
import { WelcomePage } from "../components/WelcomePage/welcome";
import { AppStyle } from "../components/App/styled";
import SignInForm from "../components/Sign In";
const Home: NextPage = () => {
  return <SignInForm />;
};

export default Home;
