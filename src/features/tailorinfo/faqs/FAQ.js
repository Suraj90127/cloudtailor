import React from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";

function FAQ({ faq, index, toggleFAQ }) {
  //console.log(index);

  return (
    <div
      className={"faq " + (faq.open ? "open" : "")}
      key={index}
      onClick={() => toggleFAQ(index)}
    >
      <div className="faq-question flex justify-between">
        {faq.question} <AiOutlinePlusCircle className="faq-icon" />
      </div>
      <div className="faq-answer">{faq.answer}</div>
    </div>
  );
}

export default FAQ;
