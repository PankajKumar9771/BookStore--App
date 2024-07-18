import React from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";
import Cards from "./Cards";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useAuth } from "../context/AuthProvider";

const Search = () => {
  const location = useLocation();
  const { searchResults } = location.state || [];
  const [authUser] = useAuth();
//   console.log(searchResults);
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <div className="h-28"></div>
      <div className="flex items-center justify-center min-h-[70vh] max-w-[90vw]">
        <div>
          <h1>Search Results</h1>

          {searchResults ? (
            <ul>
              {searchResults.map((book, index) => (
                <li key={index}>
                  {book.subscription === "free" || authUser ? (
                    <Cards item={book} />
                  ) : (
                    navigate("/signup")
                  )}
                </li>
              ))}
            </ul>
          ) : (
            <p>No results found.</p>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Search;
