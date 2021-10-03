import { ScrollTrigger, Tween } from "react-gsap";

const Phone = () => {
  return (
    <div className="w-full px-6 py-12 bg-[#f1efe3]">
      <div className="flex flex-col md:flex-row font-bold max-w-screen-lg mx-auto items-center ">
        <div className="flex w-full md:w-8/12 justify-center overflow-hidden" id="trigger">
          <ScrollTrigger start="0px center" end="800px center" scrub={0.5}>
            <Tween
              from={{ rotation: -20, scale: 0.6 }}
              to={{ rotation: -10, scale: 0.9 }}
              duration={2}
            >
              <img
                src="https://www.joinclubhouse.com/static/img/homepage/phone_frame_lg.a6d0e08449b4.png"
                alt=""
                className="px-10"
              />
            </Tween>
          </ScrollTrigger>
        </div>
        <div className="flex text-lg md:text-xl flex-col w-full md:w-4/12">
          <div className="flex flex-col">
            <div>
              <img
                src="https://www.joinclubhouse.com/static/img/homepage/icon_stars.af07f514011e.png"
                alt=""
                className="h-12 md:h-14"
              />
            </div>
            <div>
              <span>Explore the hallways</span>
            </div>
            <div className="mt-2 ">
              <span className="tracking-tight opacity-75 text-lg font-normal">
                Discover millions of rooms, filled with fascinating and
                unexpected conversations.
              </span>
            </div>
          </div>
          <div className="flex flex-col mt-8">
            <div>
              <img
                src="https://www.joinclubhouse.com/static/img/homepage/icon_handwave.e4e18a316038.png"
                alt=""
                className="h-12 md:h-14"
              />
            </div>
            <div>
              <span>Listen in, or share your thoughts</span>
            </div>
            <div className="mt-2 ">
              <span className="tracking-tight opacity-75 text-lg font-normal">
                Drop into your favorite rooms while you’re commuting, walking
                your poodle or running in the park. Raise your hand if you’d
                like to chime in!
              </span>
            </div>
          </div>
          <div className="flex flex-col mt-8">
            <div>
              <img
                src="https://www.joinclubhouse.com/static/img/homepage/icon_people.19ccd02f8e8f.png"
                alt=""
                className="h-12 md:h-14"
              />
            </div>
            <div>
              <span>Talk with amazing people</span>
            </div>
            <div className="mt-2 ">
              <span className="tracking-tight opacity-75 text-lg font-normal">
                Clubhouse is a thoughtful and generous place — where you bump
                into old friends and make new ones too.
              </span>
            </div>
          </div>
          <div className="flex flex-col mt-8">
            <div>
              <img
                src="https://www.joinclubhouse.com/static/img/homepage/icon_speech.3feebce9f928.png"
                alt=""
                className="h-12 md:h-14"
              />
            </div>
            <div>
              <span>Host a room of your own</span>
            </div>
            <div className="mt-2 ">
              <span className="tracking-tight opacity-75 text-lg font-normal">
                Every day, people are telling jokes, reading the morning news,
                making music together, and sharing deep thoughts. What about
                you?
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Phone;
