import React, { useEffect, useState } from "react";
import list from "../../public/list.json";
import Cards from "./Cards";
import { Link } from "react-router-dom";
import axios from "axios";
const Course = () => {
  // console.log(list);
const handleLink = () => {
  window.location.replace(item.pdf);
};
  const [book, setBook] = useState([]);
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book");
        console.log(res.data);
        setBook(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);
  return (
    <div className="max-w-screen-2xl container max-auto md:px-20 px-4 cursor-pointer  " onClick={handleLink}>
      <div className="text-center">
        <div className="h-28"></div>
        <h1 className=" text-2xl md:text-4xl ">
          We're delighted have you{" "}
          <span className="text-pink-500"> Here ! :) </span>
        </h1>
        <p className="mt-12">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint quisquam
          quam voluptates tempora eum ipsum vel assumenda ad nulla, tenetur,
          voluptatum perferendis culpa! Obcaecati minus commodi id esse sequi
          deserunt rerum illum molestiae totam. Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Inventore molestiae expedita quaerat.
        </p>
        <button className="text-white bg-pink-500 py-2 px-4 rounded-md mt-6 hover:bg-pink-700">
          <Link to={"/"}>Back</Link>
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3">
        {book.map((item) => {
          return <Cards key={item._id} item={item} />;
        })}
      </div>
    </div>
  );
};

export default Course;
