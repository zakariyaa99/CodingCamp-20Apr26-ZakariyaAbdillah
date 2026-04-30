'use client';

import { useState } from 'react';

const mobileMenuCategories = [
  {
    label: "Men's",
    items: ['Shirt', 'Shorts & Jeans', 'Safety Shoes', 'Wallet'],
  },
  {
    label: "Women's",
    items: ['Dress & Frock', 'Earrings', 'Necklace', 'Makeup Kit'],
  },
  {
    label: 'Jewelry',
    items: ['Earrings', 'Couple Rings', 'Necklace', 'Bracelets'],
  },
  {
    label: 'Perfume',
    items: ['Clothes Perfume', 'Deodorant', 'Flower Fragrance', 'Air Freshener'],
  },
];

function MobileAccordionItem({ label, items, isOpen, onToggle }) {
  return (
    <li className="menu-category">
      <button className={`accordion-menu${isOpen ? ' active' : ''}`} onClick={onToggle}>
        <p className="menu-title">{label}</p>
        <div>
          <ion-icon name="add-outline" className="add-icon"></ion-icon>
          <ion-icon name="remove-outline" className="remove-icon"></ion-icon>
        </div>
      </button>
      <ul className={`submenu-category-list${isOpen ? ' active' : ''}`}>
        {items.map((item) => (
          <li className="submenu-category" key={item}>
            <a href="#" className="submenu-title">{item}</a>
          </li>
        ))}
      </ul>
    </li>
  );
}

export default function Header({ onMenuOpenForSidebar }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openAccordion, setOpenAccordion] = useState(null);
  const [langOpen, setLangOpen] = useState(false);
  const [currOpen, setCurrOpen] = useState(false);

  const openMobile = () => setMobileMenuOpen(true);
  const closeMobile = () => setMobileMenuOpen(false);

  const toggleAccordion = (i) => setOpenAccordion(openAccordion === i ? null : i);

  return (
    <>
      {/* Overlay for mobile menu */}
      {mobileMenuOpen && (
        <div className="overlay active" onClick={closeMobile}></div>
      )}

      <header>
        {/* HEADER TOP */}
        <div className="header-top">
          <div className="container">
            <ul className="header-social-container">
              {['logo-facebook', 'logo-twitter', 'logo-instagram', 'logo-linkedin'].map((icon) => (
                <li key={icon}>
                  <a href="#" className="social-link">
                    <ion-icon name={icon}></ion-icon>
                  </a>
                </li>
              ))}
            </ul>
            <div className="header-alert-news">
              <p><b>Free Shipping</b> This Week Order Over - $55</p>
            </div>
            <div className="header-top-actions">
              <select name="currency">
                <option value="usd">USD $</option>
                <option value="eur">EUR €</option>
              </select>
              <select name="language">
                <option value="en-US">English</option>
                <option value="es-ES">Español</option>
                <option value="fr">Français</option>
              </select>
            </div>
          </div>
        </div>

        {/* HEADER MAIN */}
        <div className="header-main">
          <div className="container">
            <a href="#" className="header-logo">
              <img src="/images/logo/logo.svg" alt="Anon's logo" width="120" height="36" />
            </a>
            <div className="header-search-container">
              <input type="search" name="search" className="search-field" placeholder="Enter your product name..." />
              <button className="search-btn">
                <ion-icon name="search-outline"></ion-icon>
              </button>
            </div>
            <div className="header-user-actions">
              <button className="action-btn">
                <ion-icon name="person-outline"></ion-icon>
              </button>
              <button className="action-btn">
                <ion-icon name="heart-outline"></ion-icon>
                <span className="count">0</span>
              </button>
              <button className="action-btn">
                <ion-icon name="bag-handle-outline"></ion-icon>
                <span className="count">0</span>
              </button>
            </div>
          </div>
        </div>

        {/* DESKTOP NAV */}
        <nav className="desktop-navigation-menu">
          <div className="container">
            <ul className="desktop-menu-category-list">

              <li className="menu-category">
                <a href="#" className="menu-title">Home</a>
              </li>

              <li className="menu-category">
                <a href="#" className="menu-title">Categories</a>
                <div className="dropdown-panel">
                  <ul className="dropdown-panel-list">
                    <li className="menu-title"><a href="#">Electronics</a></li>
                    {['Desktop', 'Laptop', 'Camera', 'Tablet', 'Headphone'].map(i => (
                      <li className="panel-list-item" key={i}><a href="#">{i}</a></li>
                    ))}
                    <li className="panel-list-item">
                      <a href="#"><img src="/images/electronics-banner-1.jpg" alt="headphone collection" width="250" height="119" /></a>
                    </li>
                  </ul>
                  <ul className="dropdown-panel-list">
                    <li className="menu-title"><a href="#">Men&apos;s</a></li>
                    {['Formal', 'Casual', 'Sports', 'Jacket', 'Sunglasses'].map(i => (
                      <li className="panel-list-item" key={i}><a href="#">{i}</a></li>
                    ))}
                    <li className="panel-list-item">
                      <a href="#"><img src="/images/mens-banner.jpg" alt="men's fashion" width="250" height="119" /></a>
                    </li>
                  </ul>
                  <ul className="dropdown-panel-list">
                    <li className="menu-title"><a href="#">Women&apos;s</a></li>
                    {['Formal', 'Casual', 'Perfume', 'Cosmetics', 'Bags'].map(i => (
                      <li className="panel-list-item" key={i}><a href="#">{i}</a></li>
                    ))}
                    <li className="panel-list-item">
                      <a href="#"><img src="/images/womens-banner.jpg" alt="women's fashion" width="250" height="119" /></a>
                    </li>
                  </ul>
                  <ul className="dropdown-panel-list">
                    <li className="menu-title"><a href="#">Electronics</a></li>
                    {['Smart Watch', 'Smart TV', 'Keyboard', 'Mouse', 'Microphone'].map(i => (
                      <li className="panel-list-item" key={i}><a href="#">{i}</a></li>
                    ))}
                    <li className="panel-list-item">
                      <a href="#"><img src="/images/electronics-banner-2.jpg" alt="mouse collection" width="250" height="119" /></a>
                    </li>
                  </ul>
                </div>
              </li>

              <li className="menu-category">
                <a href="#" className="menu-title">Men&apos;s</a>
                <ul className="dropdown-list">
                  {['Shirt', 'Shorts & Jeans', 'Safety Shoes', 'Wallet'].map(i => (
                    <li className="dropdown-item" key={i}><a href="#">{i}</a></li>
                  ))}
                </ul>
              </li>

              <li className="menu-category">
                <a href="#" className="menu-title">Women&apos;s</a>
                <ul className="dropdown-list">
                  {['Dress & Frock', 'Earrings', 'Necklace', 'Makeup Kit'].map(i => (
                    <li className="dropdown-item" key={i}><a href="#">{i}</a></li>
                  ))}
                </ul>
              </li>

              <li className="menu-category">
                <a href="#" className="menu-title">Jewelry</a>
                <ul className="dropdown-list">
                  {['Earrings', 'Couple Rings', 'Necklace', 'Bracelets'].map(i => (
                    <li className="dropdown-item" key={i}><a href="#">{i}</a></li>
                  ))}
                </ul>
              </li>

              <li className="menu-category">
                <a href="#" className="menu-title">Perfume</a>
                <ul className="dropdown-list">
                  {['Clothes Perfume', 'Deodorant', 'Flower Fragrance', 'Air Freshener'].map(i => (
                    <li className="dropdown-item" key={i}><a href="#">{i}</a></li>
                  ))}
                </ul>
              </li>

              <li className="menu-category">
                <a href="#" className="menu-title">Blog</a>
              </li>

              <li className="menu-category">
                <a href="#" className="menu-title">Hot Offers</a>
              </li>

            </ul>
          </div>
        </nav>

        {/* MOBILE BOTTOM NAV */}
        <div className="mobile-bottom-navigation">
          <button className="action-btn" onClick={openMobile}>
            <ion-icon name="menu-outline"></ion-icon>
          </button>
          <button className="action-btn">
            <ion-icon name="bag-handle-outline"></ion-icon>
            <span className="count">0</span>
          </button>
          <button className="action-btn">
            <ion-icon name="home-outline"></ion-icon>
          </button>
          <button className="action-btn">
            <ion-icon name="heart-outline"></ion-icon>
            <span className="count">0</span>
          </button>
          <button className="action-btn" onClick={openMobile}>
            <ion-icon name="grid-outline"></ion-icon>
          </button>
        </div>

        {/* MOBILE NAV MENU */}
        <nav className={`mobile-navigation-menu has-scrollbar${mobileMenuOpen ? ' active' : ''}`}>
          <div className="menu-top">
            <h2 className="menu-title">Menu</h2>
            <button className="menu-close-btn" onClick={closeMobile}>
              <ion-icon name="close-outline"></ion-icon>
            </button>
          </div>

          <ul className="mobile-menu-category-list">
            <li className="menu-category">
              <a href="#" className="menu-title">Home</a>
            </li>
            {mobileMenuCategories.map((cat, i) => (
              <MobileAccordionItem
                key={cat.label}
                label={cat.label}
                items={cat.items}
                isOpen={openAccordion === i}
                onToggle={() => toggleAccordion(i)}
              />
            ))}
            <li className="menu-category"><a href="#" className="menu-title">Blog</a></li>
            <li className="menu-category"><a href="#" className="menu-title">Hot Offers</a></li>
          </ul>

          <div className="menu-bottom">
            <ul className="menu-category-list">
              <li className="menu-category">
                <button className={`accordion-menu${langOpen ? ' active' : ''}`} onClick={() => setLangOpen(!langOpen)}>
                  <p className="menu-title">Language</p>
                  <ion-icon name="caret-back-outline" className="caret-back"></ion-icon>
                </button>
                <ul className={`submenu-category-list${langOpen ? ' active' : ''}`}>
                  {['English', 'Español', 'French'].map(l => (
                    <li className="submenu-category" key={l}><a href="#" className="submenu-title">{l}</a></li>
                  ))}
                </ul>
              </li>
              <li className="menu-category">
                <button className={`accordion-menu${currOpen ? ' active' : ''}`} onClick={() => setCurrOpen(!currOpen)}>
                  <p className="menu-title">Currency</p>
                  <ion-icon name="caret-back-outline" className="caret-back"></ion-icon>
                </button>
                <ul className={`submenu-category-list${currOpen ? ' active' : ''}`}>
                  {['USD $', 'EUR €'].map(c => (
                    <li className="submenu-category" key={c}><a href="#" className="submenu-title">{c}</a></li>
                  ))}
                </ul>
              </li>
            </ul>

            <ul className="menu-social-container">
              {['logo-facebook', 'logo-twitter', 'logo-instagram', 'logo-linkedin'].map((icon) => (
                <li key={icon}>
                  <a href="#" className="social-link">
                    <ion-icon name={icon}></ion-icon>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>

      </header>
    </>
  );
}
