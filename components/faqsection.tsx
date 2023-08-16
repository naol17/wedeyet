import React, { useState } from "react"

const FAQSection = () => {
  const [expanded, setExpanded] = useState<number | null>(null)

  const faqs = [
    {
      question: "What is Tailwind CSS?",
      answer:
        "Tailwind CSS is a utility-first CSS framework that allows you to rapidly build custom user interfaces.",
    },
    {
      question: "How do I install Tailwind CSS?",
      answer:
        "You can install Tailwind CSS via npm or yarn by following the installation instructions in the official documentation.",
    },
    {
      question: "How do I install Tailwind CSS?",
      answer:
        "You can install Tailwind CSS via npm or yarn by following the installation instructions in the official documentation.",
    },
    {
      question: "How do I install Tailwind CSS?",
      answer:
        "You can install Tailwind CSS via npm or yarn by following the installation instructions in the official documentation.",
    },
    // Add more FAQ objects as needed
  ]

  const toggleExpanded = (index: number) => {
    if (expanded === index) {
      setExpanded(null)
    } else {
      setExpanded(index)
    }
  }

  return (
    <div className="container mx-auto px-10 py-8">
      <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
      {faqs.map((faq, index) => (
        <div
          key={index}
          className="bg-white rounded-lg shadow-md p-4 mb-4 dark:bg-inherit dark:text-white dark:shadow-slate-700 border-white"
        >
          <div
            className="flex items-center justify-between cursor-pointer"
            onClick={() => toggleExpanded(index)}
          >
            <h3 className="text-lg font-medium">{faq.question}</h3>
            <svg
              className={`h-6 w-6 ${
                expanded === index ? "transform rotate-180" : ""
              }`}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M19 9l-7 7-7-7"></path>
            </svg>
          </div>
          {expanded === index && <p className="mt-2">{faq.answer}</p>}
        </div>
      ))}
    </div>
  )
}

export default FAQSection
