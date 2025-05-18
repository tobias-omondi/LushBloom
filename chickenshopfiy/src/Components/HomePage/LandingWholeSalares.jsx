import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';

import wholesaleone from '/src/assets/wholesalepackage1.jpeg';
import wholesaletwo from '/src/assets/chefwithfood.jpeg';
import wholesalethree from '/src/assets/wholesalepackage.jpeg';
import wholesalefour from '/src/assets/wholesalefamily.jpeg';
import wholesalefive from '/src/assets/wholesalefood.jpeg';

const wholeSaleImages = [
  {
    id: 1, image: wholesaleone, title: "Bulk Meal Packet",
    description: "Our Bulk Meal Pack  is designed to help busy families save time and eat better throughout the week. Packed with a variety of fresh and nutritious meals, it's perfect for planning ahead and reducing daily cooking stress. Whether you're meal-prepping for the week or feeding multiple mouths, this package offers convenience without compromising quality. Enjoy great taste and generous portions at a price that fits your budget."
  },
  {
    id: 2, image: wholesaletwo, title: "Chef’s Special",
    description: "The Chef’s Special is curated by our top culinary experts to bring restaurant-quality dishes straight to your table. Each meal is thoughtfully crafted with fresh, premium ingredients and bold flavors. Ideal for food lovers who appreciate the art of fine dining at home. With every bite, experience a new level of satisfaction and gourmet indulgence."
  },
  {
    id: 3, image: wholesalethree, title: "Full Wholesale Deal",
    description: "The Full Wholesale Deal is our most value-packed option for those who love to buy in bulk. Loaded with generous portions of proteins, grains, and sides, it’s ideal for larger households or events. This bundle is all about savings, variety, and efficiency. Take advantage of wholesale pricing while enjoying fresh, high-quality food every day of the week."
  },
  {
    id: 4, image: wholesalefour, title: "Family Combo",
    description: "Bringing the family together over a hearty meal has never been easier with our Family Combo. Carefully selected to please everyone from kids to adults, this combo offers something for every palate. It includes balanced dishes with wholesome ingredients and delicious flavors. Make mealtime joyful, stress-free, and full of love with this family favorite package."
  },
  {
    id: 5, image: wholesalefive, title: "Essentials Only",
    description: "If you’re looking for simplicity without sacrificing flavor, the Essentials Only package is the perfect choice. It contains all the basic food items you need to get through the week, including staple meals and nutritious options. Ideal for singles, students, or anyone looking for a minimalist approach to meal planning. Save time, money, and energy while still enjoying fresh, satisfying food."
  }
];



const LandingWholeSalares = ({ Title, Description }) => {
  return (
    <div className="bg-black py-10 px-4">
      <div>
        <h1 className="text-gray-200 text-3xl md:text-5xl py-2 md:py-5 font-bold"> {Title} </h1>
        <h3 className="text-gray-400 py-4 md:py-3 text-xl md:text-4xl"> {Description} </h3>
      </div>

      <div className="max-w-6xl mx-auto mt-10">
        <Swiper
          modules={[Autoplay]}
          autoplay={{
            delay: 5000, // 5 seconds
            disableOnInteraction: false,
          }}
          speed={1500} // Smooth transition speed (1.5s)
          spaceBetween={20}
          loop={true}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
          }}
        >
          {wholeSaleImages.map((item, index) => (
            <SwiperSlide key={index}>
              <img
                src={item.image}
                alt={`slide-${index}`}
                className="w-full h-[400px] object-cover rounded transition-all duration-1000"
              />
              <div className='text-center bg-green-950 py-3 mt-3 rounded'>
                <h2 className="text-white text-3xl font-semibold mt-5">{item.title}</h2>
                <p className="text-gray-300 text-center mt-2 max-w-4/5 mx-auto">{item.description}</p>
               </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default LandingWholeSalares;
