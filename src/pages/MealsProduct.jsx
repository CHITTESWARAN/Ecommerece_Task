import React, { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Products1 from "../components/Products.js";
import { UserContext } from "../UserContent.jsx";


const MealsProduct = () => {
  const MealsProducts = Products1.filter((product) => product.category === "Meals");
  const userContext = useContext(UserContext);
  const {cart,setcart}=userContext

  return (
    <div className="py-6 px-4">
      <h2 className="text-xl font-semibold text-start mb-2">Meals Menu</h2>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={4}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          1024: { slidesPerView: 5 },
          768: { slidesPerView: 3 },
          480: { slidesPerView: 1 },
        }}
      >
        {MealsProducts.map((product) => (
          <SwiperSlide key={product.id}>
            <div className="bg-white rounded-lg p-2 flex flex-col items-start">
              <img src={product.image} alt={product.title} className="w-48 h-40 rounded-lg mb-2" />
              <h3 className="text-md font-medium">{product.title}</h3>
              <p className="text-gray-600">{product.price}</p>
              <button
                onClick={() => setcart([...cart, product])}
                className="mt-3 px-5 py-2 text-red-600 text-md font-semibold border-red-500 border-2 hover:bg-gray-400 rounded-lg"
              >
                Add to Cart
              </button>
             
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MealsProduct;
