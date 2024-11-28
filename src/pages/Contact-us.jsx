import ContactForm from "../components/forms/ContactForm";
import { socialIcons } from "../constants/footer-content";

const Contact = () => {
  return (
    <main className="min-h-[calc(100vh-90px)] pt-36 max-sm:pt-24 p-3">
      <div className="container max-w-6xl grid sm:grid-cols-2 items-start gap-16 bg-[#0D0D0D] border border-zinc-800 rounded-3xl backdrop-blur-[10px] bg-opacity-80 sm:px-12 p-2 py-8 sm:py-12 mb-20">
        <div className="">
          <h1 className="text-3xl font-extrabold">Let's Talk</h1>
          <p className=" text-graytext mt-4">
            Have some big idea or brand to develop and need help? Then reach out
            we'd love to hear about your project and provide help.
          </p>

          <div className="mt-6">
            <h2 className="font-bold">Contact</h2>

            {/* phone */}
            <div className="mt-4 flex gap-x-4">
              <div className="rounded-full flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-phone text-accent-dark "
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <a href="tel:075 757 1333" className="text-sm">
                <span className="block">Phone</span>
                <strong className="text-graytext">+94 75 757 1333</strong>
              </a>
            </div>

            {/* email */}
            <div className="mt-4 flex gap-x-4">
              <div className="rounded-full flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-accent-dark"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </div>
              <a href="mailto:axientlabs@gmail.com" className="text-sm">
                <span className="block">E-Mail</span>
                <strong className="text-graytext">axientlabs@gmail.com</strong>
              </a>
            </div>
          </div>

          <div className="mt-6">
            <h2 className="font-bold">Socials</h2>

            <ul className="flex mt-4 space-x-4">
              {socialIcons.map((item, i) => (
                <a
                  key={i}
                  target="_blank"
                  href={item.link}
                  className="h-8 w-8 rounded-md overflow-hidden flex items-center justify-center shrink-0"
                >
                  <img src={item.icon} alt="" className="rounded-md" />
                </a>
              ))}
            </ul>
          </div>
        </div>

        <ContactForm />
      </div>
    </main>
  );
};

export default Contact;
