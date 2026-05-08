import "./App.css";

function App() {
  const phone = "(903) 663-9992";

  const menu = [
    {
      title: "Nail Enhancements",
      items: [
        ["Nail Soak Off + Manicure", "$40"],
        ["Nail Soak Off Only", "$30"],
        ["Dip & Acrylic Pink & White Set", "New $55 / Fill $50"],
        ["Clear Powder with Regular Polish", "New $40 / Fill $30"],
        ["Gel-X / Sculpted Gel Builder", "New $60 / Fill $50"],
        ["Manicure + Gel Polish", "$40"],
        ["Gel Polish Change Hands or Toes", "$25"],
      ],
    },
    {
      title: "Acrylic Toes Set",
      items: [
        ["Clear Powder", "New $45 / Fill $40"],
        ["Color Powder", "New $55 / Fill $40"],
      ],
    },
    {
      title: "Kid’s Menu",
      subtitle: "10 years & under",
      items: [
        ["Pedicure Gel Polish Only", "$35"],
        ["Polish Change Gel Only Hands/Toes", "$15"],
        ["Express Pedicure", "$30"],
      ],
    },
    {
      title: "Design & Add-ons",
      items: [
        ["Design", "$10 & Up"],
        ["Shapes or Lengths", "$5"],
        ["Gel Polish on Nails or Toes", "$25"],
      ],
    },
    {
      title: "Facial",
      note: "Deep cleanse, exfoliation, extraction, and hydration using advanced technology to leave your skin smooth, clean, and glowing.",
      items: [["Hydro Facial", "$85"]],
    },
    {
      title: "Pedicures",
      items: [
        ["Fresh Organic Aloe Vera Pedicure", "$60"],
        ["Olive Sensation Organic Cucumber Pedicure", "$55"],
        ["Collagen Volcano Pedicure", "$60"],
        ["Fresh Organic Avocado Pedicure", "$60"],
        ["Organic Lavender Pedicure", "$55"],
        ["Organic Pearl Pedicure", "$55"],
        ["Rose Spa Organic Mango Pedicure", "$55"],
        ["Deluxe Lavender Pedicure", "$40"],
        ["Organic Milk & Honey Pedicure", "$55"],
        ["Organic Green Tea Pedicure", "$55"],
        ["Regular Pedicure", "$35"],
        ["Allure Signature Pedicure", "$50"],
        ["Signature Luxury Pedicure", "$70"],
      ],
    },
    {
      title: "Pedicure Add-ons",
      items: [
        ["Gel Polish", "$15"],
        ["Gel Removal", "$5"],
        ["Neck & Shoulder Massage", "$15"],
      ],
    },
    {
      title: "Eyelash Extension",
      items: [
        ["Classic", "New Set $125 / Fill $75"],
        ["Hybrid", "New Set $150 / Fill $85"],
        ["Volume", "New Set $175 / Fill $105"],
      ],
    },
    {
      title: "Waxing",
      items: [
        ["Eyebrows", "$15"],
        ["Lips", "$10"],
        ["Chin", "$15 & Up"],
        ["Full Face", "$50"],
        ["Underarms", "$22 & Up"],
        ["Half Arms", "$37 & Up"],
        ["Full Arms", "$47 & Up"],
        ["Back", "$50 & Up"],
        ["Chest", "$47 & Up"],
        ["Half Legs", "$45 & Up"],
        ["Full Legs", "$70 & Up"],
        ["Eyebrow / Eyelash Tinting", "$25"],
        ["Eyelash Lift", "$50"],
      ],
    },
  ];

  const gallery = [
    "Nails1.jfif",
    "Nails2.jfif",
    "Nails3.jfif",
    "Nails4.jfif",
  ];

  const reasons = [
    "Luxury and relaxing salon atmosphere",
    "Professional nail artists",
    "Clean and sanitized tools",
    "Modern nail designs and trends",
    "Premium spa products",
    "Friendly customer experience",
  ];

  return (
    <div className="website">

      <section className="hero" id="home">
        <nav className="navbar">
          <div className="logo">
            ALLURE
            <span>modern nails spa</span>
          </div>

          <div className="navLinks">
            <a href="#about">About</a>
            <a href="#menu">Menu</a>
            <a href="#gallery">Gallery</a>
            <a href="#location">Location</a>
            <a href="#contact">Contact</a>
          </div>

          <a className="phoneButton" href="tel:+19036639992">
            {phone}
          </a>
        </nav>

        <div className="heroContent">
          <p className="eyebrow">Luxury Beauty Salon in Longview, Texas</p>

          <h1>
            Modern Nails.
            <br />
            Luxury Feel.
          </h1>

          <p className="heroText">
            Premium nails, pedicures, lashes, waxing, facials, and spa treatments
            designed for a clean, elegant, and relaxing beauty experience.
          </p>

          <div className="heroButtons">
            <a href="tel:+19036639992" className="goldButton">
              Call Now
            </a>

            <a href="#menu" className="outlineButton">
              View Menu
            </a>
          </div>
        </div>
      </section>

      <section className="aboutSection" id="about">
        <p className="eyebrow center">About Allure</p>
        <h2>Luxury Meets Comfort</h2>

        <div className="aboutBox">
          <div className="aboutText">
            <p>
              At Allure Modern Nails Spa, we believe beauty should feel relaxing,
              elegant, and personal. Our salon was created to bring a luxury
              experience to Longview with modern nail artistry, premium spa care,
              and a welcoming atmosphere.
            </p>

            <p>
              Whether you are visiting for a quick manicure, a fresh nail design,
              or a full spa treatment, our goal is to make every client feel
              confident, refreshed, and cared for.
            </p>
          </div>

          <div className="aboutImage">
            <img src="/images/Tools1.jfif" alt="Luxury salon tools" />
          </div>
        </div>
      </section>

      <section className="whySection">
        <p className="eyebrow center">Why Choose Us</p>
        <h2>The Allure Experience</h2>

        <div className="whyGrid">
          {reasons.map((reason, index) => (
            <div className="whyCard" key={index}>
              <div className="goldDot"></div>
              <p>{reason}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="menuSection" id="menu">
        <p className="eyebrow center">Our Menu</p>
        <h2>Services & Prices</h2>

        <div className="menuGrid">
          {menu.map((section, index) => (
            <div className="menuCard" key={index}>
              <h3>{section.title}</h3>

              {section.subtitle && (
                <p className="menuSubtitle">{section.subtitle}</p>
              )}

              {section.items.map((item, i) => (
                <div className="menuItem" key={i}>
                  <span>{item[0]}</span>
                  <span>{item[1]}</span>
                </div>
              ))}

              {section.note && <p className="menuNote">{section.note}</p>}
            </div>
          ))}
        </div>
      </section>

      <section className="gallerySection" id="gallery">
        <p className="eyebrow center">Gallery</p>
        <h2>Gallery</h2>

        <div className="gallery">
          {gallery.map((image, index) => (
            <div className="galleryCard" key={index}>
              <img src={`/images/${image}`} alt="Allure nail design" />
            </div>
          ))}
        </div>
      </section>

      <section className="locationSection" id="location">
        <p className="eyebrow center">Find Us</p>
        <h2>Location</h2>

        <div className="mapBox">
          <iframe
            title="Allure Modern Nails Spa Map"
            src="https://www.google.com/maps?q=Allure%20Modern%20Nails%20Spa%20Longview%20TX&output=embed"
            loading="lazy"
          ></iframe>
        </div>
      </section>

      <section className="contactSection" id="contact">
        <p className="eyebrow center">Contact Us</p>
        <h2>Book Your Appointment</h2>

        <div className="contactBox">
          <p>
            <a href="tel:+19036639992">{phone}</a>
          </p>

          <p>Longview, Texas</p>
          <p>Monday - Saturday: 11 AM - 8 PM</p>
          <p>Sunday: 12 PM - 6 PM</p>
        </div>
      </section>

    </div>
  );
}

export default App;