import React from "react";

import type { Metadata } from "next";

// Define metadata for the ContactUs page
export const metadata: Metadata = {
  title: "Terms and Conditions | Combo Maker",
  description:
    "Learn more about Combo Maker, the interactive way for players to rate their favorite characters.",
  keywords: "Combo Maker, contact, LinkedIn, YouTube, website",
  openGraph: {
    title: "Terms and Conditions | Combo Maker",
    description:
      "Learn more about Combo Maker, the interactive way for players to rate their favorite characters.",

    url: "https://combomaker.net/terms_and_conditions",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms and Conditions | Combo Maker",
    description:
      "Learn more about Combo Maker, the interactive way for players to rate their favorite characters.",
  },
};
const sections = [
  {
    title: "Introduction and Intellectual Property Rights",
    items: [
      "Welcome to our website.",
      "By accessing or using our site, you agree to comply with and be bound by these terms and conditions.",
      "Other than the content you own, under these terms, the company and/or its licensors own all the intellectual property rights and materials contained in this website.",
      "You are granted a limited license only for purposes of viewing the material contained on this website.",
    ],
  },
  {
    title: "Restrictions",
    items: [
      "You are specifically restricted from all of the following:",
      "Selling, sublicensing, and/or otherwise commercializing any website material.",
      "Using this website in any way that is or may be damaging to this website.",
    ],
  },
  {
    title: "Your Content",
    items: [
      "You are free to use this website to record video or use for your own media.",
    ],
  },
  {
    title: "No Warranties and Limitation of Liability",
    items: [
      "This website is provided 'as is,' with all faults, and the company expresses no representations or warranties, of any kind related to this website or the materials contained on this website.",
      "Also, nothing contained on this website shall be interpreted as advising you.",
      "In no event shall the company, nor any of its officers, directors, and employees, be held liable for anything arising out of or in any way connected with your use of this website whether such liability is under contract. The company, including its officers, directors, and employees shall not be held liable for any indirect, consequential, or special liability arising out of or in any way related to your use of this website.",
    ],
  },
  {
    title: "Variation of Terms",
    items: [
      "The company is permitted to revise these terms at any time as it sees fit, and by using this website you are expected to review these terms on a regular basis.",
    ],
  },
  {
    title: "Use of Cookies and Other Technologies",
    items: [
      "This website uses cookies, Google Analytics, AdSense, Google Ads, Google Tag Manager, and local storage to enhance user experience and analyze site usage.",
      "Cookies are small data files stored on your device. They help us understand how you use our site and improve your experience.",
      "Google Analytics is used to track and report website traffic. It helps us understand user behavior and improve our site.",
      "AdSense and Google Ads are used to display relevant advertisements to users. These services may use cookies to serve ads based on your prior visits to our site or other sites on the internet.",
      "Google Tag Manager is used to manage and deploy marketing tags on our website without having to modify the code.",
      "Local storage is used to store data on your device to improve your experience on our site.",
      "By using this website, you consent to the use of these technologies in accordance with our privacy policy.",
    ],
  },
  {
    title: "Combo button",
    items: [
      "We will not be responsible if you violate intellectual property rights.",
      "We are not involved if you infringe on intellectual property rights.",
    ],
  },
];

const updateDate = "Last updated: September 28, 2024";

const TermsAndConditions: React.FC = () => {
  return (
    <div>
      <link
        rel="canonical"
        href="https://combomaker.net/terms_and_conditions/"
      />
      <div className="mx-auto max-w-4xl p-2">
        <h1 className="mb-4 text-3xl font-bold">Terms and Conditions</h1>
        <p className="mb-4 text-gray-600">{updateDate}</p>
        {sections.map((section, index) => (
          <section key={index} className="mb-6">
            <h2 className="mb-2 text-2xl font-semibold">{`${index + 1}. ${section.title}`}</h2>
            <ul className="list-inside list-disc text-gray-700">
              {section.items.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
};

export default TermsAndConditions;
