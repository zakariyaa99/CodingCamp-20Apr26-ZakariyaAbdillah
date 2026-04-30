const posts = [
  {
    img: '/images/blog-1.jpg',
    alt: 'Clothes Retail KPIs 2021 Guide for Clothes Executives',
    category: 'Fashion',
    title: 'Clothes Retail KPIs 2021 Guide for Clothes Executives.',
    author: 'Mr Admin',
    date: '2022-04-06',
    dateDisplay: 'Apr 06, 2022',
  },
  {
    img: '/images/blog-2.jpg',
    alt: 'Curbside fashion Trends: How to Win the Pickup Battle.',
    category: 'Clothes',
    title: 'Curbside fashion Trends: How to Win the Pickup Battle.',
    author: 'Mr Robin',
    date: '2022-01-18',
    dateDisplay: 'Jan 18, 2022',
  },
  {
    img: '/images/blog-3.jpg',
    alt: 'EBT vendors: Claim Your Share of SNAP Online Revenue.',
    category: 'Shoes',
    title: 'EBT vendors: Claim Your Share of SNAP Online Revenue.',
    author: 'Mr Selsa',
    date: '2022-02-10',
    dateDisplay: 'Feb 10, 2022',
  },
  {
    img: '/images/blog-4.jpg',
    alt: 'Curbside fashion Trends: How to Win the Pickup Battle.',
    category: 'Electronics',
    title: 'Curbside fashion Trends: How to Win the Pickup Battle.',
    author: 'Mr Pawar',
    date: '2022-03-15',
    dateDisplay: 'Mar 15, 2022',
  },
];

export default function Blog() {
  return (
    <div className="blog">
      <div className="container">
        <div className="blog-container has-scrollbar">
          {posts.map((post, i) => (
            <div className="blog-card" key={i}>
              <a href="#">
                <img src={post.img} alt={post.alt} width="300" className="blog-banner" />
              </a>
              <div className="blog-content">
                <a href="#" className="blog-category">{post.category}</a>
                <a href="#">
                  <h3 className="blog-title">{post.title}</h3>
                </a>
                <p className="blog-meta">
                  By <cite>{post.author}</cite> / <time dateTime={post.date}>{post.dateDisplay}</time>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
