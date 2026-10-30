import Head from "next/head";
import PrivacyPolicyPage from "@/components/privacy-policy";

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>Privacy Policy | Debonaire</title>
        <meta
          name="description"
          content="Read the Debonaire Privacy Policy to understand how we collect, use, store and protect your personal information when you visit our website or use our services."
        />
      </Head>
      <PrivacyPolicyPage />
    </>
  );
}