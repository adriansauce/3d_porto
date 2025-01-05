import  { useState, useRef } from "react";
import emailjs from "@emailjs/browser";


const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  // service_vj5pw0y

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {

      await emailjs.send(
        'service_vj5pw0y',
        'template_ppobt3s',
        {
          from_name: form.name,
          to_name: 'Adrian',
          from_email: form.email,
          to_email : 'muhadrian2902@gmail.com',
          message: form.message,
  
        }, '71ln4nS7cVa2NnVkJ')
      setLoading(false);

      alert("Message sent successfully");
      setForm({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.log(error);
      setLoading(false);
      alert("An error occured, Please try again");
    }

  };
  return (
    <section className="c-space my-20">
      <div className="relative min-h-screen flex items-center justify-center flex-col">
        {/* <img
          src="/assets/terminal.png"

          alt="terminal"
          className="absolute inset-0 min-h-screen mb-8 md:mb-16"
        /> */}
        <div className="contact-container">
          <h3 className="head-text">Let`s Talk</h3>
          <p className="text-lg text-white-600 mt-3">
            I am always open to discussing product design work or partnership
            opportunities.
          </p>
          <form
            action=""
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex-col space-y-7"
          >
            <label className="space-y-3">
              <span className="field-label">Full Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="John Doe"
              />
            </label>
            <label className="space-y-3">
              <span className="field-label">Email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="johndoe@gmail.com"
              />
            </label>
            <label className="space-y-3">
              <span className="field-label">Your massage</span>
              <textarea
                rows={5}
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="Hi, I'm Intresting In...."
              />
            </label>
            <div className="flex justify-center w-full">
              <button
                className="field-btn w-full"
                type="submit"
                disabled={loading}
              >
                {loading ? "Sending..." : "Send Message"}
                <img
                  src="/assets/arrow-up.png"
                  alt="arrow"
                  className="field-btn_arrow"
                />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
