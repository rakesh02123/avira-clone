import { CheckIcon } from "@heroicons/react/24/solid";
import { ArrowLongUpIcon } from "@heroicons/react/24/solid";

const Avarahome = () => {
  return (
    <>
      <div className="bg-[url('/homebg.jpg')] h-screen flex bg-cover bg-center flex-col">
        <div className="bg-black py-3 bg-opacity-40 flex backdrop-blur-md justify-end">
          <div className="flex gap-8 mx-16 text-white items-center">
            <div className="flex gap-2 items-center">
              <div className="">
                <img className="w-5 h-5" src="/mail.webp" alt="" />
              </div>
              <div className="">connect@aviradigitalstudios.com</div>
            </div>
            <div className="flex gap-2 items-center">
              <div className="">
                <img className="w-5 h-5" src="/phone-call.webp" alt="" />
              </div>
              <div className="">+91-96352-67083</div>
            </div>
          </div>
        </div>

        <div className="mx-16">
          <div className="flex justify-between items-center">
            <div className="">
              <img className="h-14" src="logo.webp" alt="" />
            </div>
            <div className="flex gap-5 font-semibold text-xl text-white">
              <div className="">Home</div>
              <div className="">
                <select className="bg-transparent">
                  <option className="bg-black bg-opacity-70">
                    Our Service
                  </option>
                  <option className="bg-black bg-opacity-70">Design</option>
                  <option className="bg-black bg-opacity-70">
                    Development
                  </option>
                  <option className="bg-black bg-opacity-70">Marketing</option>
                </select>
              </div>
              <div className="">About Us</div>
              <div className="">Contact Us</div>
              <div className=""></div>
            </div>
          </div>

          {/* first grid */}
          <div className="">
            <div className="grid grid-cols-2">
              <div className="flex flex-col h-screen justify-center gap-6">
                <div className="text-lg text-blue-300">
                  Design, Development & Marketing Solutions
                </div>
                <div className="text-7xl font-semibold text-white">
                  <span> Avira Digital Studios - </span>
                  <span className="text-blue-300">India</span>
                </div>
                <div className="text-white max-w-xl text-2xl">
                  Transforming your digital experience has never been easier
                  than with Avira Digital Studios, your one-stop-shop for all
                  your digital requirements. We are a full-service design,
                  development, and marketing company that helps businesses and
                  enterprises establish and grow their online presence.
                </div>
                <button className="flex bg-gradient-to-t mt-10 from-gray-900 to-zinc-500 w-48 rounded-full py-2 justify-center gap-4 items-center">
                  <h1 className="text-white text-xl font-semibold">
                    Get Started
                  </h1>
                  <div className="">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-10 h-10   bg-white rounded-3xl"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                      />
                    </svg>
                  </div>
                </button>
              </div>
              <div className="flex h-screen">
                <img src="/hero-img-1.531868b6.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* next part */}
      <div className="bg-[#121223] h-[3950px] flex">
        <div className="bg-[url('/body-bg.png')] w-screen h-[3950px] bg-cover bg-center flex flex-col">
          <div className="container mx-auto">
            <div className="flex flex-col items-center text-center gap-5 mt-32">
              <div className="text-blue-300 text-lg">OUR COMPANY</div>
              <div className="text-white font-bold text-4xl">We Provide</div>
              <div className="text-white font-bold text-4xl max-w-3xl">
                Design, Development & Marketing Solutions for Rapid Business
                Expansion
              </div>
            </div>
            {/* bg box  */}
            <div className="mt-24 mx-10">
              <div className="bg-[#69abce] bg-opacity-10 grid grid-cols-2 rounded-lg h-[570px] shadow-2xl shadow-black">
                <div className="flex flex-col items-center justify-center">
                  <img
                    className="h-96 rounded-lg ms-7"
                    src="/image.webp"
                    alt=""
                  />
                </div>
                <div className="flex flex-col justify-center gap-6">
                  <div className="flex items-center justify-center">
                    <div className="text-9xl font-extrabold text-blue-300">
                      4+
                    </div>
                    <div className="text-white font-medium text-xl">
                      YEARS‘ <br /> EXPERIENCE <br /> IN IT
                    </div>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="text-white font-medium text-lg max-w-lg">
                      ADS is committed to building attractive and useful
                      websites and apps that engage your audience and provide
                      marketing solutions for them since we are aware that they
                      serve as the online representation of your company. From
                      custom design to e-commerce development with search engine
                      optimization to pay-per-click marketing, our design,
                      development and marketing services are tailored to
                      engaging your target audience and match the specific
                      requirements of your organisation.
                    </div>
                  </div>
                  <div className="flex gap-8 ms-11">
                    <button className="flex bg-gradient-to-t from-gray-900 to-zinc-500 w-48 rounded-full py-2 justify-center gap-4 items-center">
                      <h1 className="text-white text-xl font-semibold">
                        Get Started
                      </h1>
                      <div className="">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-10 h-10   bg-white rounded-3xl"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                          />
                        </svg>
                      </div>
                    </button>
                    <button className="flex bg-gradient-to-t from-gray-900 to-zinc-500 w-48 rounded-full py-2 justify-center gap-4 items-center">
                      <h1 className="text-white text-xl font-semibold">
                        Contact Us
                      </h1>
                      <div className="">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-10 h-10   bg-white rounded-3xl"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                          />
                        </svg>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* next bg box */}
            <div className="mt-32 mx-10">
              <div className="grid grid-cols-2">
                <div className="text-end items-end flex flex-col gap-5 justify-center">
                  <div className="">
                    <div className="text-blue-300 text-lg">Achievements</div>
                  </div>
                  <div className="">
                    <div className="text-white text-5xl font-semibold max-w-xl">
                      Achieving Business Success Together
                    </div>
                  </div>
                  <div className="mt-7">
                    <button className="flex bg-gradient-to-t from-gray-900 to-zinc-500 w-48 rounded-full py-2 justify-center gap-4 items-center">
                      <h1 className="text-white text-xl font-semibold">
                        Get Started
                      </h1>
                      <div className="">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-10 h-10   bg-white rounded-3xl"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                          />
                        </svg>
                      </div>
                    </button>
                  </div>
                </div>
                <div className="ms-14">
                  <div className="bg-[url('/stats-bg.png')] h-[330px] bg-cover bg-center rounded-lg shadow-2xl shadow-black">
                    <div className="flex text-white justify-center h-[330px] items-center gap-7">
                      <div className="space-y-7">
                        <div className="text-center">
                          <div className="font-bold text-6xl">25+</div>
                          <div className="font-semibold text-2xl">
                            Skilled Experts
                          </div>
                        </div>
                        <div className="text-center">
                          <div className="font-bold text-6xl">45+</div>
                          <div className="font-semibold text-2xl">
                            Happy Clients
                          </div>
                        </div>
                      </div>
                      <div className="space-y-7">
                        <div className="text-center">
                          <div className="font-bold text-6xl">4+</div>
                          <div className="font-semibold text-2xl">
                            Year Experience
                          </div>
                        </div>
                        <div className="text-center">
                          <div className="font-bold text-6xl">60</div>
                          <div className="font-semibold text-2xl">
                            Completed Projects
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* next part */}
            <div className="mx-10 mt-32">
              <div className="text-center space-y-4">
                <div className="text-blue-300 text-lg">Services We Provide</div>
                <div className="text-white text-5xl font-semibold">
                  Presenting You with Our IT Solutions
                </div>
              </div>

              {/* card part  */}
              <div className="mt-20">
                <div className="grid grid-cols-3 gap-8">
                  {/* first column */}

                  <div className="shadow-2xl shadow-black hover:bg-[url('/service-hover-bg.jpg')] h-[425px] w-[380px] bg-[#69abce] bg-opacity-10 rounded-lg flex flex-col justify-center items-center gap-3">
                    <div className="">
                      <img src="/image 3.webp" alt="" />
                    </div>
                    <div className="text-white text-3xl font-bold">Design</div>
                    <div className="text-white text-xl text-center font-semibold ">
                      You can strengthen your brand with <br /> our impressive
                      design services, <br /> which include graphic design, web{" "}
                      <br />
                      design, and more.
                    </div>
                    <div className="">
                      <button className="flex bg-gradient-to-t from-gray-900 to-zinc-500 w-48 rounded-full py-2 justify-center gap-4 items-center">
                        <h1 className="text-white text-xl font-semibold">
                          Know More
                        </h1>
                        <div className="">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-10 h-10   bg-white rounded-3xl"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                            />
                          </svg>
                        </div>
                      </button>
                    </div>
                  </div>

                  {/* second column  */}
                  <div className="shadow-2xl shadow-black  hover:bg-[url('/service-hover-bg.jpg')] h-[425px] w-[380px] bg-[#69abce] bg-opacity-10 rounded-lg flex flex-col justify-center items-center gap-3">
                    <div className="">
                      <img src="/image (1).webp" alt="" />
                    </div>
                    <div className="text-white text-3xl font-bold">
                      Development
                    </div>
                    <div className="text-white text-xl text-center font-semibold">
                      With our expert development <br /> services such as web
                      and app <br />
                      development, you can make your <br /> ideas a reality
                    </div>
                    <div className="">
                      <button className="flex bg-gradient-to-t from-gray-900 to-zinc-500 w-48 rounded-full py-2 justify-center gap-4 items-center">
                        <h1 className="text-white text-xl font-semibold">
                          Know More
                        </h1>
                        <div className="">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-10 h-10   bg-white rounded-3xl"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                            />
                          </svg>
                        </div>
                      </button>
                    </div>
                  </div>

                  {/* third column  */}

                  <div className="shadow-2xl shadow-black  hover:bg-[url('/service-hover-bg.jpg')] h-[425px] w-[380px] bg-[#69abce] bg-opacity-10 rounded-lg flex flex-col justify-center items-center gap-3">
                    <div className="">
                      <img src="/image 3.webp" alt="" />
                    </div>
                    <div className="text-white text-3xl font-bold">
                      Marketing
                    </div>
                    <div className="text-white text-xl text-center font-semibold ">
                      Drive growth with our strategic <br /> marketing services
                      that assist in <br /> locating and interacting with your{" "}
                      <br /> target market.
                    </div>
                    <div className="">
                      <button className="flex bg-gradient-to-t from-gray-900 to-zinc-500 w-48 rounded-full py-2 justify-center gap-4 items-center">
                        <h1 className="text-white text-xl font-semibold">
                          Know More
                        </h1>
                        <div className="">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-10 h-10   bg-white rounded-3xl"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                            />
                          </svg>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* next part  */}
            <div className="mt-[115px] mx-10">
              <div className="bg-[url('/contact-bg.png')] h-[880px] bg-cover bg-center rounded-lg">
                <div className="">
                  <div className="grid grid-cols-5 place-items-center justify-center">
                    <div className="col-span-3 justify-center h-[880px] flex flex-col gap-5">
                      <div className="text-blue-300 text-lg">Say hello!</div>
                      <div className="text-white text-4xl font-semibold max-w-xl">
                        Our expert team will love to hear from you.
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-4">
                          <div className="space-y-2">
                            <div className="font-bold text-gray-300 text-opacity-50">
                              First Name
                            </div>
                            <input
                              className="py-4 pe-28 ps-5 rounded-full"
                              type="text"
                              placeholder="First Name"
                            />
                          </div>
                          <div className="space-y-2">
                            <div className="font-bold text-gray-300 text-opacity-50">
                              Email
                            </div>
                            <input
                              type="text"
                              className="py-4 pe-28 ps-5 rounded-full"
                              placeholder="you@company.com"
                            />
                          </div>
                        </div>
                        <div className="space-y-4">
                          <div className="space-y-2">
                            <div className="font-bold text-gray-300 text-opacity-50">
                              Last name
                            </div>
                            <input
                              type="text"
                              className="py-4 pe-28 ps-5 rounded-full"
                              placeholder="Last name"
                            />
                          </div>
                          <div className="space-y-2">
                            <div className="font-bold text-gray-300 text-opacity-50">
                              Phone number
                            </div>
                            <input
                              type="text"
                              className="py-4 pe-28 ps-5 rounded-full"
                              placeholder="+91 9635267083"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="font-bold text-gray-300 text-opacity-40">
                          Message
                        </div>
                        <textarea
                          placeholder="you@company.com"
                          className="rounded-md ps-5 pt-5"
                          name=""
                          id=""
                          cols="82"
                          rows="8"
                        ></textarea>
                      </div>
                      <div className="flex gap-3 items-center">
                        <input
                          className="h-6 w-4"
                          type="checkbox"
                          name=""
                          id=""
                        />
                        <div className="text-white text-2xl">
                          You agree to our friendly privacy policy.
                        </div>
                      </div>
                      <div className="flex justify-center mt-6">
                        <button className="flex bg-gradient-to-t from-gray-900 to-zinc-500 w-48 rounded-full py-2 justify-center gap-4 items-center">
                          <h1 className="text-white text-xl font-semibold">
                            Send Now
                          </h1>
                          <div className="">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="w-10 h-10   bg-white rounded-3xl"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                              />
                            </svg>
                          </div>
                        </button>
                      </div>
                    </div>
                    <div className="col-span-2 justify-center h-[800px] flex flex-col ms-10 gap-3">
                      <div className="text-blue-300 text-lg font-medium">
                        Contact Us
                      </div>
                      <div className="text-5xl text-white font-semibold">
                        Your Growth, Our Expertise
                      </div>
                      <div className="mt-10 space-y-7">
                        <div className="flex gap-3 items-center">
                          <div className="">
                            <CheckIcon className="text-blue-600  rounded-full h-9 bg-white py-2 px-2" />
                          </div>
                          <div className="text-white text-xl font-medium">
                            On time project delivery
                          </div>
                        </div>
                        <div className="flex gap-3 items-center">
                          <div className="">
                            <CheckIcon className="text-blue-600  rounded-full h-9 bg-white py-2 px-2" />
                          </div>
                          <div className="text-white text-xl font-medium">
                            Technical Proficienc
                          </div>
                        </div>
                        <div className="flex gap-3 items-center">
                          <div className="">
                            <CheckIcon className="text-blue-600  rounded-full h-9 bg-white py-2 px-2" />
                          </div>
                          <div className="text-white text-xl font-medium">
                            On time project delivery
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* next part */}
            <div className="mt-20 mx-10">
              <div className="bg-[url('/cta-bg.jpg')] h-36 rounded-md">
                <div className="grid grid-cols-2">
                  <div className="flex flex-col justify-center items-center">
                    <div className="">
                      <div className="text-white font-semibold text-4xl">
                        Get a free consultation
                      </div>
                      <div className="text-white text-lg font-medium">
                        We evaluate your requirements and provide the best
                        solutions.
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center h-36 items-center gap-7">
                    <button className="flex bg-gradient-to-t from-gray-900 to-zinc-500 w-48 rounded-full py-2 justify-center gap-4 items-center">
                      <h1 className="text-white text-xl font-semibold">
                        Contact Us
                      </h1>
                      <div className="">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-10 h-10   bg-white rounded-3xl"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                          />
                        </svg>
                      </div>
                    </button>
                    <button className="flex bg-gradient-to-t from-gray-900 to-zinc-500 w-48 rounded-full py-2 justify-center gap-4 items-center">
                      <h1 className="text-white text-xl font-semibold">
                        Contact Us
                      </h1>
                      <div className="">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-10 h-10   bg-white rounded-3xl"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                          />
                        </svg>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* footer part  */}
          <div className="mt-16">
            <div className="bg-[#69abce] bg-opacity-30 rounded-t-3xl">
              <div className="grid grid-cols-2 items-center justify-items-end mx-10 border-b-2 pb-12">
                <div className="space-y-5 mt-8 ">
                  <div className="">
                    <img className="h-16" src="logo.webp" alt="" />
                  </div>
                  <div className="">
                    <div className="text-white text-lg max-w-xl">
                      ADS is a design, development, and marketing company that
                      offers eye-catching designs, highly functional websites
                      and applications, and successful marketing techniques to
                      assist businesses in winning online. We take care of your
                      online presence, so you won't have to worry about your
                      offline growth. Join us today to discover more about the
                      unknown possibilities of your business!
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-16">
                  <div className="">
                    <div className="font-bold text-white text-xl">
                      QUICK LINKS
                    </div>
                    <div className="text-white font-medium mt-7">Home</div>
                    <div className="text-white font-medium">About</div>
                    <div className="text-white font-medium">Contact</div>
                  </div>
                  <div className="">
                    <div className="font-bold text-white text-xl">
                      USEFUL LINKS
                    </div>
                    <div className="text-white font-medium mt-7">Career</div>
                    <div className="text-white font-medium"> Blog </div>
                    <div className="text-white font-medium">Sitemap</div>
                  </div>
                  <div className="">
                    <div className="font-bold text-white text-xl">
                      SOCIAL LINKS
                    </div>
                    <div className="text-white font-medium mt-7">Twitter</div>
                    <div className="text-white font-medium">Instagram </div>
                    <div className="text-white font-medium">Facebook </div>
                    <div className="text-white font-medium">LinkedIn</div>
                  </div>
                </div>
              </div>

              {/* footer part 2 */}

              <div className="mx-10 text-white mt-9 pb-12">
                <div className="grid grid-cols-3 justify-items-end items-center">
                  <div className="">
                    <div className="text-base font-medium">
                      © 2023 Avira Digital Studios. All rights reserved.
                    </div>
                  </div>
                  <div className="flex gap-7">
                    <div className="">
                      <img src="/image (6).webp" alt="" />
                    </div>
                    <div className="">
                      <img src="/image (3).webp" alt="" />
                    </div>
                    <div className="">
                      <img src="/image (7).webp" alt="" />{" "}
                    </div>
                    <div className="">
                      <img className="h-7" src="/instagram (1).png" alt="" />
                    </div>
                  </div>
                  <div className="flex flex-col items-center gap-3">
                    <div className="">
                      <ArrowLongUpIcon className="bg-blue-400 rounded-full h-12 p-2" />
                    </div>
                    <div className="font-bold">Scroll to top</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Avarahome;
