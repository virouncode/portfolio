import myResume from "/assets/TV_KATTYGNARATH_CV.pdf";
import linkedin from "/assets/img/linkedin.svg";
import myPhoto from "/assets/img/portrait3.jpg";

const Hero = () => {
  const handleClickContact = async () => {
    try {
      await navigator.clipboard.writeText("virounk@gmail.com");
      alert(
        "Thank you! My email address has been copied to your clipboard. I look forward to speaking with you soon."
      );
    } catch (err) {
      if (err instanceof Error) {
        alert(`Failed to copy email! ${err.message}`);
      }
    }
  };
  return (
    <section
      className="min-h-[calc(100vh-45px)] lg:min-h-[calc(100vh-50px)] bg-blue-400 flex flex-col lg:flex-row items-center lg:gap-16 justify-center bg-[url('/assets/img/horizon-animated.svg')] bg-no-repeat bg-center bg-cover scroll-mt-11 lg:scroll-mt-14 p-8 "
      id="hero"
    >
      <div className="flex flex-col justify-center max-w-full text-center lg:text-left ">
        <h2 className="text-3xl lg:text-5xl">
          Hello, I am Viroun.{" "}
          <span className="font-display font-bold hover:opacity-80 hidden lg:inline">
            <a href="https://www.visitlaos.org/" target="_blank">
              ສະບາຍດີ
            </a>
          </span>
        </h2>
        <h3 className="text-lg lg:text-3xl mb-5">
          Front-end developer based in Paris, France.
        </h3>
        <p className="text-sm lg:text-base max-w-[60ch]">
          Passionate <span className="text-cream">Frontend React js</span>{" "}
          developer
          <br />
          Specializing in building effective and user-friendly{" "}
          <span className="text-cream">web applications</span>
          <br />
          <span className="text-cream">UI/UX</span> enthusiast with a curious
          and open mind
        </p>
        <div className="flex flex-col lg:flex-row items-center  gap-2 lg:gap-4 mt-4">
          <button
            className="px-4 py-2 rounded-md bg-cream text-sm w-60 hover:bg-opacity-90 hover:ring-1 hover:ring-offset-1 hover:ring-cream hover:shadow-lg active:shadow-none active:scale-[98%] transition-transform"
            onClick={handleClickContact}
          >
            Contact me
          </button>
          {/* <button className="px-4 py-2 rounded-md bg-cream text-sm w-60 hover:bg-opacity-90 hover:ring-1 hover:ring-offset-1 hover:ring-cream"> */}
          <a
            href={myResume}
            download="TV_KATTYGNARATH_resume.pdf"
            className="px-4 py-2 rounded-md bg-cream text-sm inline-block w-60 hover:bg-opacity-90 hover:ring-1 hover:ring-offset-1 hover:ring-cream text-center hover:shadow-lg active:shadow-none active:scale-[98%] transition-transform"
          >
            Download CV
          </a>
          {/* </button> */}
          <div className="hover:opacity-80">
            <a
              href="https://www.linkedin.com/in/viroun-kattygnarath-823a53a5"
              target="blank"
              className="hover:opacity-80"
            >
              <img src={linkedin} alt="linkedin-logo" />
            </a>
          </div>
        </div>
      </div>
      <div className="w-40 h-40  lg:w-60 lg:h-60 rounded-full overflow-hidden -order-1 lg:order-1">
        <img src={myPhoto} alt="photo of Viroun Kattygnarath" />
      </div>
    </section>
  );
};

export default Hero;
