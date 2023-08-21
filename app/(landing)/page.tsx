import Link from "next/link";

import { Button } from "@/components/ui/button";
import { SignIn } from "@clerk/nextjs";

const Home = () => {
  return (
    <main className="flex min-h-screen flex-col items-center space-y-8 p-24">
      <h1 className="text-4xl font-bold">
        This is just the landing page (Unprotected)
      </h1>
      <SignIn />
      <Button children={<Link href="/dashboard">Go to the dashboard</Link>} />
    </main>
  );
};

export default Home;
