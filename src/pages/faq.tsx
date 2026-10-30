import Head from "next/head";
import FaqPage from "@/components/faq";

export default function Faq() {
  return (
    <>
      <Head>
        <title>FAQs | Digital & Business Services | Debonaire</title>
        <meta
          name="description"
          content="Find answers to common questions about Debonaire, including digital marketing, website development, AI solutions, business support and flexible workspaces."
        />
      </Head>
      <FaqPage />
    </>
  );
}