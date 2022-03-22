import type { NextPage } from "next";
import Layout from "../components/ui/Layout";
import Welcome from "../components/welcome/Welcome";

const Home: NextPage = () => {
  return (
    <Layout>
      <Welcome />
    </Layout>
  );
};

export default Home;