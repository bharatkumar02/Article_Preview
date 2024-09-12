import React from 'react';
import image from './assets/drawers.jpg';
import avtar from './assets/avatar-michelle.jpg';
import arrow from './assets/icon-share.svg';
import facebook from './assets/icon-facebook.svg';
import twitter from './assets/icon-twitter.svg';
import pinterest from './assets/icon-pinterest.svg';

function App() {
  return (
    <>
      <main className="h-screen flex justify-center items-center">
        <section className="mx-9 bg-gray-50 rounded-lg shadow-xl  shadow-blue-100 flex flex-col justify-start items-start md:flex-row relative lg:mx-40 xl:mx-80 ">
          <div className="w-[100%] md:w-[42rem] overflow-hidden rounded-t-lg md:rounded-l-lg md:rounded-tl-lg md:rounded-t-none md:h-full">
            <img src={image} alt="Main_Image" className="w-full h-full" />
          </div>

          <div className="px-7 py-5 pt-9 flex flex-col gap-4 justify-start items-start">
            <h1 className="font-semibold text-base text-gray-700">
              Shift the overall look and feel by adding these wonderful touches to
              furniture in your home
            </h1>
            <p className="leading-5 text-gray-500 font-medium text-pretty">
              Ever been in a room and felt like something was missing? Perhaps it felt
              slightly bare and uninviting. I've got some simple tips to help you make any
              room feel complete.
            </p>
            <div className="flex justify-between items-center w-full">
              <div className="flex items-center gap-5">
                <img src={avtar} alt="Avatar_Image" className="w-1/6 rounded-full" />
                <div>
                  <h2 className="font-semibold text-gray-700">Michelle Appleton</h2>
                  <p className="text-gray-500 font-medium">28 Jun 2020</p>
                </div>
              </div>
              <div>
                <img
                  src={arrow}
                  className="rounded-full bg-gray-200 p-2 md:p-[0.9rem] lg:p-3 cursor-pointer peer"
                  alt="Arrow_icon"
                />
                <div className="w-full absolute bottom-0 right-0 opacity-0 peer-hover:opacity-100 translate-y-[100%] peer-hover:translate-y-0 transition-all duration-300 ease-in-out md:w-1/4 md:bottom-[40%] md:right-[-3rem] md:-rotate-12 md:peer-hover:rotate-0">
                  <div className="bg-gray-600 text-gray-50 flex px-7 justify-between items-center py-3 gap-5 relative md:rounded-lg md:overflow-hidden">
                    <h3 className=" tracking-[0.3rem] uppercase">Share</h3>
                    <ul className="flex items-center justify-start w-full gap-3">
                      <li>
                        <img src={facebook} alt="Facebook" />
                      </li>
                      <li>
                        <img src={twitter} alt="Twitter" />
                      </li>
                      <li>
                        <img src={pinterest} alt="Pindrop" />
                      </li>
                    </ul>
                    <div className="p-[0.7rem] rounded-full bg-gray-200 md:hidden">
                      <img src={arrow} alt="Arrow_icon" className="w-6" />
                    </div>
                  </div>
                  <div className="bg-gray-600 absolute -bottom-1 left-1/2 rotate-45 p-2 hidden md:block"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
