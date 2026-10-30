import Head from "next/head";
import CustomerEngagement from "../../components/online-growth/service-pages/CustomerEngagement";

export default function CustomerEngagementPage() {
  return (
    <>
      <Head>
        <title>Email & WhatsApp Marketing Services Singapore | Debonaire</title>
        <meta
          name="description"
          content="Engage and retain customers with email and WhatsApp marketing services in Singapore. Create personalised campaigns and automated follow-ups with Debonaire."
        />
      </Head>
      <CustomerEngagement />
    </>
  );
}