import { useNavigate } from "react-router";
import Button from "@/components/Button";
import Img from "@/components/Img";

export default function Onboarding() {
  const navigate = useNavigate();
  return (
    <main className="relative flex min-h-dvh flex-col bg-[#050505] text-white">
      <div className="absolute inset-x-0 top-0 h-[68%] md:h-[78%]">
        <Img src="/images/onboarding.jpg" alt="Coffee cup with beans" />
        <div className="absolute inset-0 bg-linear-to-b from-[#050505]/15 from-30% to-[#050505]" />
      </div>
      <div className="relative mx-auto mt-auto w-full max-w-140 px-6 pb-9 text-center md:pb-16">
        <h1 className="px-2 text-[32px] font-semibold leading-normal md:text-5xl">
          Fall in Love with Coffee in Blissful Delight!
        </h1>
        <p className="mb-8 mt-2 px-3 text-sm text-muted md:text-base">
          Welcome to our cozy coffee corner, where every cup is a delightful for you.
        </p>
        <Button onClick={() => navigate("/home")} className="md:mx-auto md:max-w-90">
          Get Started
        </Button>
      </div>
    </main>
  );
}
