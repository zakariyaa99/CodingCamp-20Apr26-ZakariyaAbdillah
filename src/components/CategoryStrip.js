const categories = [
  { img: '/images/icons/dress.svg', alt: 'dress & frock', title: 'Dress & frock', count: 53 },
  { img: '/images/icons/coat.svg', alt: 'winter wear', title: 'Winter wear', count: 58 },
  { img: '/images/icons/glasses.svg', alt: 'glasses & lens', title: 'Glasses & lens', count: 68 },
  { img: '/images/icons/shorts.svg', alt: 'shorts & jeans', title: 'Shorts & jeans', count: 84 },
  { img: '/images/icons/tee.svg', alt: 't-shirts', title: 'T-shirts', count: 35 },
  { img: '/images/icons/jacket.svg', alt: 'jacket', title: 'Jacket', count: 16 },
  { img: '/images/icons/watch.svg', alt: 'watch', title: 'Watch', count: 27 },
  { img: '/images/icons/hat.svg', alt: 'hat & caps', title: 'Hat & caps', count: 39 },
];

export default function CategoryStrip() {
  return (
    <div className="category">
      <div className="container">
        <div className="category-item-container has-scrollbar">
          {categories.map((cat) => (
            <div className="category-item" key={cat.title}>
              <div className="category-img-box">
                <img src={cat.img} alt={cat.alt} width="30" />
              </div>
              <div className="category-content-box">
                <div className="category-content-flex">
                  <h3 className="category-item-title">{cat.title}</h3>
                  <p className="category-item-amount">({cat.count})</p>
                </div>
                <a href="#" className="category-btn">Show all</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
