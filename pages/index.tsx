import type { NextPage } from "next";
import { WelcomePage } from "../components/WelcomePage/welcome";
import { AppStyle } from "./styled";
const Home: NextPage = () => {
  return (
    <AppStyle>
      <WelcomePage />
    </AppStyle>
  );
};

export default Home;
