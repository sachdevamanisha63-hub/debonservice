import Head from "next/head";
import AboutPage from "@/components/about";

export default function About() {
  return (
    <>
      <Head>
        <title>About Debonaire | Digital & Business Solutions Singapore</title>
        <meta
          name="description"
          content="Learn about Debonaire, a Singapore-based provider of digital marketing, web and app development, business operations and flexible workspace solutions."
        />
      </Head>
      <AboutPage />
    </>
  );
}