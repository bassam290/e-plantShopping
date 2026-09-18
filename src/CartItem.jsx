
مرفقات المستخدم
من هذه الصورة واضح أن جزء شريط التنقل موجود ✅، وفيه:

اسم المتجر Paradise Nursery
رابط Plants
رابط/أيقونة Cart
استدعاء CartItem
دالة handleContinueShopping
لكن المهمة 6 ما زالت غير مكتملة؛ لأن هذا الجزء ظاهر عندك فارغًا:

<div className="product-grid">

</div>

وهذا يعني أن النباتات لا يتم عرضها فعليًا داخل الصفحة، ولا تظهر أزرار Add to Cart هنا.

نحتاج تعديل ProductList.jsx بحيث داخل product-grid يتم:

عرض النباتات من plantsArray
عرض كل فئة
عرض الصورة والاسم والسعر
زر Add to Cart
تعطيل الزر بعد الإضافة
تحديث عداد العربة
إظهار العدد بجانب أيقونة العربة
إذا تريد، أعطيك الآن الكود الكامل الجاهز لـ ProductList.jsx لتستبدل الملف كله مرة واحدة ويغطي متطلبات المهمة 6.

من فين

من نفس ملف ProductList.jsx الذي أنت فاتحه الآن على GitHub.

اضغط علامة القلم Edit this file أعلى يمين الصفحة، ثم داخل المحرر:

اضغط Ctrl + A لتحديد كل محتوى ProductList.jsx.
احذفه.
الصق الكود الكامل الجديد مكانه.
اضغط Commit changes...
اختر Commit directly to the main branch
ثم Commit changes
إذا تريد، أرسل لك الآن الكود الكامل الجاهز لـ ProductList.jsx لتنسخه وتلصقه مباشرة.

ارسل


استغرق التفكير 24s
انسخ الكود التالي كاملًا واستبدل به محتوى ملف ProductList.jsx كله. هذا الإصدار يغطي متطلبات المهمة 6: 3 فئات، 6 نباتات في كل فئة، الصور والأسماء والأسعار، Add to Cart، تعطيل الزر بعد الإضافة، عداد عربة ديناميكي، وشريط تنقل Home / Plants / Cart.

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

بعد اللصق
في ProductList.jsx اضغط:

Commit changes... → Commit directly to the main branch → Commit changes

واكتب في رسالة الـCommit مثلًا:

Complete ProductList shopping functionality

بعد الحفظ سيكون رابط المهمة 6:

https://github.com/bassam290/e-plantShopping/blob/main/src/ProductList.jsx

بعدها نراجع المهمة 7 — CartItem.jsx لأنها تحتاج أيضًا تعديلات مهمة حتى تعمل مع CartSlice.jsx الجديد.

hglilm 7

ننتقل الآن إلى المهمة 7 — CartItem.jsx ✅

افتح داخل مجلد src الملف:

CartItem.jsx

والمطلوب أن يحتوي على:

إجمالي مبلغ العربة.
التكلفة الإجمالية لكل نبات.
صورة النبات + الاسم + سعر الوحدة.
زر + لزيادة الكمية.
زر - لتقليل الكمية.
زر حذف العنصر.
زر Checkout يعرض رسالة مثل Coming Soon.
زر Continue Shopping يرجع إلى صفحة النباتات.
افتح CartItem.jsx وأرسل لي صورة محتواه الحالي، وسأخبرك هل هو مكتمل أو أعطيك الكود الكامل الجاهز للاستبدال.

مرفقات المستخدم
مرفقات المستخدم
ملف CartItem.jsx غير مكتمل حاليًا للمهمة 7؛ لأن الدوال الظاهرة عندك مثل calculateTotalAmount وhandleIncrement وhandleDecrement فارغة، وزر Checkout لا يعرض رسالة بعد.

استبدل محتوى CartItem.jsx كاملًا بهذا الكود، وهو متوافق مع CartSlice.jsx الذي عدّلناه:

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeItem, updateQuantity } from "./CartSlice";
import "./CartItem.css";

const CartItem = ({ onContinueShopping }) => {
  const cart = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const getNumericCost = (cost) => {
    if (typeof cost === "number") return cost;
    return parseFloat(String(cost).replace("$", "")) || 0;
  };

  // إجمالي مبلغ العربة
  const calculateTotalAmount = () => {
    return cart
      .reduce(
        (total, item) =>
          total + getNumericCost(item.cost) * item.quantity,
        0
      )
      .toFixed(2);
  };

  // إجمالي تكلفة النبات الواحد حسب الكمية
  const calculateTotalCost = (item) => {
    return (getNumericCost(item.cost) * item.quantity).toFixed(2);
  };

  const handleContinueShopping = (e) => {
    e.preventDefault();
    if (onContinueShopping) {
      onContinueShopping();
    }
  };

  // زيادة الكمية
  const handleIncrement = (item) => {
    dispatch(
      updateQuantity({
        name: item.name,
        quantity: item.quantity + 1,
      })
    );
  };

  // تقليل الكمية
  const handleDecrement = (item) => {
    dispatch(
      updateQuantity({
        name: item.name,
        quantity: item.quantity - 1,
      })
    );
  };

  // حذف العنصر
  const handleRemove = (item) => {
    dispatch(removeItem(item.name));
  };

  // Checkout
  const handleCheckout = () => {
    alert("Coming Soon!");
  };

  return (
    <div className="cart-container">
      <h2 style={{ color: "black" }}>
        Total Cart Amount: ${calculateTotalAmount()}
      </h2>

      <div>
        {cart.map((item) => (
          <div className="cart-item" key={item.name}>
            <img
              className="cart-item-image"
              src={item.image}
              alt={item.name}
            />

            <div className="cart-item-details">
              <div className="cart-item-name">{item.name}</div>

              <div className="cart-item-cost">
                Unit Price: {item.cost}
              </div>

              <div className="cart-item-quantity">
                <button
                  className="cart-item-button cart-item-button-dec"
                  onClick={() => handleDecrement(item)}
                >
                  -
                </button>

                <span className="cart-item-quantity-value">
                  {item.quantity}
                </span>

                <button
                  className="cart-item-button cart-item-button-inc"
                  onClick={() => handleIncrement(item)}
                >
                  +
                </button>
              </div>

              <div className="cart-item-total">
                Total: ${calculateTotalCost(item)}
              </div>

              <button
                className="cart-item-delete"
                onClick={() => handleRemove(item)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      <div
        style={{ marginTop: "20px", color: "black" }}
        className="total_cart_amount"
      >
        Total Cart Amount: ${calculateTotalAmount()}
      </div>

      <div className="continue_shopping_btn">
        <button
          className="get-started-button"
          onClick={handleContinueShopping}
        >
          Continue Shopping
        </button>

        <br />

        <button
          className="get-started-button1"
          onClick={handleCheckout}
        >
          Checkout
        </button>
      </div>
    </div>
  );
};

export default CartItem;
