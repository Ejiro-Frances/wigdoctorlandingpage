import React from "react";
import Braid from "../assets/images/braidedwig.jpg";
import Bobmarley from "../assets/images/bobMarley.jpg";
import Wig from "../assets/images/wig.jpg";
import Closure from "../assets/images/closure.jpg";
import Frontal from "../assets/images/frontal.jpg";
import FullLace from "../assets/images/full-lace.jpg";

import Service from "./Service";

const productData = [
  {
    Image: Braid,
    Title: "Braided Wig",
    Price: 60,
  },
  {
    Image: Bobmarley,
    Title: "Braided Wig",
    Price: 90,
  },
  {
    Image: Wig,
    Title: "Wigging",
    Price: 10,
  },
  {
    Image: Closure,
    Title: "Hand made closures",
    Price: 10,
  },
  {
    Image: Frontal,
    Title: "Hand made frontals",
    Price: 20,
  },
  {
    Image: FullLace,
    Title: "Full lace wig",
    Price: 90,
  },
];

const Data = () => {
  return (
    <div className="ourService">
      <h3>Products</h3>
      <div className="prod-serv">
        {productData.map((product) => (
          <Service
            Image={product.Image}
            Title={product.Title}
            Price={product.Price}
          />
        ))}
      </div>
    </div>
  );
};

export default Data;
