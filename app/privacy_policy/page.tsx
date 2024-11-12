import React from "react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Combo Maker",
  description:
    "Learn more about Combo Maker, the interactive way for players to rate their favorite characters.",
  keywords: "Combo Maker, contact, LinkedIn, YouTube, website",
  openGraph: {
    title: "Privacy Policy | Combo Maker",
    description:
      "Learn more about Combo Maker, the interactive way for players to rate their favorite characters.",

    url: "https://combomaker.net/privacy_policy",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | Combo Maker",
    description:
      "Learn more about Combo Maker, the interactive way for players to rate their favorite characters.",
  },
};
const sections = [
  {
    title: "Introduction",
    items: [
      "Welcome to our Privacy Policy page.",
      "Your privacy is critically important to us.",
      "We are committed to protecting your personal information and your right to privacy.",
    ],
  },
  {
    title: "Information We Collect",
    items: [
      "We collect information directly from you when you provide it to us, automatically as you navigate through the site, and from third parties.",
      "Usage Data: Information on how you use our website.",
      "Tracking Technologies: Cookies, Google Analytics, etc.",
    ],
  },
  {
    title: "How We Use Your Information",
    items: [
      "To provide, operate, and maintain our website.",
      "To improve, personalize, and expand our website.",
      "To understand and analyze how you use our website.",
      "To develop new products, services, features, and functionality.",
      "To communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposes.",
    ],
  },
  {
    title: "Sharing Your Information",
    items: [
      "We do not share your personal information with third parties except as necessary to provide you with our services, comply with the law, or protect our rights.",
      "We may share information with service providers who perform services on our behalf.",
      "We may share information to comply with legal obligations.",
    ],
  },
  {
    title: "Security of Your Information",
    items: [
      "We use administrative, technical, and physical security measures to help protect your personal information.",
      "While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.",
    ],
  },
  {
    title: "Changes to This Privacy Policy",
    items: [
      "We may update our Privacy Policy from time to time.",
      "We will notify you of any changes by posting the new Privacy Policy on this page.",
      "You are advised to review this Privacy Policy periodically for any changes.",
    ],
  },
  {
    title: "Contact Us",
    items: [
      "If you have any questions about this Privacy Policy, please contact us.",
      "Email: nooobtimex@gmail.com",
    ],
  },
];

const updateDate = "Last updated: September 28, 2024";

const PrivacyPolicy: React.FC = () => {
  return (
    <div>
      <link rel="canonical" href="https://combomaker.net/privacy_policy/" />
      <div className="mx-auto max-w-4xl p-2">
        <h1 className="mb-4 text-3xl font-bold">Privacy Policy</h1>
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

export default PrivacyPolicy;
