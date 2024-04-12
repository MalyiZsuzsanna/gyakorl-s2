import React, { useState } from "react";

export const Contact = () => {
  const [email, setEmail] = useState("");
  const [feedback, setFeedback] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = { email, feedback, timstamp: Date.now() };
    console.log(formData)
  };
  return (
    <div className="container shadow">
      <section>
        <h3>Provide feedback</h3>
        <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label  className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
           value={email}
           onChange={(e)=>setEmail(e.target.value)}
            placeholder="name@example.com"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">
            Example textarea
          </label>
          <textarea
            className="form-control"
            value={feedback}
           onChange={(e)=>setFeedback(e.target.value)}
            rows="3"
          ></textarea>
          <button className="btn btn-primary">Submit</button>
        </div></form>
      </section>
    </div>
  );
};
