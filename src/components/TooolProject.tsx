import Carousel from "./Carousel";
import tooolLogo from "/assets/img/tooolLogo.webp";

const tooolImages = [
  { id: 1, url: "/assets/img/tooolMainstep.png", title: "Toool Mainstep" },
  { id: 2, url: "/assets/img/tooolPadsMix.png", title: "Toool Pads Mix" },
  { id: 3, url: "/assets/img/tooolMenuExport.png", title: "Toool Menu Export" },
  { id: 4, url: "/assets/img/tooolProof.png", title: "Toool Proof" },
];

const TooolProject = () => {
  return (
    <>
      <div className="md:max-w-4xl md:h-1/4">
        <div className="flex flex-col lg:flex-row items-center mb-5 justify-between md:max-w-3xl">
          <div className="flex gap-4 items-center mb-4 lg:mb-0">
            <h3 className="text-lg font-bold">Toool Music Production App</h3>
            <div className="w-8 rounded-md overflow-hidden hidden md:block">
              <img src={tooolLogo} alt="toool-app-logo" />
            </div>
          </div>
          <a
            href="https://www.toool.fr"
            target="_blank"
            className="px-4 py-2 rounded-md bg-blue-400 text-sm w-60 hover:bg-opacity-90 hover:ring-1 hover:ring-offset-1 hover:ring-blue-400 text-cream inline-block text-center hover:shadow-lg active:shadow-none active:scale-[98%] transition-transform"
          >
            Demo
          </a>
        </div>
        <div className="text-sm text-justify md:max-w-3xl">
          <span className="text-blue-400 font-bold">
            Co-creation and development
          </span>{" "}
          with my best friend of a mobile{" "}
          <span className="text-blue-400 font-bold">iOS/Android app</span> that
          helps music producers to create and mix music on the go. The app is
          designed to look like an audio plug-in, user-friendly and intuitive.
        </div>
        <div className="text-sm text-justify md:max-w-3xl">
          <span className="text-blue-400 font-bold">Stack</span>: C++, JUCE
          framework
          <br />
          <p>
            <span className="text-blue-400 font-bold md:max-w-3xl">
              Key features
            </span>
            : Music generator, 460 chord progressions in all keys, 250 rhythmic
            patterns, 50 sound packs, human groove, mixing desk, step sequencer,
            MIDI/wav/stems export.
          </p>
        </div>
      </div>
      <Carousel images={tooolImages} imagesPerSlide={1} />
    </>
  );
};

export default TooolProject;
