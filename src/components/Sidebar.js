'use client';

import { useState } from 'react';

const sidebarCategories = [
  {
    icon: '/images/icons/dress.svg', alt: 'clothes', label: 'Clothes',
    items: [
      { name: 'Shirt', stock: 300 },
      { name: 'shorts & jeans', stock: 60 },
      { name: 'jacket', stock: 50 },
      { name: 'dress & frock', stock: 87 },
    ],
  },
  {
    icon: '/images/icons/shoes.svg', alt: 'footwear', label: 'Footwear',
    items: [
      { name: 'Sports', stock: 45 },
      { name: 'Formal', stock: 75 },
      { name: 'Casual', stock: 35 },
      { name: 'Safety Shoes', stock: 26 },
    ],
  },
  {
    icon: '/images/icons/jewelry.svg', alt: 'jewelry', label: 'Jewelry',
    items: [
      { name: 'Earrings', stock: 46 },
      { name: 'Couple Rings', stock: 73 },
      { name: 'Necklace', stock: 61 },
    ],
  },
  {
    icon: '/images/icons/perfume.svg', alt: 'perfume', label: 'Perfume',
    items: [
      { name: 'Clothes Perfume', stock: 12, suffix: ' pcs' },
      { name: 'Deodorant', stock: 60, suffix: ' pcs' },
      { name: 'jacket', stock: 50, suffix: ' pcs' },
      { name: 'dress & frock', stock: 87, suffix: ' pcs' },
    ],
  },
  {
    icon: '/images/icons/cosmetics.svg', alt: 'cosmetics', label: 'Cosmetics',
    items: [
      { name: 'Shampoo', stock: 68 },
      { name: 'Sunscreen', stock: 46 },
      { name: 'Body Wash', stock: 79 },
      { name: 'Makeup Kit', stock: 23 },
    ],
  },
  {
    icon: '/images/icons/glasses.svg', alt: 'glasses', label: 'Glasses',
    items: [
      { name: 'Sunglasses', stock: 50 },
      { name: 'Lenses', stock: 48 },
    ],
  },
  {
    icon: '/images/icons/bag.svg', alt: 'bags', label: 'Bags',
    items: [
      { name: 'Shopping Bag', stock: 62 },
      { name: 'Gym Backpack', stock: 35 },
      { name: 'Purse', stock: 80 },
      { name: 'Wallet', stock: 75 },
    ],
  },
];

const bestSellers = [
  { img: '/images/products/1.jpg', alt: 'baby fabric shoes', title: 'baby fabric shoes', stars: [true, true, true, true, true], price: '$4.00', oldPrice: '$5.00' },
  { img: '/images/products/2.jpg', alt: "men's hoodies t-shirt", title: "men's hoodies t-shirt", stars: [true, true, true, true, false], price: '$7.00', oldPrice: '$17.00', halfLast: true },
  { img: '/images/products/3.jpg', alt: 'girls t-shirt', title: 'girls t-shirt', stars: [true, true, true, true, false], price: '$3.00', oldPrice: '$5.00', halfLast: true },
  { img: '/images/products/4.jpg', alt: 'woolen hat for men', title: 'woolen hat for men', stars: [true, true, true, true, true], price: '$12.00', oldPrice: '$15.00' },
];

function AccordionItem({ item, isOpen, onToggle }) {
  return (
    <li className="sidebar-menu-category">
      <button
        className={`sidebar-accordion-menu${isOpen ? ' active' : ''}`}
        onClick={onToggle}
      >
        <div className="menu-title-flex">
          <img src={item.icon} alt={item.alt} width="20" height="20" className="menu-title-img" />
          <p className="menu-title">{item.label}</p>
        </div>
        <div>
          <ion-icon name="add-outline" className="add-icon"></ion-icon>
          <ion-icon name="remove-outline" className="remove-icon"></ion-icon>
        </div>
      </button>
      <ul className={`sidebar-submenu-category-list${isOpen ? ' active' : ''}`}>
        {item.items.map((sub) => (
          <li className="sidebar-submenu-category" key={sub.name}>
            <a href="#" className="sidebar-submenu-title">
              <p className="product-name">{sub.name}</p>
              <data value={sub.stock} className="stock" title="Available Stock">
                {sub.stock}{sub.suffix || ''}
              </data>
            </a>
          </li>
        ))}
      </ul>
    </li>
  );
}

export default function Sidebar({ isOpen, onClose }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <div className={`sidebar has-scrollbar${isOpen ? ' active' : ''}`}>
      <div className="sidebar-category">
        <div className="sidebar-top">
          <h2 className="sidebar-title">Category</h2>
          <button className="sidebar-close-btn" onClick={onClose}>
            <ion-icon name="close-outline"></ion-icon>
          </button>
        </div>
        <ul className="sidebar-menu-category-list">
          {sidebarCategories.map((cat, i) => (
            <AccordionItem
              key={cat.label}
              item={cat}
              isOpen={openIndex === i}
              onToggle={() => toggle(i)}
            />
          ))}
        </ul>
      </div>

      <div className="product-showcase">
        <h3 className="showcase-heading">best sellers</h3>
        <div className="showcase-wrapper">
          <div className="showcase-container">
            {bestSellers.map((p, i) => (
              <div className="showcase" key={i}>
                <a href="#" className="showcase-img-box">
                  <img src={p.img} alt={p.alt} width="75" height="75" className="showcase-img" />
                </a>
                <div className="showcase-content">
                  <a href="#"><h4 className="showcase-title">{p.title}</h4></a>
                  <div className="showcase-rating">
                    {p.stars.map((full, si) => {
                      const isLast = si === p.stars.length - 1;
                      const iconName = full ? 'star' : (isLast && p.halfLast ? 'star-half-outline' : 'star-outline');
                      return <ion-icon key={si} name={iconName}></ion-icon>;
                    })}
                  </div>
                  <div className="price-box">
                    <del>{p.oldPrice}</del>
                    <p className="price">{p.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
