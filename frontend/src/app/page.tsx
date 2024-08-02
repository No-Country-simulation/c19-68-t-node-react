"use client";

import First from "@/components/onboarding/First";
import Secound from "@/components/onboarding/Secound";
import Finaly from "@/components/onboarding/Finaly";
import { useRouter } from "next/navigation";
import Header from "@/components/onboarding/Header";
import Onboarding from "@/components/onboarding/Onboarding";

const page = () => {
  return (
    <div>
      <Onboarding />
    </div>
  );
};

export default page;
