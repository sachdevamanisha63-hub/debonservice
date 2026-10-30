import Head from "next/head";
import BusinessOperations from "@/components/buisness-operations";

export default function BusinessOperationsPage() {
  return (
    <>
      <Head>
        <title>Business Operations Services Singapore | Debonaire</title>
        <meta
          name="description"
          content="Simplify business operations in Singapore with corporate secretarial, bookkeeping, accounting, registered address and business planning services from Debonaire."
        />
      </Head>
      <BusinessOperations />
    </>
  );
}