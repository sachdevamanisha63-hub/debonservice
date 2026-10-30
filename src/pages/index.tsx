
import Head from "next/head";
import HomePage from "@/components/home";

export default function Home() {
  return (
    <>
      <Head>
        <title>Digital Marketing & Business Solutions Singapore | Debonaire </title>
        <meta
          name="description"
          content="Debonaire offers digital marketing, web and app development, business operations and flexible workspace solutions in Singapore. Explore our services."
        />
      </Head>
      <HomePage/>
    </>
  );
}
