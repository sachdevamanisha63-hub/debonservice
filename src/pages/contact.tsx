import Head from "next/head";
import ContactPage from "@/components/contact";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact Debonaire | Business Solutions Singapore</title>
        <meta
          name="description"
          content="Contact Debonaire in Singapore for digital marketing, web development, AI solutions, business support and flexible workspaces. Send us your enquiry today."
        />
      </Head>
      <ContactPage />
    </>
  );
}