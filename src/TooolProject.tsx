import { useEffect, useState } from "react";
import next from "/assets/img/next.png";
import previous from "/assets/img/previous.png";
import tooolLogo from "/assets/img/tooolLogo.webp";
import tooolMainstep from "/assets/img/tooolMainstep.png";
import tooolMenuExport from "/assets/img/tooolMenuExport.png";
import tooolPadsMix from "/assets/img/tooolPadsMix.png";
import tooolProof from "/assets/img/tooolProof.png";

const tooolProjectImages = [
  tooolMainstep,
  tooolPadsMix,
  tooolMenuExport,
  tooolProof,
];

const TooolProject = () => {
  const [projectImg, setProjectImg] = useState(0);
  const [preloadedImages, setPreloadedImages] = useState<HTMLImageElement[]>(
    []
  );
  useEffect(() => {
    // Function to preload images
    const preloadImages = () => {
      const loadedImages = tooolProjectImages.map((img) => {
        const image = new Image();
        image.src = img; // Set the src to the image path
        return image; // Return the Image object
      });
      setPreloadedImages(loadedImages); // Store the loaded images in state
    };

    preloadImages(); // Call the preload function on component mount
  }, []);

  const handleClickNext = () => {
    setProjectImg((index) => (index + 1) % tooolProjectImages.length);
  };
  const handleClickPrevious = () => {
    setProjectImg((index) =>
      index - 1 >= 0 ? index - 1 : tooolProjectImages.length + (index - 1)
    );
  };
  return (
    <>
      <div className="md:max-w-3xl">
        <div className="flex flex-col lg:flex-row items-center mb-5 justify-between">
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
        <div className="text-sm text-justify">
          <span className="text-blue-400 font-bold">
            Co-creation and development
          </span>{" "}
          with my best friend of a mobile{" "}
          <span className="text-blue-400 font-bold">iOS/Android app</span> that
          helps music producers to create and mix music on the go. The app is
          designed to look like an audio plug-in, user-friendly and intuitive.
        </div>
        <div className="text-sm text-justify">
          <span className="text-blue-400 font-bold">Stack</span>: C++, JUCE
          framework
          <br />
          <p>
            <span className="text-blue-400 font-bold">Key features</span>: Music
            generator, 460 chord progressions in all keys, 250 rhythmic
            patterns, 50 sound packs, human groove, mixing desk, step sequencer,
            MIDI/wav/stems export.
          </p>
        </div>
      </div>
      <div className="flex justify-between items-center gap-2 lg:px-20 lg:py-5 flex-1 overflow-hidden w-full">
        <img
          src={previous}
          alt="previous"
          className="w-6 lg:w-8 cursor-pointer hover:opacity-80"
          onClick={handleClickPrevious}
        />
        <div className="flex-1 h-full flex justify-center">
          <img
            src={preloadedImages[projectImg]?.src}
            alt={`Screenshot of Toool App: ${projectImg}`}
            className="object-contain h-full"
          />
        </div>
        <img
          src={next}
          alt="next"
          className="w-6 lg:w-8 cursor-pointer hover:opacity-80"
          onClick={handleClickNext}
        />
      </div>
    </>
  );
};

export default TooolProject;
