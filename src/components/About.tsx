const About = () => {
  return (
    <section
      className="min-h-[calc(100vh-45px)] lg:min-h-[calc(100vh-50px)] bg-cream scroll-mt-11 lg:scroll-mt-14 flex justify-center items-center"
      id="about"
    >
      <div className="max-w-2xl lg:max-w-[1700px] lg:w-4/5 flex flex-col lg:flex-row items-start gap-4 lg:gap-20 justify-between p-8">
        <h2 className="absolute -left-full">About me</h2>
        <div className="lg:w-1/2 text-sm text-justify">
          <h3 className="text-xl font-bold mb-6">My path</h3>
          <p className="mb-4">
            After earning my{" "}
            <span className="text-blue-400 font-bold">
              mechanical engineering degree
            </span>{" "}
            in 2007 at{" "}
            <a
              className="text-blue-400 font-bold hover:underline underline lg:no-underline"
              href="https://www.isae-supmeca.fr/"
              target="_blank"
            >
              {" "}
              ISAE - SUPMECA
            </a>
            , and working for a few years in the corporate world, I ultimately
            followed my childhood passion for music and the guitar.
          </p>
          <p className="mb-4">
            After 10 years of accompanying artists on stage and in the studio as
            a guitarist and composer, the COVID period gave me the opportunity
            to discover the world of computer programming. I had done a bit of
            it in engineering school, but this time it became a passion.
          </p>
          <p className="mb-4">
            As a self-taught programmer, I learned coding the same way I learned
            music—by doing,{" "}
            <span className="text-blue-400 font-bold">
              focusing on projects
            </span>{" "}
            rather than following overly theoretical courses that were often far
            removed from the challenges and problems of a "real" application.
          </p>
          <p className="mb-4">
            This approach is the best source of motivation and learning. Seeing
            what I imagined, either alone or with a team, gradually take shape,
            adding features along the way, and{" "}
            <span className="text-blue-400 font-bold">
              continuously improving the product
            </span>
            —each new feature is a new challenge to solve. It excites me.
          </p>
          <p className="mb-4">
            I first co-developed a mobile app that assists with music
            composition and production. We didn’t know how to do it or which
            language to use, but the most important thing was that we REALLY
            wanted to make it, and we had a fairly clear idea of the features.
            In the end, we opted for the C++ JUCE framework, which specializes
            in audio app development and supports{" "}
            <span className="text-blue-400 font-bold">
              cross-platform deployment (Android, iOS, desktop)
            </span>
            . Toool music production app is now available on the app stores.
          </p>
          <p className="mb-4">
            Later, my brother, who is a doctor, provided me with the opportunity
            to specialize in{" "}
            <span className="text-blue-400 font-bold">
              web frontend development
            </span>{" "}
            and the <span className="text-blue-400 font-bold">React </span>
            library with its entire ecosystem. We created a SaaS for managing
            medical clinics, which is now commercialized in Ontario, Canada.
          </p>
          <p className="mb-4">
            My unconventional journey reflects that of a passionate individual
            who loves to create and learn.
          </p>
        </div>
        <div className="lg:w-1/2 flex flex-col gap-4 lg:gap-20">
          <div className="flex-1 text-sm">
            <h3 className="text-xl font-bold mb-6">Education</h3>
            <ul>
              <li className="mb-4">
                2004-2007:{" "}
                <a
                  className="hover:underline  underline lg:no-underline"
                  href="https://www.isae-supmeca.fr/"
                  target="_blank"
                >
                  ISAE-SUPMECA - Institut supérieur de mécanique de Paris
                </a>
                <br />
                <span className="text-blue-400 font-bold">
                  Mechanical Engineering Degree
                </span>
              </li>
              <li className="mb-4">
                2001-2004:{" "}
                <a
                  className="hover:underline  underline lg:no-underline"
                  href="https://pia.ac-paris.fr/serail/jcms/s1_2080084/fr/accueil"
                  target="_blank"
                >
                  Lycée Saint Louis - Paris
                </a>
                <br />
                <span className="text-blue-400 font-bold">
                  Preparatory classes{" "}
                </span>
                in Mathematics, Physics, and Engineering Sciences (MPSI/MP)
              </li>
              <li className="mb-4">
                2010-2015:{" "}
                <a
                  className="hover:underline  underline lg:no-underline"
                  href="https://www.imep.pro"
                  target="_blank"
                >
                  IMEP Paris College of Music
                </a>
                <br />
                <span className="text-blue-400 font-bold">
                  Degree in Harmony, Composition, Arranging and Improvisation
                </span>
              </li>
            </ul>
          </div>
          <div className="flex-1 text-sm">
            <h3 className="text-xl font-bold mb-6">Interests</h3>
            <ul>
              <li>Music</li>
              <li>Audio Programming / Signal processing / Electronics</li>
              <li>Tennis</li>
              <li>Astronomy</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
