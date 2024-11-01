import {
  footerText1,
  footerText2,
  nonTechCompetitionsData,
  techCompetitionsData,
} from "@/lib/data";
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Footer = () => {
  return (
    <footer className="bg-black py-10 md:px-10 px-3">
      <div className="grid xl:grid-cols-2 grid-cols-1 gap-y-10 items-center justify-between">
        {/* Left Side */}
        <div className="flex flex-col justify-between gap-y-20">
          <div className="sm:max-w-xs w-full">
            <Image
              src="/assets/images/logo.png"
              alt="logo"
              width={100}
              height={100}
              className="w-20 object-contain "
            />

            <p className="text-white mt-3">{footerText1}</p>
            <p className="text-white mt-2">{footerText2}</p>
          </div>
          <div className="flex items-center gap-x-4">
            <Link
              href="https://www.linkedin.com/company/supercompofficial/"
              target="_blank"
            >
              <Linkedin className="social-icon" />
            </Link>
            <Link
              href="https://www.instagram.com/supercomp.bukc?igsh=MXFzNGllbG1veW56MA=="
              target="_blank"
            >
              <Instagram className="social-icon" />
            </Link>
            <Link
              href="https://www.facebook.com/share/DRaruq8qgH4uZ3oH/"
              target="_blank"
            >
              <Facebook className="social-icon" />
            </Link>
          </div>
        </div>
        {/* Right Side */}
        <div className="grid gap-x-20 gap-y-10 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
          <div>
            <p className="text-white font-bold text-lg">
              Technical Competitions
            </p>
            <ul className="footer-list">
              {techCompetitionsData.map((comp, idx) => (
                <li key={idx} className="footer-list-item">
                  {comp.name}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-white font-bold text-lg">General Competitions</p>
            <ul className="footer-list">
              {nonTechCompetitionsData.map((comp, idx) => (
                <li key={idx} className="footer-list-item">
                  {comp.name}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-white font-bold text-lg">Links</p>
            <ul className="footer-list">
              <Link href="/">
                <li className="footer-list-item">Home</li>
              </Link>
              <Link href="/register">
                <li className="footer-list-item">Register</li>
              </Link>
              <Link href="/ambassador">
                <li className="footer-list-item">Ambassadors</li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
