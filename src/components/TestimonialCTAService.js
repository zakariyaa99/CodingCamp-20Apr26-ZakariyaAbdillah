const services = [
  { icon: 'boat-outline', title: 'Worldwide Delivery', desc: 'For Order Over $100' },
  { icon: 'rocket-outline', title: 'Next Day delivery', desc: 'UK Orders Only' },
  { icon: 'call-outline', title: 'Best Online Support', desc: 'Hours: 8AM - 11PM' },
  { icon: 'arrow-undo-outline', title: 'Return Policy', desc: 'Easy & Free Return' },
  { icon: 'ticket-outline', title: '30% money back', desc: 'For Order Over $100' },
];

export default function TestimonialCTAService() {
  return (
    <div>
      <div className="container">
        <div className="testimonials-box">

          {/* TESTIMONIAL */}
          <div className="testimonial">
            <h2 className="title">testimonial</h2>
            <div className="testimonial-card">
              <img src="/images/testimonial-1.jpg" alt="alan doe" className="testimonial-banner" width="80" height="80" />
              <p className="testimonial-name">Alan Doe</p>
              <p className="testimonial-title">CEO &amp; Founder Invision</p>
              <img src="/images/icons/quotes.svg" alt="quotation" className="quotation-img" width="26" />
              <p className="testimonial-desc">
                Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor dolor sit amet.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="cta-container">
            <img src="/images/cta-banner.jpg" alt="summer collection" className="cta-banner" />
            <a href="#" className="cta-content">
              <p className="discount">25% Discount</p>
              <h2 className="cta-title">Summer collection</h2>
              <p className="cta-text">Starting @ $10</p>
              <button className="cta-btn">Shop now</button>
            </a>
          </div>

          {/* SERVICE */}
          <div className="service">
            <h2 className="title">Our Services</h2>
            <div className="service-container">
              {services.map((s) => (
                <a href="#" className="service-item" key={s.title}>
                  <div className="service-icon">
                    <ion-icon name={s.icon}></ion-icon>
                  </div>
                  <div className="service-content">
                    <h3 className="service-title">{s.title}</h3>
                    <p className="service-desc">{s.desc}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
