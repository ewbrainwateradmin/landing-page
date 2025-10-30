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
        {/* visuals */}
        <div className="visuals">
          <div id="clouds">
            <Image
              className="cloud"
              src="/images/thumbnail_cloud.png"
              alt="Cloud Thumbnail"
              width={200}
              height={100}
            />
            <Image
              className="cloud"
              src="/images/thumbnail_cloud.png"
              alt="Cloud Thumbnail"
              width={200}
              height={100}
            />
            <Image
              className="cloud"
              src="/images/thumbnail_cloud.png"
              alt="Cloud Thumbnail"
              width={200}
              height={100}
            />
          </div>

          {/* tree */}
          <Image
            className="tree_animation"
            src="/images/tree_animation2.gif"
            alt="landing page design"
            width={800}
            height={600}
            unoptimized
          />

          {/* sun */}
          <div className="sun" aria-hidden="true">
            <div className="sun-rays">
              <div className="ray r1"></div>
              <div className="ray r2"></div>
              <div className="ray r3"></div>
              <div className="ray r4"></div>
              <div className="ray r5"></div>
              <div className="ray r6"></div>
              <div className="ray r7"></div>
              <div className="ray r8"></div>
              <div className="ray r9"></div>
              <div className="ray r10"></div>
              <div className="ray r11"></div>
              <div className="ray r12"></div>
              <div className="ray r13"></div>
              <div className="ray r14"></div>
              <div className="ray r15"></div>
              <div className="ray r16"></div>
              <div className="ray r17"></div>
              <div className="ray r18"></div>
            </div>
          </div>

          {/* speech bubble */}
          <div className="bubble-wrap">
            <div className="water-droplet-words">
              <h4>did you know?</h4>
            </div>

            <Image
              className="speech_bubble"
              src="/images/speech bubble.png"
              alt="Speech Bubble"
              width={300}
              height={200}
            />
          </div>

          {/* arrow */}
          <Image
            className="arrow swing-notilt"
            src="/images/arrow2.png"
            alt="Arrow"
            width={100}
            height={100}
          />
        </div>

        {/* textcontent */}
        <div className={`additional-content ${pixelifySans.className}`}>
          <h2 className="stacked-words">
            <span>This</span> <span>Building</span> <span>Saves</span>
          </h2>
          <h3>WATER</h3>
          <p>more info coming soon</p>
        </div>
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
