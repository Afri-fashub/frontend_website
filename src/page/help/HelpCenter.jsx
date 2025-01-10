import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

const HelpCenter = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedArticle, setSelectedArticle] = useState(null);
  const faqs = [
    {
      question: "How do I reset my password?",
      answer:
        "To reset your password, click on 'Forgot Password' on the login screen.",
    },
    {
      question: "How do I contact support?",
      answer:
        "You can reach support by clicking the 'Contact Support' button below.",
    },
    {
      question: "How do I update my profile?",
      answer:
        "You can update your profile by navigating to the 'Settings' page.",
    },
  ];

  const articles = [
    {
      title: "Account Setup",
      description: "Learn how to set up your account and get started quickly.",
    },
    {
      title: "Security Tips",
      description: "Tips to enhance your account security and keep it safe.",
    },
    {
      title: "Payment Information",
      description: "How to add or update your payment details.",
    },
  ];

  const filteredFaqs = faqs.filter((faq) =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className=" bg-white">
      <section className="relative h-screen ">
        <section className="homeSection h-full w-full absolute z-20">
          <section className="h-full w-full bg-black opacity-[0.5] absolute z-10"></section>
          <section className="flex items-center justify-center absolute inset-0 h-1/2 w-1/2 m-auto text-white text-center z-10">
            <div className="flex flex-col gap-6">
              <h1 className="text-6xl font-bold">HELP CENTER</h1>
              <div className="mb-6 flex justify-center">
                <div className="flex flex-row justify-center w-full">
                  <input
                    type="text"
                    placeholder="How can we help?"
                    className="p-3 w-full md:w-full border border-gray-300"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <div className="bg-[#e87a00] p-2">
                    <FaSearch className="text-4xl ml-1 " />
                  </div>
                </div>
              </div>

              <div>
                {/* <Link to='/shop' className='inline-flex border px-6 py-2 font-bold'>Shop Now</Link> */}
              </div>
            </div>
          </section>
        </section>
      </section>
      
      <div className="min-h-screen bg-white flex flex-col items-center p-8">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl mb-10">
          {["Track my Order", "Fit Guide", "Start a Return or Exchange"].map(
            (title, index) => (
              <div
                key={index}
                className="bg-gray-200 rounded-lg h-32 flex items-center justify-center text-lg font-semibold shadow-sm hover:shadow-md cursor-pointer"
              >
                {title}
              </div>
            )
          )}
        </div>

        
        <div className="w-full max-w-2xl">
          <h2 className="text-2xl font-bold text-center mb-4">
            Frequently Asked
          </h2>
          <p className="text-center text-gray-500 mb-6">
            Answers to your most common questions
          </p>

          
          <div className="relative mb-8">
            <input
              type="text"
              placeholder="Search"
              className="w-full p-3 pl-10 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <span className="absolute left-3 top-3 text-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-4.35-4.35m0 0a7.5 7.5 0 1 0-10.606 0 7.5 7.5 0 0 0 10.606 0z"
                />
              </svg>
            </span>
          </div>

          
          <div className="space-y-4">
            {Array(6)
              .fill("Lorem ipsum dolor sit amet consectetur Lacus ?")
              .map((question, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center p-4 bg-white border rounded-lg shadow-sm cursor-pointer hover:shadow-md"
                >
                  <span className="text-gray-700">{question}</span>
                  <span className="text-gray-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 4v16m8-8H4"
                      />
                    </svg>
                  </span>
                </div>
              ))}
          </div>
        </div>
      </div>
      <div className="bg-orange-50 py-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-2">Got More Questions?</h2>
          <p className="text-gray-600 mb-8">
            Our Customer service team is always available to help you out
          </p>

      
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-sm p-6 text-center">
              <h3 className="text-lg font-semibold mb-2">Call Us</h3>
              <p className="text-gray-600">+2340000000000</p>
              <p className="text-gray-600">+2340000000000</p>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-6 text-center">
              <h3 className="text-lg font-semibold mb-2">Start a Chat</h3>
              <p className="text-gray-600">loremipsum@gmail.com</p>
              <p className="text-gray-600">loremipsum@gmail.com</p>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-6 text-center">
              <h3 className="text-lg font-semibold mb-2">Send an Email</h3>
              <p className="text-gray-600">loremipsum@gmail.com</p>
              <p className="text-gray-600">loremipsum@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
        <div className="flex justify-center">
        <div className="mt-6 bg-gradient-to-r from-[#e87a00] via-[#f4bd80] to-white w-3/4 h-1 ">
        </div>

        </div>
    </div>
  );
};

export default HelpCenter;

// import React from 'react';
// import { Link } from 'react-router-dom';

// const HelpCenter = () => {
//   return (
//     <div>
//       <h2>Help Center</h2>
//       <nav>
//         <ul>
//           <li><Link to="/help/search">Search for Help</Link></li>
//           <li><Link to="/help/topic1">Topic 1: Account Issues</Link></li>
//           <li><Link to="/help/topic2">Topic 2: Payment Issues</Link></li>
//           <li><Link to="/help/topic3">Topic 3: Troubleshooting</Link></li>
//         </ul>
//       </nav>
//     </div>
//   );
// }

// export default HelpCenter;
