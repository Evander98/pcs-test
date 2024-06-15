"use client";
import { useState } from "react";
import Slider from "react-slick";

export const News = () => {
  const [selected, setSelected] = useState(0);
  const settings = {
    centerMode: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    customPaging: (i) => (
      <div>
        <div
          className={`w-3 h-3 rounded-full mt-2 ${
            selected === i ? "bg-red-500" : "bg-slate-300"
          }`}
          onClick={() => setSelected(i)}
        />
      </div>
    ),
    afterChange: (i) => setSelected(i),
  };
  return (
    <div>
      <p className="font-bold px-5 mt-5">PCS News</p>
      <Slider {...settings}>
        {Array.from({ length: 3 }).map((_, index) => (
          <div key={index}>
            <div className="rounded-xl shadow-md m-1.5 p-3">
              <div className="flex items-center justify-between">
                <img
                  src="https://www.svgrepo.com/show/384674/account-avatar-profile-user-11.svg"
                  alt="Profile"
                  className="max-w-9 shadow-md rounded-full mr-1"
                />
                <p className="flex-1 text-sm font-semibold text-red-500">
                  Ana Riswati
                </p>
                <div className="text-right text-xs">
                  <p>Senin</p>
                  <p>30 Mei 2022</p>
                </div>
              </div>
              <div className="text-xs mt-2">
                <p className="text-nowrap overflow-hidden text-ellipsis">
                  Kalimat 1 - Lorem ipsum dolor sit amet consectetur.
                </p>
                <p className="text-nowrap overflow-hidden text-ellipsis">
                  Kalimat 2 - Lorem ipsum dolor sit amet consectetur.
                </p>
                <p className="text-nowrap overflow-hidden text-ellipsis">
                  Kalimat 3 - Lorem ipsum dolor sit amet consectetur.
                </p>
                <p className="text-nowrap overflow-hidden text-ellipsis">
                  Kalimat 4 - Lorem ipsum dolor sit amet consectetur.
                </p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};
