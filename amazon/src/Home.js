import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/61GO0NKfxxL._SX3000_.jpg"
          alt="ads"
        />

        <div className="home__row">
          <Product
            id="101"
            title="Apple iPhone 13 (128GB) - Blue"
            price={[69, 999.99]}
            image={
              "https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/611ovP2GkrL._SL1500_.jpg"
            }
            rating={4}
          />

          <Product
            id="102"
            title="mCaffeine Espresso Exfoliating Body Wash Shower Gel | Tan Removal Body Wash for Men & Women "
            price={[357.99]}
            image={
              "https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/51aBX87OX6L._SL1100_.jpg"
            }
            rating={3}
          />
        </div>

        <div className="home__row">
          <Product
            id="103"
            title="Nike Unisex Basketball Shoes"
            price={[35942.94]}
            image={
              "https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/61KscX-ztJL._UL1140_.jpg"
            }
            rating={5}
          />

          <Product
            id="104"
            title="DMP FASHION Womens Rayon Printed Top "
            price={[409.49]}
            image={
              "https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/81YX9GmHfuL._UL1500_.jpg"
            }
            rating={3}
          />

          <Product
            id="105"
            title="Trajectory Supercomfy Grey Neck Pillow Rest Cushion for Travel in Flight car Train Airplane with 10 Years Warranty"
            price={[299.99]}
            image={
              "https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/81lXb2Jw0qL._SL1500_.jpg"
            }
            rating={4}
          />
        </div>

        <div className="home__row">
          <Product
            id="106"
            title="Samsung LC49HG90DMUXEN 48.9-inch Ultra Wide Curved Monitor (Black)"
            price={[1, 45, 888.88]}
            image={
              "https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/71MlcO29QOL._SL1500_.jpg"
            }
            rating={4}
          />
        </div>

        <div className="home__row">
          <Product
            id="107"
            title="Vivek Wood Wooden Dining Chair Only | Dinning Chairs for Dining Room Table | Sheesham Wood, Set of 2, Provincial Teak Finish"
            price={[6, 929.0]}
            image={
              "https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/51bREjEDqtL.jpg"
            }
            rating={5}
          />

          <Product
            id="108"
            title="Ramdoot Furniture Wooden Dining Table 6 Seater | Six Seater Dinning Table with 6 Chairs for Home | Dining Room Sets for Restraunts | Sheesham Wood,..."
            price={[28, 599.34]}
            image={
              "https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/41tylk2neSL.jpg"
            }
            rating={4}
          />

          <Product
            id="109"
            title="4700BC Gourmet Popcorn, Nutty Tuxedo Chocolate, Tin, 125g/150g"
            price={[128.1]}
            image={
              "https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/61paIp10KxL._SL1000_.jpg"
            }
            rating={5}
          />
        </div>

        <div className="home__row">
          <Product
            id="110"
            title="Aveeno Baby Mommy & Me Daily Bathtime Gift Set including Baby Wash & Shampoo, Calming Baby Bath & Wash, Baby Moisturizing Lotion & Stress Relief Body Wash for Mom, Soap-Free, 4 items"
            price={[1000.13]}
            image={
              "https://m.media-amazon.com/images/I/81IVKCyJ8HL._AC_SL1500_.jpg"
            }
            rating={4}
          />

          <Product
            id="111"
            title="Apple Watch Series 6 (GPS, 40mm) - (Product) RED - Aluminum Case with (Product) RED﻿ - Sport Band"
            price={[46000.99]}
            image={
              "https://m.media-amazon.com/images/I/81ww7fpkNHL._AC_SL1500_.jpg"
            }
            rating={5}
          />

          <Product
            id="112"
            title="2022 Apple iPad Air (10.9-inch, Wi-Fi, 64GB) - Purple (5th Generation)"
            price={[0.99]}
            image={
              "https://m.media-amazon.com/images/I/61Y39sE4nuL._AC_SL1500_.jpg"
            }
            rating={5}
          />
        </div>

        <div className="home__row">
          <Product
            id="113"
            title="2022 Apple MacBook Pro Laptop with M2 chip: 13-inch Retina Display, 8GB RAM, 256GB ​​​​​​​SSD ​​​​​​​Storage, Touch Bar, Backlit Keyboard, FaceTime HD..."
            price={[108544.99]}
            image={
              "https://m.media-amazon.com/images/I/61bX2AoGj2L._AC_SL1500_.jpg"
            }
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
