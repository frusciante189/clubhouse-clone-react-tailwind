import React from "react";

const Hero = () => {
  return (
    <div className="w-full bg-[#221f14] text-[#f1efe3] pb-56 mb:mb-16 md:text-lg text-base font-medium">
      <div className="flex flex-col max-w-screen-lg mx-auto items-center">
        <div className="w-full flex md:px-5 lg:px-0 justify-center py-2 md:py-8 overflow-hidden">
          <img
            src="https://www.joinclubhouse.com/static/img/homepage/hero_lg.6c049473202f.png"
            alt=""
            className="object-contain md:hidden max-w-none mx-auto w-[640px]"
          />
          <img
            src="https://www.joinclubhouse.com/static/img/homepage/hero_lg.6c049473202f.png"
            alt=""
            className="object-contain hidden md:block"
          />
        </div>
        <div className="w-full px-5 lg:px-0">
          <div className="w-full py-6 md:py-8 text-center md:text-left md:border-t md:border-b border-opacity-20">
            <span>
              Bounce around the hallways of the Internet and meet incredible
              people
            </span>
          </div>
          <div className="md:flex hidden mt-8 w-full md:justify-start justify-center">
            <a href="/">
              <img
                src="https://www.joinclubhouse.com/static/img/appstore.6f955d329ad7.svg"
                alt=""
                className="h-12"
              />
            </a>
            <a href="/">
              <img
                src="https://www.joinclubhouse.com/static/img/googleplay.a1b4ed6211c9.svg"
                alt=""
                className="h-12 ml-4"
              />
            </a>
          </div>
          <div className="md:hidden flex flex-col justify-center items-center">
            <a href="/">
              <img
                src="https://www.joinclubhouse.com/static/img/homepage/img_appstore.9a951403ff1c.png"
                alt=""
                className="h-16"
              />
            </a>
            <a href="/" className="mt-5 font-light opacity-80">
              On <span className="border-b">Android</span> too! 🙌
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
