import React from "react";

const Cards = ({ item }) => {
  const handleLink = () => {
    window.open(item.pdf, "_blank");
  };

  const handleBuyNow = (event) => {
    event.stopPropagation();
    // Add buy now functionality here
  };

  return (
    <>
      <div className="mt-4 my-3 p-3 cursor-pointer" onClick={handleLink}>
        <div className="card w-92 bg-base-100 shadow-xl my-3 hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
          <figure>
            <img className="h-60" src={item.image} alt="Books" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.name}
              {item.subscription === "free" ? (
                <div className="badge badge-secondary">free</div>
              ) : (
                <div className="badge badge-secondary">paid</div>
              )}
            </h2>
            <p>{item.title}</p>
            <div className="card-actions justify-between">
              <div className="badge badge-outline">${item.price}</div>
              <div
                className="cursor-pointer px-2 py-1 hover:bg-pink-400 hover:text-white duration-200 border-[2px] rounded-full"
                onClick={handleBuyNow}
              >
                Buy Now
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
