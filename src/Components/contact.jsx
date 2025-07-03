import { useState } from "react";

function ContactForm() {
  const [inputs, setInputs] = useState({});

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(inputs);
  };

  return (
    <div className="contact-box">
      <form onSubmit={handleSubmit}>
        <ul className="contact-form">
          <li>
            <label>
              First name:
              <input
                type="text"
                name="firstname"
                value={inputs.firstname || ""}
                onChange={handleChange}
              />
            </label>
          </li>
          <li>
            <label>
              Last name:
              <input
                type="text"
                name="lastname"
                value={inputs.lastname || ""}
                onChange={handleChange}
              />
            </label>
          </li>
          <li>
            <label>
              Email:
              <input
                type="email"
                name="email"
                value={inputs.email || ""}
                onChange={handleChange}
              />
            </label>
          </li>
          <li>
            <label>
              Message:
              <textarea name="message" onChange={handleChange} />
            </label>
          </li>
          <input type="submit" />
        </ul>
      </form>
    </div>
  );
}

export default ContactForm;
