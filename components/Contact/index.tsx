"use client";

import { useState } from "react";
// Firebase
import { db } from "../../firebase";
import { addDoc, collection } from "firebase/firestore";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    await addDoc(collection(db, "messages"), {
      name,
      email,
      message,
    });
    setName("");
    setEmail("");
    setMessage("");
    setSuccess(true);
  };

  return (
    <section
      id="contact"
      className="mt-[200px] rounded-tl-[30px] rounded-tr-[30px] bg-dark-blue px-12 py-[72px]
        sm:px-[100px] md:px-[175px]"
    >
      <form
        className="mx-auto w-full md:w-[450px] lg:w-[600px] 2xl:w-[750px]"
        onSubmit={handleSubmit}
      >
        <h1 className="mt-0 text-white sm:mt-16">Contact Me</h1>

        {success && (
          <div className="mb-4 rounded-md border-2 border-green-700 bg-green-200 px-4 py-3">
            <p className="text-lg">Your message has been sent!</p>
          </div>
        )}

        <label className="label">Name</label>
        <input
          className="form-input"
          placeholder="Enter a name..."
          required
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label className="label">Email</label>
        <input
          className="form-input"
          required
          type="email"
          placeholder="Enter a valid email..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label className="label">Message</label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          rows={8}
          placeholder="Hi, Simon..."
          className="mb-5 w-full rounded-md border-2 border-jet px-4 py-3 placeholder-jet
            outline-none 2xl:border-4 2xl:text-xl"
        ></textarea>
        <button
          type="submit"
          className={`flex w-full cursor-pointer items-center justify-center rounded-md border-2
            border-[#4b2085] bg-dark-purple py-2 text-lg text-white transition duration-100
            ease-in hover:bg-[#4b2085] 2xl:border-4 2xl:text-xl`}
        >
          Submit
        </button>
      </form>
    </section>
  );
};

export default Contact;
