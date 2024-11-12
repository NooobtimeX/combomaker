import React from "react";
import { FaLinkedin, FaYoutube, FaGlobe } from "react-icons/fa"; // Import FaGlobe for website icon
import type { Metadata } from "next"; // Import Metadata type
import Link from "next/link";

// Define metadata for the ContactUs page
export const metadata: Metadata = {
  title: "Contact Us | Combo Maker",
  description:
    "Learn more about Combo Maker, the interactive way for players to rate their favorite characters.",
  keywords: "Combo Maker, contact, LinkedIn, YouTube, website",
  openGraph: {
    title: "Contact Us | Combo Maker!",
    description:
      "Learn more about Combo Maker, the interactive way for players to rate their favorite characters.",
    url: "https://combomaker.net/contact_us",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Combo Maker",
    description:
      "Learn more about Combo Maker, the interactive way for players to rate their favorite characters.",
  },
};

const ContactUs = () => {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <link rel="canonical" href="https://combomaker.net/contact_us/" />
      <div className="w-full max-w-md p-2 text-center">
        <h1 className="mb-6 text-2xl font-bold">Contact Us</h1>
        <div className="space-y-4">
          <Link
            href="https://www.linkedin.com/in/nooobtimex/"
            className="flex items-center justify-center space-x-2 text-blue-600 hover:underline"
          >
            <FaLinkedin size={24} />
            <span>LinkedIn</span>
          </Link>
          <Link
            href="https://www.youtube.com/@nooobtimex2003"
            className="flex items-center justify-center space-x-2 text-red-600 hover:underline"
          >
            <FaYoutube size={24} />
            <span>YouTube</span>
          </Link>
          <Link
            href="https://nooobtimex.me/"
            className="flex items-center justify-center space-x-2 text-green-600 hover:underline"
          >
            <FaGlobe size={24} />
            <span>Website</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
