import React from "react";
import { ScrollTrigger, Tween } from "react-gsap";
import { useWindowWidth } from "@react-hook/window-size";



const Collisions = () => {
  const windowWidth = useWindowWidth();

  return (
    <div className="w-full px-6 py-16 overflow-hidden bg-[#bfa78c] text-[#fee25d]">
      <div className="flex max-w-screen-lg mx-auto items-center">
        <div className="w-full">
          <div className="max-w-lg md:ml-16 flex w-full justify-start">
            <span className="text-4xl leading-[54px] font-light tracking-wider text-left">
              The magic of Clubhouse is witnessing the most
            </span>
          </div>
          <div className="mt-5 w-full flex flex-col items-center relative overflow-hidden">
            {windowWidth >= 768 ? (
              <ScrollTrigger start="-200px center" end="200px center" scrub={1.5}>
                <Tween from={{ x: '-800px' }}
                  to={{ x: '100px' }}
                  duration={3}>
                  <img
                    src="https://www.joinclubhouse.com/static/img/homepage/img_unlikely.a973b3546b1e.png"
                    alt=""
                    className="lg:h-48 lg:-ml-24 h-20"
                  />
                </Tween>
                <Tween from={{ x: '800px' }}
                  to={{ x: '100px' }}
                  duration={3}>
                  <img
                    src="https://www.joinclubhouse.com/static/img/homepage/img_collisions.4f05b80b632a.png"
                    alt=""
                    className="lg:h-48 lg:ml-24 lg:-mt-14 h-20"
                  />
                </Tween>
              </ScrollTrigger>
            ) : <ScrollTrigger start="-200px center" end="200px center" scrub={1.5}>
              <Tween from={{ x: '-800px' }}
                to={{ x: '10px' }}
                duration={3}>
                <img
                  src="https://www.joinclubhouse.com/static/img/homepage/img_unlikely.a973b3546b1e.png"
                  alt=""
                  className="lg:h-48 lg:-ml-24 h-20"
                />
              </Tween>
              <Tween from={{ x: '800px' }}
                to={{ x: '10px' }}
                duration={3}>
                <img
                  src="https://www.joinclubhouse.com/static/img/homepage/img_collisions.4f05b80b632a.png"
                  alt=""
                  className="lg:h-48 lg:ml-24 lg:-mt-14 h-20"
                />
              </Tween>
            </ScrollTrigger>}
          </div>
          <div className="flex w-full justify-end">
            <span className="md:text-4xl max-w-lg md:mr-16 mt-6 text-xl font-light text-right">
              of people.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collisions;
