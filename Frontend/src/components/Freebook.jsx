import React, { useEffect, useState } from "react";
import list from "../../public/list.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from "./Cards";
import axios from "axios";
import { getFreeBook } from "../../../Backend/controllers/bookController";
const Freebook = () => {
  //   const filterData = list.filter((data) => {
  //     return data.category === "free";
  //   });
  //   console.log(filterData);

  const [freebook, setFreebook] = useState([]);
  useEffect(() => {
    const getFreebook = async () => {
      try {
        let res = await axios.get("http://localhost:4001/");
        // console.log(res);
        setFreebook(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getFreebook();
  }, []);

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480, //this is the tailwind breakpint that is used to make the website responsive
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="max-w-screen-2xl container max-auto md:px-20 px-4">
        <div>
          <h2 className="font-semibold text-xl pb-2">Free Offered Courses</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
            maiores asperiores ducimus?Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Eum harum fugit odio.
          </p>
        </div>
        <div className="slider-container">
          <Slider {...settings}>
            {freebook.map((card) => (
              <Cards item={card} key={card._id} />
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Freebook;
