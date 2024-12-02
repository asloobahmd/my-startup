import emailjs from "@emailjs/browser";
import { useState } from "react";
import { useRef } from "react";
import { validateFrom } from "../../libs/validations";
import { LoaderCircle } from "lucide-react";

const ContactForm = () => {
  const [mailStatus, setMailStatus] = useState("");
  const [validationError, setValidationError] = useState(false);
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const [fromValues, setFromValues] = useState({
    user_name: "",
    user_email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFromValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const isValid = validateFrom(fromValues);
    if (!isValid) {
      setValidationError(true);
      setLoading(false);
      return;
    } else {
      setValidationError(false);
    }

    setLoading(true);

    emailjs
      .sendForm("service_9u3aq92", "template_4yb05md", form.current, {
        publicKey: "je4JzidNSLJv97B_6",
      })
      .then(
        () => {
          setMailStatus("success");
        },
        (error) => {
          setMailStatus("error");
        }
      )
      .finally(() => {
        setLoading(false);
        setFromValues({
          user_name: "",
          user_email: "",
          subject: "",
          message: "",
        });
      });
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="ml-auto space-y-4">
      <input
        name="user_name"
        type="text"
        value={fromValues.user_name}
        onChange={handleChange}
        placeholder="Name"
        className="w-full rounded-md py-3 px-4 bg-gray-800 text-white text-sm outline-none focus:outline-accent-dark focus:bg-transparent"
      />
      <input
        name="user_email"
        type="email"
        value={fromValues.user_email}
        onChange={handleChange}
        placeholder="Email"
        className="w-full rounded-md py-3 px-4 bg-gray-800 text-white text-sm outline-none focus:outline-accent-dark focus:bg-transparent"
      />
      <input
        name="subject"
        type="text"
        value={fromValues.subject}
        onChange={handleChange}
        placeholder="Subject"
        className="w-full rounded-md py-3 px-4 bg-gray-800 text-white text-sm outline-none focus:outline-accent-dark focus:bg-transparent"
      />
      <textarea
        name="message"
        placeholder="Message"
        value={fromValues.message}
        onChange={handleChange}
        rows="6"
        className="w-full rounded-md py-3 px-4 resize-none bg-gray-800 text-white text-sm outline-none focus:outline-accent-dark focus:bg-transparent"
      ></textarea>
      <button
        type="submit"
        disabled={loading}
        className="flex justify-center items-center text-accenttext bg-accent-dark hover:bg-accent-darker tracking-wide rounded-md text-sm px-4 py-3 w-full !mt-6"
      >
        {loading ? (
          <p className="flex text-gray-200">
            Sending.. <LoaderCircle size={20} className="animate-spin" />
          </p>
        ) : (
          "Send"
        )}
      </button>

      {mailStatus &&
        (mailStatus === "success" ? (
          <p className="text-sm text-green-600">
            Your email has been sent successfully!
          </p>
        ) : mailStatus === "error" ? (
          <p className="text-sm text-red-600">
            There was an error sending your email. Please try again.
          </p>
        ) : (
          <p className="text-sm text-graytext">Sending...</p>
        ))}

      {validationError && (
        <p className="text-sm text-red-400">All fields are required</p>
      )}
    </form>
  );
};

export default ContactForm;
