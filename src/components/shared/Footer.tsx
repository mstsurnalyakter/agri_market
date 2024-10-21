import Image from 'next/image';
import Link from 'next/link';
import logo from "../../../public/logo.png";
import React from 'react'

const Footer = () => {
  return (
    <div className="bg-primary">
      <footer className="footer mx-auto max-w-7xl font-poppins  px-2 py-10 text-gray-200">
        <aside>
          <Link
            href={"/"}
            className="text-xl font-bold flex items-center gap-2"
          >
            <Image
              className="rounded-full border-2 border-secondary"
              src={logo}
              width={50}
              height={50}
              alt="Logo"
            />
            <span>AgriMarketBD</span>
          </Link>
        </aside>
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
    </div>
    // <div>Footer</div>
  );
}

export default Footer