import Carousel from "./Carousel";
import fm4allLogo from "/assets/img/fm4allLogo.png";

const Fm4AllImages = [
  {
    id: 1,
    url: "/assets/img/fm4all_hero.png",
    title: "fm4All Hero Section",
  },
  { id: 2, url: "/assets/img/fm4all_ceo.png", title: "fm4All CEO testimonial" },
  {
    id: 3,
    url: "/assets/img/fm4all_funnel.png",
    title: "fm4All funnel",
  },
  {
    id: 4,
    url: "/assets/img/fm4all_total.png",
    title: "fm4All funnel total sheet",
  },
  {
    id: 5,
    url: "/assets/img/fm4all_devis.png",
    title: "fm4All pdf devis generation",
  },
];
const Fm4AllProject = () => {
  return (
    <>
      <div className="md:max-w-4xl md:h-1/4">
        <div className="flex flex-col lg:flex-row items-center mb-5 justify-between md:max-w-3xl">
          <div className="flex gap-4 items-center mb-4 lg:mb-0">
            <h3 className="text-lg font-bold">
              fm4All : Le Facility Management pour tous
            </h3>
            <div className="w-24 rounded-md overflow-hidden hidden md:block">
              <img src={fm4allLogo} alt="fm4All-logo" />
            </div>
          </div>
          <a
            href="https://www.fm4all.com/"
            target="_blank"
            className="px-4 py-2 rounded-md bg-blue-400 text-sm w-60 hover:bg-opacity-90 hover:ring-1 hover:ring-offset-1 hover:ring-blue-400 text-cream inline-block text-center hover:shadow-lg active:shadow-none active:scale-[98%] transition-transform"
          >
            Demo
          </a>
        </div>
        <div className="text-sm text-justify md:max-w-3xl">
          <span className="text-blue-400 font-bold">Full development </span>of
          fm4all website and comparison tool. fm4All.com connects small and
          medium-sized enterprises with service providers specializing in
          facility management for their premises. The platform features an
          intuitive online comparison tool and a guided funnel, enabling users
          to effortlessly request quotes for essential business services,
          including cleaning, sanitary hygiene, fire safety, multi-technical
          maintenance, coffee machines, water dispensers, etc.
        </div>
        <div className="text-sm text-justify md:max-w-3xl">
          <span className="text-blue-400 font-bold">Frontend</span>: Next.js
          15,Typescript, React, Tailwindcss, shadcn.
          <br />
          <span className="text-blue-400 font-bold md:max-w-3xl"> Backend</span>
          : Next.js 15 (server components and server actions), Drizzle ORM, Neon
          DB.
          <br />
          <p>
            <span className="text-blue-400 font-bold md:max-w-3xl">
              Key features
            </span>
            : Fully responsive design, SEO, advanced service comparison tool,
            online PDF quote generation.
          </p>
        </div>
      </div>
      <Carousel images={Fm4AllImages} imagesPerSlide={1} />
    </>
  );
};

export default Fm4AllProject;
