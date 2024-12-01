import Hero from "../sections/Hero";
import Aboutus from "../sections/Aboutus";
import Services from "../sections/Services";
import Results from "../sections/Results";
import FAQ from "../sections/FAQ";
import Contact from "../sections/Contact";
import Pricing from "../sections/Pricing";
import { Helmet } from "react-helmet";

export const Home = () => {
  return (
    <main>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home - Axient Labs | Software Development Solutions</title>
        <meta
          name="description"
          content="Axient Labs is a software development company specializing in innovative digital solutions, web development, mobile apps, and tech consulting."
        />
      </Helmet>
      <Hero />
      {/* <Brands /> ------------- Marquee (brands) */}
      <Aboutus />
      {/* <Our Clients /> ------------- Card Testimonials (Video or text) and also can include sample results */}
      <Services />
      {/* <Comparision /> ------------ comparision with other agencies (Eg:- Pricing, results, workflow) */}
      {/* <Process /> ------------ service process and steps */}
      {/* <Team />  ------------ Our team */}
      <Pricing />
      {/* <FAQ /> */}
      <Contact />
    </main>
  );
};
