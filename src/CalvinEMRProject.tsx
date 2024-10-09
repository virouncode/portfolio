import { useState } from "react";
import calvinAI from "./assets/img/calvinemrAI.png";
import calvinBilling from "./assets/img/calvinemrBilling.png";
import calvinCalendar from "./assets/img/calvinemrCalendar.png";
import calvinDashboard from "./assets/img/calvinemrDashboard.png";
import calvinFax from "./assets/img/calvinemrFax.png";
import calvinMessages from "./assets/img/calvinemrMessages.png";
import calvinPrescription from "./assets/img/calvinemrPrescription.png";
import calvinRecord from "./assets/img/calvinemrRecord.png";
import calvinRoles from "./assets/img/calvinemrRoles.png";
import calvinLogo from "./assets/img/calvinLogo.png";
import next from "./assets/img/next.png";
import previous from "./assets/img/previous.png";

const calvinProjectImages = [
  calvinCalendar,
  calvinRecord,
  calvinMessages,
  calvinFax,
  calvinPrescription,
  calvinAI,
  calvinBilling,
  calvinRoles,
  calvinDashboard,
];
const CalvinEMRProject = () => {
  const [projectImg, setProjectImg] = useState(0);
  const handleClickNext = () => {
    setProjectImg((index) => (index + 1) % calvinProjectImages.length);
  };
  const handleClickPrevious = () => {
    setProjectImg((index) =>
      index - 1 >= 0 ? index - 1 : calvinProjectImages.length + (index - 1)
    );
  };
  return (
    <>
      <div className="md:max-w-3xl">
        <div className="flex flex-col lg:flex-row items-center mb-5 justify-between">
          <div className="flex gap-4 items-center mb-4 lg:mb-0">
            <h3 className="text-lg font-bold">
              Calvin EMR: Electronic Medical Records
            </h3>
            <div className="w-24 rounded-md overflow-hidden hidden md:block">
              <img src={calvinLogo} alt="calvinemr-logo" />
            </div>
          </div>
          <button className="px-4 py-2 rounded-md bg-blue-400 text-sm w-60 hover:bg-opacity-90 hover:ring-1 hover:ring-offset-1 hover:ring-blue-400 text-cream">
            <a
              href="https://calvinemr-test-6eda3b670bc7.herokuapp.com/"
              target="_blank"
            >
              Demo
            </a>
          </button>
        </div>
        <div className="text-sm text-justify">
          <span className="text-blue-400 font-bold">Full development </span>of a
          SaaS platform designed to help Ontario (Canada) practitioners
          efficiently manage patient medical records and appointments within a
          medical clinic. In collaboration with a doctor.
        </div>
        <div className="text-sm text-justify">
          <span className="text-blue-400 font-bold">Frontend</span>: Typescript,
          React/Vite, React Query, Sass/Scss.
          <br />
          <span className="text-blue-400 font-bold"> Backend</span>: Typescript,
          Node js, Express, Xano (database & ORM).
          <br />
          <p>
            <span className="text-blue-400 font-bold">Key features</span>:
            Role-based authentication, shared calendar, SMS, Email, Efax,
            Prescriptions management, AI, Billing management, XML export
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
            src={calvinProjectImages[projectImg]}
            alt="calvinemr-screenshot"
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

export default CalvinEMRProject;
