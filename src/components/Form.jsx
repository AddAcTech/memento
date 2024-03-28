import React, { useState } from "react";

function Form({ onSubmit }) {
  const [user, setUser] = useState({
    name: "",
    bornDate: "",
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(user);
  };

  return (
    <div className="flex flex-col gap-2 items-center justify-center h-screen">
      <h1 className="text-center font-bold text-2xl">Introduce your data</h1>
      <form className="w-fit p-2 border border-black rounded-md flex flex-col">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          className="border border-black rounded-md p-1"
          name="name"
          value={user.name}
          onChange={handleChange}
        />
        <label htmlFor="name">Born Date:</label>
        <input
          type="date"
          className="border border-black rounded-md p-1"
          name="bornDate"
          value={user.bornDate}
          onChange={handleChange}
        />
        <button
          className="bg-black text-white rounded-md mt-2 p-1"
          onClick={handleSubmit}
        >
          OK!
        </button>
      </form>
      <section className="max-w-md mt-2">
        <h1 className="font-bold text-xl">"Memento Mori"</h1>
        <p>
          The global life expectancy is nearly 75 years (4000 weeks), depending
          on your country it can be more or less. "Memento mori" is the Latin
          for <span className="font-bold italic"> "Remember you will die"</span>
          and this page wants to help you with that so you can make sure you are
          using your time wisely.
        </p>
        <p className="mt-2">
          In the next page each square represents a week, filled ones are the
          weeks you have lived, and the empty ones are the ones you
          <span className="font-bold italic"> propably</span> have left.
        </p>
      </section>
    </div>
  );
}

export default Form;
