import CustomStackIcon from "./CustomStackIcon";
import compass from "/assets/img/compass.png";
import juceLogo from "/assets/img/juceLogo.png";
import key from "/assets/img/key.png";
import peace from "/assets/img/peace.png";
import spy from "/assets/img/spy.png";
import book from "/assets/img/vocabulary.png";
import xanoLogo from "/assets/img/xanoLogo.jpg";
import zoom from "/assets/img/zoom-check.png";

const Skills = () => {
  return (
    <section
      className="min-h-[calc(100vh-45px)] lg:h-[calc(100vh-50px)] bg-blue-400  bg-[url('/assets/img/horizon-animated.svg')] bg-no-repeat bg-center bg-cover scroll-mt-11 lg:scroll-mt-14  flex justify-center items-center"
      id="skills"
    >
      <div className="flex items-center gap-20 justify-center max-w-[1700px] p-8">
        <h2 className="absolute -left-full">My Skills</h2>
        <div className="flex flex-col gap-4 sm:flex-row justify-between lg:max-w-6xl lg:gap-10">
          <div className="flex flex-col border-2 shadow-md rounded-md sm:w-2/3 lg:w-1/2">
            <div className="bg-cream p-2 font-light text-base lg:text-lg">
              STACK
            </div>
            <div className="flex-1 bg-blue-400 grid grid-cols-3 grid-rows-3 gap-4 md:gap-10 overflow-hidden p-4">
              <CustomStackIcon name="typescript" label="typescript" />
              <CustomStackIcon name="reactjs" label="reactjs" />
              <CustomStackIcon name="reactquery" label="react query" />
              {/* <CustomStackIcon name="reactrouter" label="react router" /> */}
              {/* <CustomStackIcon name="vitejs" label="vitejs" /> */}
              <CustomStackIcon name="tailwindcss" label="tailwindcss" />
              <CustomStackIcon name="sass" label="sass" />
              <CustomStackIcon name="nodejs" label="nodejs/express" />
              {/* <CustomStackIcon name="openai" label="openai" /> */}
              <CustomStackIcon name="c++" label="c++" />
              <figure className="flex flex-col gap-2 items-center">
                <img
                  src={juceLogo}
                  alt="juce-framework-logo"
                  className="w-2/3"
                  loading="lazy"
                />
                <figcaption className="text-xs text-slate-600">juce</figcaption>
              </figure>
              {/* <CustomStackIcon name="html5" label="html5" />
            <CustomStackIcon name="css3" label="css3" /> */}
              {/* <CustomStackIcon name="git" label="git" />

            <CustomStackIcon name="figma" label="figma" /> */}
              <figure className="flex flex-col gap-2 items-center">
                <img
                  src={xanoLogo}
                  alt="xano-logo"
                  className="w-2/3"
                  loading="lazy"
                />
                <figcaption className="text-xs text-slate-600">xano</figcaption>
              </figure>
            </div>
          </div>
          <div className="flex flex-col border-2 shadow-md rounded-md  sm:w-1/3 lg:w-1/2">
            <div className="bg-cream p-2 font-light text-base lg:text-lg">
              SOFT SKILLS
            </div>
            <div className="flex-1 bg-blue-400 flex justify-center items-center">
              <ul className="flex flex-col p-4 gap-2 md:gap-4 text-sm md:text-base lg:text-xl">
                <li className="flex items-center">
                  <img
                    src={key}
                    alt="key-logo"
                    className="w-5 mr-2"
                    loading="lazy"
                  />
                  <p>Problem-solving</p>
                </li>
                <li className="flex items-center">
                  <img
                    src={zoom}
                    alt="zoom-logo"
                    className="w-5 mr-2"
                    loading="lazy"
                  />
                  <p>Attention to detail</p>
                </li>
                <li className="flex items-center">
                  <img
                    src={spy}
                    alt="spy-logo"
                    className="w-5 mr-2"
                    loading="lazy"
                  />
                  <p>Curiosity</p>
                </li>
                <li className="flex items-center">
                  <img
                    src={book}
                    alt="book-logo"
                    className="w-5 mr-2"
                    loading="lazy"
                  />
                  <p>Eagerness to learn</p>
                </li>
                <li className="flex items-center">
                  <img
                    src={peace}
                    alt="peace-logo"
                    className="w-5 mr-2"
                    loading="lazy"
                  />
                  <p>Composure</p>
                </li>
                <li className="flex items-center">
                  <img
                    src={compass}
                    alt="compass-logo"
                    className="w-5 mr-2"
                    loading="lazy"
                  />
                  <p>Autonomy</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
