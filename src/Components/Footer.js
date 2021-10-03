import React from "react";
import data from "./FooterData";

const Footer = () => {
  return (
    <div className="w-full px-3 md:px-6 py-16 bg-[#221f14] text-[#f1efe3] text-lg">
      <div className="flex flex-col mt-5 md:mb-12 max-w-screen-lg mx-auto items-start">
        <div className="flex w-full md:flex-row flex-col justify-evenly">
          <div className="flex flex-col items-start md:pl-0 pl-5">
            <img
              src="https://www.joinclubhouse.com/static/img/img_app_icon_leah.afb7e8f47fd9.png"
              alt=""
              className="object-contain w-20 h-20 border-2 border-[#221f14] rounded-[23%]"
            />
            <img
              src="https://www.joinclubhouse.com/static/img/logo.2af78f862152.png"
              alt=""
              className="object-contain mt-6 md:mt-5 h-7 md:h-8"
            />
            <div className="flex mt-10 md:mt-7 w-full md:justify-start">
              <a href="/">
                <img
                  src="https://www.joinclubhouse.com/static/img/appstore.6f955d329ad7.svg"
                  alt=""
                  className="h-10 md:h-12"
                />
              </a>
              <a href="/">
                <img
                  src="https://www.joinclubhouse.com/static/img/googleplay.a1b4ed6211c9.svg"
                  alt=""
                  className="h-10 md:h-12 ml-4"
                />
              </a>
            </div>
          </div>
          <div className="flex md:flex-row flex-col md:pl-0 pl-5 w-full items-start justify-center">
            {data.map((section) => {
              return (
                <div className="flex flex-col items-start md:ml-12 lg:ml-20 mt-16 md:mt-0">
                  <span className="font-bold">{section.section}</span>
                  <div className="mt-4 font-normal flex flex-col">
                    {section.content.map((item) => {
                      return (
                        <a
                          href="/"
                          className="mt-3 opacity-75 font-normal hover:text-yellow-500 transition-colors transform duration-200"
                        >
                          {item.title}
                        </a>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mt-12 py-12 md:border-t w-full border-gray-500">
          <div className="flex md:space-x-6 space-x-8">
            <a href="/">
              <img
                src="https://www.joinclubhouse.com/static/img/icon_twitter.1bed94c864d8.png"
                alt=""
                className="object-contain h-7 w-7 md:h-8 md:w-8"
              />
            </a>
            <a href="/">
              <img
                src="https://www.joinclubhouse.com/static/img/icon_instagram.901c4bfd032a.png"
                alt=""
                className="object-contain h-7 w-7 md:h-8 md:w-8"
              />
            </a>
            <a href="/">
              <img
                src="https://www.joinclubhouse.com/static/img/icon_linkedin.ac76dea71e47.png"
                alt=""
                className="object-contain h-7 w-7 md:h-8 md:w-8"
              />
            </a>
          </div>
          <div className="flex mt-16 md:mt-0 mr-4 text-sm md:text-base opacity-75 space-x-10">
            <a
              href="/"
              className="hover:text-yellow-500 transition-colors transform duration-200"
            >
              Privacy
            </a>
            <a
              href="/"
              className="hover:text-yellow-500 transition-colors transform duration-200"
            >
              Terms
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
