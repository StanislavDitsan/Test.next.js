import React from "react";
import CardCity from "./components/citycard";
import { ThreeDCardDemo } from "./components/AceternityUI/3D-cardEffect/3d-cardComponent";
import { BackgroundBoxesDemo } from "./components/AceternityUI/Bgbox/background-boxesComponent";

export default function Home() {
  return (
    <main>
      <BackgroundBoxesDemo />
      {/* <div className="min-h-screen bg-gradient-to-b from-blue-200 to-blue-400 flex justify-center items-center mt-2">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-8">Home Page</h1>
          <p className="text-lg text-gray-800 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            vehicula urna nec sapien venenatis, a mollis purus ultricies.
          </p>
          <a
            href="/about"
            className="bg-white text-primary font-semibold py-2 px-4 rounded hover:bg-gray-200 transition duration-300"
          >
            Learn More
          </a>
        </div>
      </div>

      <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
        <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          <img
            className="mx-auto h-12"
            src="https://tailwindui.com/img/logos/workcation-logo-indigo-600.svg"
            alt=""
          />
          <figure className="mt-10">
            <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
              <p>
                “Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
                expedita voluptas culpa sapiente alias molestiae. Numquam
                corrupti in laborum sed rerum et corporis.”
              </p>
            </blockquote>
            <figcaption className="mt-10">
              <img
                className="mx-auto h-10 w-10 rounded-full"
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
              <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                <div className="font-semibold text-gray-900">Judith Black</div>
                <svg
                  viewBox="0 0 2 2"
                  width={3}
                  height={3}
                  aria-hidden="true"
                  className="fill-gray-900"
                >
                  <circle cx={1} cy={1} r={1} />
                </svg>
                <div className="text-gray-600">CEO of Workcation</div>
              </div>
            </figcaption>
          </figure>
        </div>
      </section> */}
      <CardCity />
      <div className="flex flex-col items-center mt-24 space-y-8 px-4 sm:flex-row sm:justify-center sm:space-x-8 sm:space-y-0">
        <ThreeDCardDemo />
      </div>
    </main>
  );
}
