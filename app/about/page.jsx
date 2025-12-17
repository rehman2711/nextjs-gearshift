"use client";
import Container from "@/app/components/Container";
import BentoGrid from "@/app/components/BentoGrid";
import { useEffect, useState } from "react";
import Loader from "@/app/loader";

const About = () => {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowLoader(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (showLoader) return <Loader />;

  const numarr = [
    { id: 1, num: "10+", word: "Years of Experience" },
    { id: 2, num: "1000+", word: "Happy Clients" },
    { id: 3, num: "200+", word: "Vehicles" },
    { id: 4, num: "10+", word: "Locations" },
  ];

  const values = [
    {
      id: 1,
      img: "/images/about-images/excellence.png",
      heading: "Excellence",
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, ipsa.",
    },
    {
      id: 2,
      img: "/images/about-images/reliability.png",
      heading: "Reliability",
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, ipsa.",
    },
    {
      id: 3,
      img: "/images/about-images/affordability.png",
      heading: "Affordability",
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, ipsa.",
    },
    {
      id: 4,
      img: "/images/about-images/loyalty.png",
      heading: "Loyalty",
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, ipsa.",
    },
  ];

  const locations = [
    { id: 1, img: "/images/about-images/ichalkaranji.jpg", lname: "Ichalkaranji" },
    { id: 2, img: "/images/about-images/dhule.jpg", lname: "Dhule" },
    { id: 3, img: "/images/about-images/satara.jpg", lname: "Satara" },
    { id: 4, img: "/images/about-images/nashik.jpg", lname: "Nashik" },
  ];

  return (
    <div className="pt-6 sm:pt-8">
      <Container>
        <div className="mx-auto max-w-5xl">
          {/* JOURNEY */}
          <div className="flex flex-col md:flex-row gap-8 md:gap-10">
            <div className="md:w-1/2 p-5 sm:p-8 bg-[#ffd670]/40 rounded-2xl flex flex-col gap-6 justify-around">
              <div>
                <h1 className="text-xl sm:text-2xl font-black uppercase text-[#31393c]">
                  Our Journey
                </h1>
                <p className="text-sm sm:text-base mt-4 text-[#2e1f27]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Distinctio vitae maiores doloremque.
                </p>
              </div>

              <div>
                <h1 className="text-xl sm:text-2xl font-black uppercase text-[#31393c]">
                  Our Mission
                </h1>
                <p className="text-sm sm:text-base mt-4 text-[#2e1f27]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
            </div>

            <div className="md:w-1/2 flex justify-center">
              <img
                src="/images/about-images/about-image.jpg"
                className="rounded-2xl w-full max-w-[590px] h-[260px] sm:h-[380px] md:h-[550px] object-cover"
              />
            </div>
          </div>

          {/* STATS */}
          <div className="my-16 sm:my-20 py-8 px-4 sm:px-6 rounded-2xl bg-[#a8dcd1]/50">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {numarr.map((val) => (
                <div key={val.id}>
                  <h1 className="text-4xl sm:text-5xl font-bold text-orange-600">
                    {val.num}
                  </h1>
                  <h5 className="text-base sm:text-lg font-semibold mt-2">
                    {val.word}
                  </h5>
                  <p className="text-sm mt-3 text-[#2e1f27]">
                    Lorem ipsum dolor sit amet consectetur.
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* FOUNDER */}
          <div className="my-16 sm:my-20 px-4">
            <div className="flex flex-col md:flex-row gap-8 md:gap-10">
              <div className="md:w-1/2 flex justify-center">
                <img
                  src="/images/about-images/person.jpg"
                  className="rounded-2xl w-full max-w-[590px] h-[260px] sm:h-[380px] md:h-[550px] object-cover"
                />
              </div>

              <div className="md:w-1/2 p-5 sm:p-8 bg-[#7fb069]/40 rounded-2xl flex flex-col gap-6 justify-around">
                <div>
                  <h1 className="text-xl sm:text-2xl uppercase font-black text-[#31393c]">
                    Meet Our Founder
                  </h1>
                  <p className="text-sm sm:text-base mt-4 text-[#2e1f27]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>

                <div>
                  <h1 className="text-xl sm:text-2xl uppercase font-black text-[#31393c]">
                    Leadership & Expertise
                  </h1>
                  <p className="text-sm sm:text-base mt-4 text-[#2e1f27]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* VALUES */}
          <div className="my-16 sm:my-20 py-8 px-4 rounded-2xl bg-[#a8dcd1]/50">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-center">
              {values.map((val) => (
                <div key={val.id}>
                  <span className="inline-flex bg-yellow-400 rounded-full p-4">
                    <img src={val.img} className="h-8 sm:h-10" />
                  </span>
                  <h4 className="mt-4 font-semibold text-base sm:text-lg">
                    {val.heading}
                  </h4>
                  <p className="text-sm mt-2 text-[#2e1f27]">{val.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* LOCATIONS */}
          <div className="my-12 p-5 sm:p-8 bg-[#8ecae6]/40 rounded-2xl">
            <h1 className="text-xl sm:text-2xl font-bold">Our Locations</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-10">
              {locations.map((val) => (
                <div key={val.id} className="text-center">
                  <img
                    src={val.img}
                    className="rounded-xl h-[180px] sm:h-[200px] w-full object-cover"
                  />
                  <span className="block mt-3 font-semibold text-[#2e1f27]">
                    {val.lname}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* SHOWCASE */}
          <div className="my-8 flex justify-center">
            <h1 className="text-xl sm:text-2xl font-bold underline underline-offset-8">
              OUR SHOWCASE
            </h1>
          </div>

          <div className="p-2 rounded-3xl bg-gray-400/30">
            <div className="p-4 sm:p-5 rounded-2xl bg-[#283618]/40">
              <BentoGrid className="max-w-6xl mx-auto" />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default About;
