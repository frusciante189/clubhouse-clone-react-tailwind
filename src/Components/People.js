import React from "react";

const People = () => {
  return (
    <div className="w-full px-3 md:px-6 py-16 bg-[#FEE25D] text-[#FD9A2F]">
      <div className="mt-5 md:mb-12 flex md:flex-row flex-col max-w-screen-lg mx-auto items-center">
        <div className="flex flex-col w-full md:w-6/12 mx-auto text-5xl md:text-4xl font-light text-center md:text-left">
          <div>
            <span className="inline md:block font-normal tracking-wider">
              We designed Clubhouse with the belief that
            </span>
            <span className="inline md:block font-bold tracking-wider">
              people are at the center of every moment.
            </span>
          </div>
          <span className="mt-10 text-[#221f14] text-base md:text-lg font-bold tracking-wider">
            We are so excited for you to join
          </span>
        </div>
        <div className="mt-12 md:-mt-5 w-full md:w-6/12 flex flex-col items-center">
          <a href="/">
            <img
              src="https://www.joinclubhouse.com/static/img/img_app_icon_leah.afb7e8f47fd9.png"
              alt=""
              className="object-contain w-36 h-36 border-2 border-[#221f14] rounded-[22%] shadow-club active:shadow-none active::-mb-2 active:mt-2"
            />
          </a>
          <div className="mt-12">
            <div className="block">
              <span className="py-2 cursor-pointer">
                <span className="flex justify-center items-center max-w-max px-8 py-5 bg-[#f1efe3] rounded-full text-[#221f14] font-bold shadow-orange hover:shadow-none hover:-mb-2 hover:mt-2 border-2 border-[#221f14]">
                  <img
                    src="https://www.joinclubhouse.com/static/img/homepage/qr_code_dark.abd8babca33e.png"
                    alt=""
                    className="object-contain h-10 mr-5"
                  />
                  <span>Download the app</span>
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default People;
