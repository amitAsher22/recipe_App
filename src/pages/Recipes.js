import React from "react";
import PreviousSearch from "../components/PreviousSearch";
import RecipeCard from "../components/RecipeCard";

function Recipes() {
  const recieps = [
    {
      title: "Chicken Pan Pizza",
      image:
        "https://cdn.pixabay.com/photo/2017/09/30/15/10/plate-2802332_1280.jpg",
      authoImg:
        "https://cdn.pixabay.com/photo/2015/08/16/12/38/man-890885_1280.jpg",
    },
    {
      title: "american chicken burger",
      image:
        "https://cdn.pixabay.com/photo/2019/10/08/02/29/american-4534001_1280.jpg",
      authoImg:
        "https://cdn.pixabay.com/photo/2015/08/16/12/38/man-890885_1280.jpg",
    },
    {
      title: "Cookies",
      image:
        "https://cdn.pixabay.com/photo/2015/05/07/15/08/cookie-756601_1280.jpg",
      authoImg:
        "https://cdn.pixabay.com/photo/2015/08/16/12/38/man-890885_1280.jpg",
    },
    {
      title: "juice",
      image:
        "https://cdn.pixabay.com/photo/2018/02/23/19/23/smoothies-3176371_1280.jpg",
      authoImg:
        "https://cdn.pixabay.com/photo/2015/08/16/12/38/man-890885_1280.jpg",
    },
    {
      title: "biriyani",
      image:
        "https://cdn.pixabay.com/photo/2021/02/25/07/47/mandi-6048376_1280.jpg",
      authoImg:
        "https://cdn.pixabay.com/photo/2015/08/16/12/38/man-890885_1280.jpg",
    },
    {
      title: "salad",
      image:
        "https://cdn.pixabay.com/photo/2021/01/10/04/37/salad-5904093_1280.jpg",
      authoImg:
        "https://cdn.pixabay.com/photo/2015/08/16/12/38/man-890885_1280.jpg",
    },
    {
      title: "ice creame",
      image:
        "https://cdn.pixabay.com/photo/2016/03/23/15/00/ice-cream-1274894_1280.jpg",
      authoImg:
        "https://cdn.pixabay.com/photo/2015/08/16/12/38/man-890885_1280.jpg",
    },
    {
      title: "lasagna",
      image:
        "https://cdn.pixabay.com/photo/2021/02/06/11/51/food-5987888_1280.jpg",
      authoImg:
        "https://cdn.pixabay.com/photo/2015/08/16/12/38/man-890885_1280.jpg",
    },
    {
      title: "pudding",
      image:
        "https://cdn.pixabay.com/photo/2017/01/06/17/18/caramel-1958358_1280.jpg",
      authoImg:
        "https://cdn.pixabay.com/photo/2015/08/16/12/38/man-890885_1280.jpg",
    },
    {
      title: "soup",
      image:
        "https://cdn.pixabay.com/photo/2019/09/27/09/59/pumpkin-soup-4508015_1280.jpg",
      authoImg:
        "https://cdn.pixabay.com/photo/2015/08/16/12/38/man-890885_1280.jpg",
    },
  ];

  return (
    <div>
      <PreviousSearch />
      <div className="recipes-container">
        {recieps.map((reciep, index) => {
          return <RecipeCard key={index} reciep={reciep} />;
        })}
      </div>
    </div>
  );
}

export default Recipes;
