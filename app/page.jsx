import React from "react";
import '../app/globals.css'
import Img from "../public/waitlistLogo.png";
import Image from "next/image";
import Link from "next/link";
import Img1 from "../public/undraw_business.png";
import Img2 from "../public/undraw_selfie.png";
import Img3 from "../public/Rectangle 4.png";
import sidelogo from "../public/side logo white 1.png";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const date = new Date().getFullYear();

function page() {
  return <>
  <div className="m-0">
        <Image src={Img} alt="" />
      </div>
      <div className="flex justify-center m-0">
        <p className="inline border-2 rounded-full border-blue-400 text-center font-medium text-xl p-2">
          Sell and buy your products here at ease
        </p>
      </div>
      <div className="flex justify-center justify-items-cente m-5 ">
        <p className="text-6xl font-extrabold text-center	w-4/5 leading-[4rem]">
          Experience a platform that helps creatives sell their <br />
          <span className="text-blue-400 ml-1">digital products!</span>
        </p>
      </div>
      <div className="flex justify-center justify-items-cente m-5 ">
        <p className=" text-lg	font-normal	w-3/5 text-center">
          Tired of not making enough money from your content or creative
          products? Afrovivo is here to connect you to fans and help you sell
          your digital products to them!
        </p>
      </div>
      <div className="flex justify-center items-center gap-6">
        <input
          type="text"
          placeholder="Enter your email address"
          className="py-2 px-4 rounded-xl bg-slate-200 w-80 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
        />
        <Link
          href="https://docs.google.com/forms/d/e/1FAIpQLSdNx4HlKyNpMc69Cohl6aSXxVVRvH6rNmL6r_0si56jg3VVOg/viewform?usp=sf_link"
          target="_blank"
          rel="noopener noreferrer"
          className="border border-gray-300 bg-blue-400 text-white py-2 rounded-xl w-32 text-center font-bold"
        >
          Sign Up Now
        </Link>
      </div>
      <div className="flex justify-center  p-5 bg-blue-400 text-white mt-10">
        <div className="p-5 ml-10 mt-5 ">
          <p className="text-3xl ml-0 text-center font-bold">
            Connect ⚡ Link with fans at Afrovivo!
          </p>
          <p className="  w-4/5 text-center text-2xl ml-11	font-medium	">
            Afrovivo is opened to every creative to sell their digital products
            & services as they connect to their fans.
          </p>
        </div>
        <div className="flex justify-between border-2 border-slate-300 rounded-md p-7 mr-12 align-middle">
          <div>
            <Image src={Img1} alt="" />
          </div>
          <div>
            <Image src={Img2} alt="" />
          </div>
        </div>
      </div>
      <div className="flex justify-center  p-5 text-black mt-10">
        <div className="p-5 ml-10 mt-5 space-y-5 ">
          <p className="text-3xl  text-centr font-bold">
            Feel ⚡️the Joy at <span className="text-blue-400">Afrovivo</span>
          </p>
          <p className=" text-left text-2xl	font-medium	">
            Experience and feel the joy of selling your digital products and
            services to your fans. Connect to your fans through Afrovivo today!
          </p>
          <p className=" text-2xl mb-6 font-medium">
            What are you waiting for?
          </p>
          <Link
            href="https://docs.google.com/forms/d/e/1FAIpQLSdNx4HlKyNpMc69Cohl6aSXxVVRvH6rNmL6r_0si56jg3VVOg/viewform?usp=sf_link"
            className="text-blue-400 mt-8 font-bold text-2xl "
          >
            Join the Afrovivo community today!
          </Link>
          {/* <div className="space-x-7">
            <input
              type="text"
              placeholder="Enter your email address"
              className="py-2 px-4 rounded-xl bg-slate-200 w-80 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
            />
            <Link
              href="https://docs.google.com/forms/d/e/1FAIpQLSdNx4HlKyNpMc69Cohl6aSXxVVRvH6rNmL6r_0si56jg3VVOg/viewform?usp=sf_link"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gray-300 bg-blue-400 text-white py-3 px-3 rounded-xl w-32 text-center font-bold"
            >
              Get Started
            </Link>
          </div> */}
        </div>
        <div className="flex justify-between border-2 border-slate-300 rounded-md p-7 mr-12 align-middle">
          <Image src={Img3} alt="" />
        </div>
      </div><footer className="bg-blue-400 mt-10">
        <div className="flex justify-between content-center">
          <div>
            <Image src={sidelogo} alt="" className="ml-5 " />
          </div>
          <div className="flex content-center	justify-around p-8 m-10 gap-4">
            <div>
              <a
                href="https://facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook size={25} />
              </a>
            </div>

            <div>
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter size={25} />
              </a>
            </div>
            <div>
              <a
                href="  https://www.instagram.com/afrovivo/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram size={25} />
              </a>
            </div>
          </div>
        </div>
        <p className="text-white p-5 border-t-2 border-gray-200  text-md text-center">
          &#169; Copyright {date}, Afrovivo
        </p>
      </footer>
  </>;
}

export default page;
