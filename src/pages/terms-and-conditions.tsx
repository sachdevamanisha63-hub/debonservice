import Head from "next/head";
import TermsAndConditionsPage from "@/components/terms-&-conditions";

export default function TermsAndConditions() {
  return (
    <>
      <Head>
        <title>Terms & Conditions | Debonaire</title>
        <meta
          name="description"
          content="Review Debonaire's Terms & Conditions for information about our services, client agreements, payments, responsibilities and website usage policies."
        />
      </Head>
      <TermsAndConditionsPage />
    </>
  );
}