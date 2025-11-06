import Image from "next/image";
import { Pixelify_Sans } from 'next/font/google';
import "@/styles/landing_page_new.css";

const pixelifySans = Pixelify_Sans({
  weight: ['400', '700'],
});

export default function Home() {
  return (
    <>
      <main>
        <div
          style={{
            width: "100vw",
            height: "100vh",
            backgroundImage: "url('/bg.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat"
          }}
        ></div>
      </main>


      {/* <div className="brand-row">
        <Image
          className="logo"
          src="/images/W-Logo_White.png"
          alt="UW Logo"
          width={100}
          height={100}
        />
        <h1 className="brand-title">x</h1>
        <Image
          className="ewb-logo"
          src="/images/thumbnail_Square Logo - UWClear.png"
          alt="EWB Logo"
          width={100}
          height={100}
        />
      </div> */}
    </>
  );
}
