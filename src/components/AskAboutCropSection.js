"use client"
import React, { useState } from "react";

// Correctly define the component using arrow function syntax
const AskAboutCropSection = () => {
  const [question, setQuestion] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setQuestion(""); // Clear the question input after submission
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Ask About Crop</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          className="w-full p-4 border rounded-lg mb-4"
          rows="5"
          placeholder="Ask your question about crops here..."
        ></textarea>
        <button
          type="submit"
          className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-lg transition duration-300"
        >
          Submit Question
        </button>
      </form>

      {submitted && (
        <div className="mt-4 bg-green-100 p-4 rounded-lg text-green-700">
          Thank you! Your question has been submitted.
        </div>
      )}
    </div>
  );
};

// Use only the default export for this component
export default AskAboutCropSection;
