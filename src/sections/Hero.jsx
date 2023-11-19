import { useState } from "react";
import Button from "../components/Button";
import { arrowRight } from "../assets/icons";
import { shoes, statistics } from "../constants";
import { bigShoe1 } from "../assets/images";
import ShoeCard from "../components/ShoeCard";

const Hero = () => {
  const [bigShoeImage, setBigShoeImage] = useState(bigShoe1);
  return (
    <section
      id="home"
      className="flex flex-col xl:flex-row p-2 min-h-screen w-full justify-center gap-10  max-container"
    >
      <div className="relative xl:w-2/5 w-full flex flex-col justify-center items-start max-xl:padding-x pt-28">
        <p className="text-xl text-coral-red font-montserrat">
          Our Summer Collection
        </p>
        <h1 className="mt-10 font-palanquin text-[90px] leading-[100px] max-sm:text-[72px] max-sm:leading-[80px] font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative pr-10 z-10">
            The New Arrival
          </span>
          <br />
          <span className="text-coral-red inline-block mt-3">Nike</span> Shoes
        </h1>
        <p className="font-montserrat text-lg leading-8 text-slate-gray mt-6 mb-14 sm:max-w-sm ">
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </p>
        <Button label="Shop Now" iconURL={arrowRight} />
        <div className="flex justify-start items-start flex-wrap xl:gap-16 gap-10 mt-12 w-full">
          {statistics.map((state) => (
            <div key={state.label}>
              <p className="font-bold font-palanquin text-4xl">{state.value}</p>
              <p className="leadiing-7 text-slate-gray font-montserrat">
                {state.label}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex-1 relative flex justify-center items-center xl:min-h-screen max-xl:py-28 bg-primary bg-hero bg-cover bg-center">
        <img
          src={bigShoeImage}
          alt="show collection"
          width={610}
          height={500}
          className="object-contain relative z-10"
        />
        <div className="flex gap-4 sm:gap-6 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
          {shoes.map((shoe) => (
            <div key={shoe.bigShoe}>
              <ShoeCard
                imgURL={shoe}
                changeBigShoeImage={(shoe) => {
                  setBigShoeImage(shoe);
                }}
                bigShoeImage={bigShoeImage}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
