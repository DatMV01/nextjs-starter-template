import { TestScrollAnimation } from "@/components";
import Image from "next/image";

export default function Main() {
  return (
    <>
      <main className="font-sans flex min-h-screen w-full flex-col items-center justify-center gap-10">
        <div>Sample Text</div>

        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
      </main>

 
     <div className="flex flex-col justify-center items-center"> <TestScrollAnimation /></div>
    </>
  );
}
