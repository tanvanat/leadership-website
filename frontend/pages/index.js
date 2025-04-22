import Link from "next/link";

export default function Firstpage() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/background.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      <div className="relative grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-7 gap-8 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-10 row-start-2 items-center">
          <a className="text-white font-bold text-4xl">
            BECOME A<br></br>LEADER<br></br>RANKED 6TH<br></br>WITH MRIH
          </a>
          <a className="text-white font-bold text-1xl">
            Our app is for enthusiastic<br></br>learners who dream of a better{" "}
            <br></br>version of yourself
          </a>

          <div className="flex items-center flex-col sm:flex-row">
            <Link
              href="/page2"
              className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-white text-background hover:bg-[#f2f2f2] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            >
              Continue
            </Link>
          </div>
        </main>
      </div>
    </div>
  );
}
