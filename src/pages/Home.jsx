import { Helmet } from "react-helmet";
import Aboutus from "../sections/Aboutus";
import Contact from "../sections/Contact";
import Hero from "../sections/Hero";
import Pricing from "../sections/Pricing";
import Process from "../sections/Process";
import Services from "../sections/Services";

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
      <Services />
      {/* <Testimonials /> ------------- Testimonials/Reviews Section and also can include sample results */}
      <Process />
      {/* <Team />  ------------ Our team */}
      <Pricing />
      {/* <FAQ /> */}
      <Contact />
    </main>
  );
};
