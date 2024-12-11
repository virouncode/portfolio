import Carousel from "./Carousel";
import calvinLogo from "/assets/img/calvinLogo.png";

const calvinEMRImages = [
  {
    id: 1,
    url: "/assets/img/calvinemrCalendar.png",
    title: "CalvinEMR Calendar",
  },
  { id: 2, url: "/assets/img/calvinemrRecord.png", title: "CalvinEMR Record" },
  {
    id: 3,
    url: "/assets/img/calvinemrMessages.png",
    title: "CalvinEMR Messages",
  },
  { id: 4, url: "/assets/img/calvinemrFax.png", title: "CalvinEMR Fax" },
  {
    id: 5,
    url: "/assets/img/calvinemrPrescription.png",
    title: "CalvinEMR Prescription",
  },
  { id: 6, url: "/assets/img/calvinemrAI.png", title: "CalvinEMR AI" },
  {
    id: 7,
    url: "/assets/img/calvinemrBilling.png",
    title: "CalvinEMR Billing",
  },

  { id: 8, url: "/assets/img/calvinemrRoles.png", title: "CalvinEMR Roles" },

  {
    id: 9,
    url: "/assets/img/calvinemrDashboard.png",
    title: "CalvinEMR Dashboard",
  },
];
const CalvinEMRProject = () => {
  return (
    <>
      <div className="md:max-w-4xl md:h-1/4">
        <div className="flex flex-col lg:flex-row items-center mb-5 justify-between md:max-w-3xl">
          <div className="flex gap-4 items-center mb-4 lg:mb-0">
            <h3 className="text-lg font-bold">
              Calvin EMR: Electronic Medical Records
            </h3>
            <div className="w-24 rounded-md overflow-hidden hidden md:block">
              <img src={calvinLogo} alt="calvinemr-logo" />
            </div>
          </div>
          <a
            href="https://calvinemr-test-6eda3b670bc7.herokuapp.com/"
            target="_blank"
            className="px-4 py-2 rounded-md bg-blue-400 text-sm w-60 hover:bg-opacity-90 hover:ring-1 hover:ring-offset-1 hover:ring-blue-400 text-cream inline-block text-center hover:shadow-lg active:shadow-none active:scale-[98%] transition-transform"
          >
            Demo
          </a>
        </div>
        <div className="text-sm text-justify md:max-w-3xl">
          <span className="text-blue-400 font-bold">Full development </span>of a
          SaaS platform designed to help Ontario (Canada) practitioners
          efficiently manage patient medical records and appointments within a
          medical clinic. In collaboration with a doctor.
        </div>
        <div className="text-sm text-justify md:max-w-3xl">
          <span className="text-blue-400 font-bold">Frontend</span>: Typescript,
          React/Vite, React Query, Sass/Scss.
          <br />
          <span className="text-blue-400 font-bold md:max-w-3xl"> Backend</span>
          : Typescript, Node js, Express, Xano.
          <br />
          <p>
            <span className="text-blue-400 font-bold md:max-w-3xl">
              Key features
            </span>
            : Real-time update through web sockets, authentication, Role-based
            access, shared calendar, SMS, Email, Efax, Prescriptions management,
            AI, Billing management, XML export
          </p>
        </div>
      </div>
      <Carousel images={calvinEMRImages} imagesPerSlide={1} />
    </>
  );
};

export default CalvinEMRProject;
