import React, { useState } from "react";
import { IoChevronDownOutline, IoChevronUpOutline } from "react-icons/io5";

const SingleFaq = ({ id, question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <div onClick={handleClick} className="faq-item" key={id}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <h4 className="faq-heading">{question}</h4>
        <button
          className="faq-btn"
          style={{ marginRight: ".5rem", border: "none" }}
        >
          {!isOpen ? <IoChevronDownOutline /> : <IoChevronUpOutline />}
        </button>
      </div>
      {isOpen && <p className="faq-heading faq-para">{answer}</p>}
    </div>
  );
};

export default SingleFaq;
