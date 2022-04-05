import type { NextPage } from "next";
import SearchAppBar from "../components/searchBox/searchbox";
import { WelcomePage } from "../components/WelcomePage/welcome";
const Home: NextPage = () => {
  return (
    <div>
      <WelcomePage />
    </div>
  );
};

export default Home;
