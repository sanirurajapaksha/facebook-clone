import Head from "next/head";
import Header from "../Components/Header";
import Stories from "../Components/Stories";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Facebook Clone</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/profile_pic.jpg" />
      </Head>
      <Header />
      <div className=""></div>
    </div>
  );
}
