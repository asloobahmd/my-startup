import Hero from "../sections/Hero";
import Aboutus from "../sections/Aboutus";
import Services from "../sections/Services";
import Results from "../sections/Results";
import FAQ from "../sections/FAQ";
import Contact from "../sections/Contact";
import Pricing from "../sections/Pricing";

export const Home = () => {
  return (
    <main>
      <Hero />
      {/* <Brands /> ------------- Marquee (brands) */}
      {/* <Our Clients /> ------------- Video testimonials */}
      <Aboutus />
      {/* <Results /> -------------- sample results  */}
      <Services />
      {/* <Comparision /> ------------ comparision with other agencies */}
      {/* <Process /> ------------ service process and steps */}
      {/* <Testimonials /> ------------- cards */}
      {/* <Team />  ------------ Our team */}
      {/* <Team />  ------------ Our team */}
      <Pricing />
      {/* <FAQ /> */}
      <Contact />
    </main>
  );
};
