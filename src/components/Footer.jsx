import logo from "../assets/images/logo.png";
import { footerinfo, footerlinks, socialIcons } from "../constants/footer-cons";

const Footer = () => {
  return (
    <>
      <section className="py-14 border-t border-zinc-800">
        <div className="container p-3">
          <div className="flex gap-x-2 items-center mb-8">
            <img src={logo} alt="" className="h-12 w-12" />
            <h1 className="text-2xl font-semibold">i Code Labs</h1>
          </div>

          <div className="flex md:items-center gap-y-10 gap-x-4 justify-between flex-col-reverse smm:flex-row">
            <div className="smm:w-2/3 flex flex-col gap-y-2">
              <p>Newsletter coming soon.. 📩</p>
              <div className="opacity-35">
                <h2 className="font-medium text-lg">Join our Newsletter</h2>
                <p className="smm:max-w-[440px] max-smm:text-sm text-graytext">
                  Sign up to our mailing list below and be the first to know
                  about new updates. Don't worry, we hate spam too.
                </p>
                <div className="flex gap-x-2 mt-2">
                  <input
                    type="text"
                    placeholder="Your Email address"
                    className="rounded-lg bg-[#1D1D1D] pl-4"
                    disabled={true}
                  />
                  <button
                    disabled={true}
                    className="bg-accent-dark duration-300 py-2 px-3 rounded-lg"
                  >
                    Get Notified
                  </button>
                </div>
              </div>
            </div>

            <div className="smm:flex justify-end items-center gap-x-6 max-smm:space-y-8 smm:w-1/3">
              {/* footer sub sections */}
              <div>
                <h2 className="mb-3 font-medium">Links</h2>
                <div className="max-smm:flex gap-x-4 smm:space-y-3 text-sm text-graytext">
                  {footerlinks.map((item, i) => (
                    <p key={i}>{item.label}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* last copyright bar*/}
      <p className="container text-gray-300 px-3 p-2 text-[12px]">
        © 2024 iCodeLabs. All Rights Reserved
      </p>
    </>
  );
};

export default Footer;
