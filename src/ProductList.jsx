
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./ProductList.css";
import CartItem from "./CartItem";
import { addItem } from "./CartSlice";

function ProductList({ onHomeClick }) {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart?.items || []);
  const [showCart, setShowCart] = useState(false);

  const plantsArray = [
    {
      category: "Air Purifying Plants",
      plants: [
        {
          name: "Snake Plant",
          image:
            "https://cdn.pixabay.com/photo/2021/01/22/06/04/snake-plant-5939187_1280.jpg",
          description: "Produces oxygen at night and improves air quality.",
          cost: "$15",
        },
        {
          name: "Spider Plant",
          image:
            "https://cdn.pixabay.com/photo/2018/07/11/06/47/chlorophytum-3530413_1280.jpg",
          description: "Filters common indoor pollutants from the air.",
          cost: "$12",
        },
        {
          name: "Peace Lily",
          image:
            "https://cdn.pixabay.com/photo/2019/06/12/14/14/peace-lilies-4269365_1280.jpg",
          description: "Removes mold spores and helps purify indoor air.",
          cost: "$18",
        },
        {
          name: "Boston Fern",
          image:
            "https://cdn.pixabay.com/photo/2020/04/30/19/52/boston-fern-5114414_1280.jpg",
          description: "Adds humidity and helps remove airborne toxins.",
          cost: "$20",
        },
        {
          name: "Rubber Plant",
          image:
            "https://cdn.pixabay.com/photo/2020/02/15/11/49/flower-4850729_1280.jpg",
          description: "Easy to care for and effective at removing toxins.",
          cost: "$17",
        },
        {
          name: "Aloe Vera",
          image:
            "https://cdn.pixabay.com/photo/2017/08/07/19/07/aloe-vera-2600876_1280.jpg",
          description: "A useful succulent that also helps improve air quality.",
          cost: "$14",
        },
      ],
    },

    {
      category: "Aromatic Fragrant Plants",
      plants: [
        {
          name: "Lavender",
          image:
            "https://cdn.pixabay.com/photo/2016/07/21/11/17/lavender-1532304_1280.jpg",
          description: "Known for its relaxing and soothing fragrance.",
          cost: "$16",
        },
        {
          name: "Jasmine",
          image:
            "https://cdn.pixabay.com/photo/2018/05/17/10/10/jasmine-3408176_1280.jpg",
          description: "Produces sweet-smelling flowers and a pleasant aroma.",
          cost: "$19",
        },
        {
          name: "Rosemary",
          image:
            "https://cdn.pixabay.com/photo/2017/07/18/15/39/rosemary-2516752_1280.jpg",
          description: "A fragrant herb useful for both decoration and cooking.",
          cost: "$11",
        },
        {
          name: "Mint",
          image:
            "https://cdn.pixabay.com/photo/2017/03/28/12/10/mint-2181473_1280.jpg",
          description: "Fresh aromatic leaves with a refreshing fragrance.",
          cost: "$10",
        },
        {
          name: "Gardenia",
          image:
            "https://cdn.pixabay.com/photo/2017/05/13/17/31/gardenia-2310415_1280.jpg",
          description: "Beautiful white flowers with a rich floral fragrance.",
          cost: "$22",
        },
        {
          name: "Basil",
          image:
            "https://cdn.pixabay.com/photo/2016/10/25/12/28/basil-1769768_1280.jpg",
          description: "Aromatic leaves that are useful in many recipes.",
          cost: "$9",
        },
      ],
    },

    {
      category: "Low Maintenance Plants",
      plants: [
        {
          name: "ZZ Plant",
          image:
            "https://cdn.pixabay.com/photo/2020/07/19/08/05/plant-5419319_1280.jpg",
          description: "Thrives in low light and requires very little watering.",
          cost: "$21",
        },
        {
          name: "Pothos",
          image:
            "https://cdn.pixabay.com/photo/2020/06/15/18/49/plant-5302209_1280.jpg",
          description: "A hardy trailing plant that is easy to grow indoors.",
          cost: "$13",
        },
        {
          name: "Jade Plant",
          image:
            "https://cdn.pixabay.com/photo/2020/03/24/18/27/jade-4967487_1280.jpg",
          description: "A durable succulent that needs minimal care.",
          cost: "$15",
        },
        {
          name: "Cast Iron Plant",
          image:
            "https://cdn.pixabay.com/photo/2018/05/03/13/05/plant-3370582_1280.jpg",
          description: "Very tolerant of low light and irregular watering.",
          cost: "$18",
        },
        {
          name: "Chinese Evergreen",
          image:
            "https://cdn.pixabay.com/photo/2021/06/28/14/28/plant-6372812_1280.jpg",
          description: "A colorful indoor plant that adapts to many conditions.",
          cost: "$20",
        },
        {
          name: "Ponytail Palm",
          image:
            "https://cdn.pixabay.com/photo/2020/05/10/08/37/plant-5150587_1280.jpg",
          description: "Stores water in its trunk and requires little attention.",
          cost: "$24",
        },
      ],
    },
  ];

  const totalCartItems = cartItems.reduce(
    (total, item) => total + (item.quantity || 1),
    0
  );

  const isAddedToCart = (plantName) =>
    cartItems.some((item) => item.name === plantName);

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
  };

  const handleHomeClick = (event) => {
    event.preventDefault();
    if (onHomeClick) {
      onHomeClick();
    }
  };

  const handlePlantsClick = (event) => {
    event.preventDefault();
    setShowCart(false);
  };

  const handleCartClick = (event) => {
    event.preventDefault();
    setShowCart(true);
  };

  const handleContinueShopping = () => {
    setShowCart(false);
  };

  return (
    <div>
      <nav className="navbar">
        <div className="tag">
          <a href="#" onClick={handleHomeClick}>
            <div className="luxury">
              <h3>Paradise Nursery</h3>
              <i>Where Green Meets Serenity</i>
            </div>
          </a>
        </div>

        <div>
          <a href="#" onClick={handleHomeClick}>
            Home
          </a>
        </div>

        <div>
          <a href="#" onClick={handlePlantsClick}>
            Plants
          </a>
        </div>

        <div>
          <a href="#" onClick={handleCartClick}>
            <span style={{ fontSize: "30px" }}>🛒</span>
            <span className="cart-count">{totalCartItems}</span>
          </a>
        </div>
      </nav>

      {!showCart ? (
        <div className="product-grid">
          {plantsArray.map((categoryGroup) => (
            <section
              className="plant-category"
              key={categoryGroup.category}
            >
              <h2>{categoryGroup.category}</h2>

              <div className="plant-list">
                {categoryGroup.plants.map((plant) => (
                  <div className="plant-card" key={plant.name}>
                    <img
                      src={plant.image}
                      alt={plant.name}
                      className="plant-image"
                    />

                    <h3>{plant.name}</h3>

                    <p>{plant.description}</p>

                    <p className="plant-price">
                      <strong>{plant.cost}</strong>
                    </p>

                    <button
                      onClick={() => handleAddToCart(plant)}
                      disabled={isAddedToCart(plant.name)}
                    >
                      {isAddedToCart(plant.name)
                        ? "Added to Cart"
                        : "Add to Cart"}
                    </button>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      ) : (
        <CartItem onContinueShopping={handleContinueShopping} />
      )}
    </div>
  );
}

export default ProductList;
