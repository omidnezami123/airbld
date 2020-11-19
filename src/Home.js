import React from "react";
import logo from "./pictures/pomegranate.svg";
import omid from "./pictures/moi.png";

export default function Home() {
  return (
    <div>
      <title>AirBLD - Home</title>
      {/* Navigation */}
      <nav
        className="navbar navbar-expand-lg navbar-dark fixed-top"
        id="mainNav"
      >
        <div className="container">
          <a className="navbar-brand js-scroll-trigger" href="#page-top">
            <img
              src={logo}
              alt="AirBLD Logo"
              className="navbar-brand js-scroll-trigger"
              href="#page-top"
              id="logo"
              width="25%"
            />
          </a>
          <button
            className="navbar-toggler navbar-toggler-right"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            Menu
            <i className="fas fa-bars" />
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav text-uppercase ml-auto">
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#Mission">
                  Who are we?
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#portfolio">
                  Partners
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#team">
                  Team
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="/orders">
                  See Deals
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="/myorders">
                  My Orders
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* Header */}
      <header className="masthead" id="page-top">
        <div
          style={{
            backgroundImage:
              'url("https://milady.cengage.com/wp-content/uploads/2018/11/11.18.16_Educator-Tip_Is-this-a-Coffee-Shop-or-a-Classroom.jpg")',
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundAttachment: "fixed",
          }}
        >
          <div className="container">
            <div className="intro-text">
              <div className="intro-lead-in">Swoop up your deal with</div>
              <div className="intro-heading text-uppercase">AirBLD </div>
              <a
                className="btn btn-primary btn-xl text-uppercase js-scroll-trigger"
                href="/orders"
              >
                See deals
              </a>
            </div>
          </div>
        </div>
      </header>
      {/* Mission */}
      <section className="page-section" id="Mission">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading">
                AirBLD is a web platform that gets you 50% off local restaurants
                before closing.
              </h2>
              <h3 className="section-subheading text-muted">
                We have 3 main goals at AirBLD:
              </h3>
            </div>
          </div>
          <div className="row text-center">
            <div className="col-md-4">
              <span className="fa-stack fa-4x">
                <i className="fas fa-circle fa-stack-2x text-primary" />
                <i className="fas fa-shopping-cart fa-stack-1x fa-inverse" />
              </span>
              <h4 className="service-heading">Reduce Food Waste</h4>
              <p className="text-muted">
                According to an analysis by the Green Restaurant Association, a
                single restaurant can produce approximately 25,000 to 75,000
                pounds of food waste in one year.
              </p>
            </div>
            <div className="col-md-4">
              <span className="fa-stack fa-4x">
                <i className="fas fa-circle fa-stack-2x text-primary" />
                <i className="fas fa-laptop fa-stack-1x fa-inverse" />
              </span>
              <h4 className="service-heading">
                Provide customers with great deals
              </h4>
              <p className="text-muted">
                We all love a good deal! We get you food from your favorite
                restaurants without breaking the bank{" "}
              </p>
            </div>
            <div className="col-md-4">
              <span className="fa-stack fa-4x">
                <i className="fas fa-circle fa-stack-2x text-primary" />
                <i className="fas fa-lock fa-stack-1x fa-inverse" />
              </span>
              <h4 className="service-heading">
                Help restaurants reach their full potential{" "}
              </h4>
              <p className="text-muted">
                Restaurant food waste amounts to $2 Billion in lost profits a
                year
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Portfolio Grid */}
      <section className="bg-light page-section" id="portfolio">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading text-uppercase">Our Partners</h2>
              <h3 className="section-subheading text-muted">
                We have great restaurants in the AirBLD family
              </h3>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 col-sm-6 portfolio-item">
              <a
                className="portfolio-link"
                data-toggle="modal"
                href="#portfolioModal1"
              >
                <div className="portfolio-hover">
                  <div className="portfolio-hover-content">
                    <i className="fas fa-plus fa-3x" />
                  </div>
                </div>
                <img
                  width="440"
                  height="400"
                  className="img-fluid"
                  src="https://www.discoverlosangeles.com/sites/default/files/styles/hero/public/business/caf%C3%A9-dulce-usc-village/h_2000-crm-la-cafe-dulce-usc-village-donut-case-161b26ac5056a36_161b27dc-5056-a36f-23b05b849527769b.jpg?itok=GeFq-jLD"
                  alt=""
                />
              </a>
              <div className="portfolio-caption">
                <h4>Dulce</h4>
                <p className="text-muted">USC Village</p>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 portfolio-item">
              <a
                className="portfolio-link"
                data-toggle="modal"
                href="#portfolioModal2"
              >
                <div className="portfolio-hover">
                  <div className="portfolio-hover-content">
                    <i className="fas fa-plus fa-3x" />
                  </div>
                </div>
                <img
                  className="img-fluid"
                  src="https://static.wixstatic.com/media/f08c11_1bc15b905679420c846594bfdd8c7259~mv2_d_2964_1688_s_2.jpg/v1/crop/x_1173,y_0,w_1688,h_1688/fill/w_990,h_990,al_c,q_85,usm_0.66_1.00_0.01/sotw3.webp"
                  alt=""
                />
              </a>
              <div className="portfolio-caption">
                <h4>Nature's Brew</h4>
                <p className="text-muted">Union Ave</p>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 portfolio-item">
              <a
                className="portfolio-link"
                data-toggle="modal"
                href="#portfolioModal3"
              >
                <div className="portfolio-hover">
                  <div className="portfolio-hover-content">
                    <i className="fas fa-plus fa-3x" />
                  </div>
                </div>
                <img
                  className="img-fluid"
                  src="https://www.shopirvinecompany.com/media/5527/image.jpg"
                  alt=""
                />
              </a>
              <div className="portfolio-caption">
                <h4>Cava</h4>
                <p className="text-muted">USC village</p>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 portfolio-item">
              <a
                className="portfolio-link"
                data-toggle="modal"
                href="#portfolioModal4"
              >
                <div className="portfolio-hover">
                  <div className="portfolio-hover-content">
                    <i className="fas fa-plus fa-3x" />
                  </div>
                </div>
                <img
                  className="img-fluid"
                  src="https://www.laweekly.com/wp-content/uploads/2019/05/birdies-yelp-chicken-sandwich.jpg"
                  alt=""
                />
              </a>
              <div className="portfolio-caption">
                <h4>Honeybird</h4>
                <p className="text-muted">USC Village</p>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 portfolio-item">
              <a
                className="portfolio-link"
                data-toggle="modal"
                href="#portfolioModal5"
              >
                <div className="portfolio-hover">
                  <div className="portfolio-hover-content">
                    <i className="fas fa-plus fa-3x" />
                  </div>
                </div>
                <img
                  className="img-fluid"
                  src="https://www.ambitiouskitchen.com/wp-content/uploads/2019/11/Autumn-Butternut-Squash-Brussels-Sprouts-Caesar-Salad-5-725x725.jpg"
                  alt=""
                />
              </a>
              <div className="portfolio-caption">
                <h4>GreenLeaf</h4>
                <p className="text-muted">USC Village</p>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 portfolio-item">
              <a
                className="portfolio-link"
                data-toggle="modal"
                href="#portfolioModal6"
              >
                <div className="portfolio-hover">
                  <div className="portfolio-hover-content">
                    <i className="fas fa-plus fa-3x" />
                  </div>
                </div>
                <img
                  className="img-fluid"
                  src="https://asweatlife.com/wp-content/uploads/2017/06/aSweatLife_Graze_Full.jpg"
                  alt=""
                />
              </a>
              <div className="portfolio-caption">
                <h4>Sunlife Organics</h4>
                <p className="text-muted">USC Village</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Team */}
      <section className="bg-light page-section" id="team">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading text-uppercase">
                Our Amazing Team
              </h2>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-4"></div>
            <div className="col-sm-4">
              <div className="team-member">
                <img src={omid} alt="" />
                <h4>Omid Nezami</h4>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Portfolio Modals */}
      {/* Modal 1 */}
      <div
        className="portfolio-modal modal fade"
        id="portfolioModal1"
        tabIndex={-1}
        role="dialog"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="close-modal" data-dismiss="modal">
              <div className="lr">
                <div className="rl" />
              </div>
            </div>
            <div className="container">
              <div className="row">
                <div className="col-lg-8 mx-auto">
                  <div className="modal-body">
                    {/* Project Details Go Here */}
                    <h2 className="text-uppercase">About DULCE</h2>
                    <p className="item-intro text-muted">
                      Located in the USC Village
                    </p>
                    {/* <img
                      className="img-fluid d-block mx-auto"
                      src="img/portfolio/01-full.jpg"
                      alt=""
                    /> */}
                    <p>
                      We serve the finest specialty coffees &amp; teas, along
                      with fresh salads, sandwiches and baked goods made
                      in-house daily! Our signature items include DULCE lattes,
                      Vietnamese style iced coffee, blueberry matcha lattes,
                      bacon donuts, and roti buns.
                    </p>
                    <ul className="list-inline">
                      <li>
                        Grab great deals on pastries, coffee, sandwiches and
                        more!
                      </li>
                    </ul>
                    <button
                      className="btn btn-primary"
                      data-dismiss="modal"
                      type="button"
                    >
                      <i className="fas fa-times" />
                      Close{" "}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Modal restaurantName="DULCE" description="" slogan="" /> */}
      {/* Modal 2 */}
      <div
        className="portfolio-modal modal fade"
        id="portfolioModal2"
        tabIndex={-1}
        role="dialog"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="close-modal" data-dismiss="modal">
              <div className="lr">
                <div className="rl" />
              </div>
            </div>
            <div className="container">
              <div className="row">
                <div className="col-lg-8 mx-auto">
                  <div className="modal-body">
                    {/* Project Details Go Here */}
                    <h2 className="text-uppercase">About Nature's Brew</h2>
                    <p className="item-intro text-muted">
                      Address: 2316 S Union Ave, Los Angeles, CA 90007
                    </p>
                    {/* <img
                      className="img-fluid d-block mx-auto"
                      src="img/portfolio/02-full.jpg"
                      alt=""
                    /> */}
                    <p>
                      Counter-serve coffeehouse with juices, light fare &amp;
                      pastries in a high-ceilinged, industrial space
                    </p>
                    <ul className="list-inline">
                      <li>
                        Grab pastries, sandwiches and coffee at a discount!
                      </li>
                    </ul>
                    <button
                      className="btn btn-primary"
                      data-dismiss="modal"
                      type="button"
                    >
                      <i className="fas fa-times" />
                      Close{" "}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Modal 3 */}
      <div
        className="portfolio-modal modal fade"
        id="portfolioModal3"
        tabIndex={-1}
        role="dialog"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="close-modal" data-dismiss="modal">
              <div className="lr">
                <div className="rl" />
              </div>
            </div>
            <div className="container">
              <div className="row">
                <div className="col-lg-8 mx-auto">
                  <div className="modal-body">
                    {/* Project Details Go Here */}
                    <h2 className="text-uppercase">About Cava</h2>
                    <p className="item-intro text-muted">
                      Located in USC Village
                    </p>
                    {/* <img
                      className="img-fluid d-block mx-auto"
                      src="img/portfolio/03-full.jpg"
                      alt=""
                    /> */}
                    <p>
                      CAVA focuses on real food with vibrant ingredients, gutsy
                      flavors, and a whole lot of variety. Offering up a menu of
                      create-your-own grain bowls, salads, and pitas, we empower
                      all eaters to create the meal they’ve been craving and dig
                      right in.
                    </p>
                    <ul className="list-inline">
                      <li>Grab bowls at a discount</li>
                    </ul>
                    <button
                      className="btn btn-primary"
                      data-dismiss="modal"
                      type="button"
                    >
                      <i className="fas fa-times" />
                      Close{" "}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Modal 4 */}
      <div
        className="portfolio-modal modal fade"
        id="portfolioModal4"
        tabIndex={-1}
        role="dialog"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="close-modal" data-dismiss="modal">
              <div className="lr">
                <div className="rl" />
              </div>
            </div>
            <div className="container">
              <div className="row">
                <div className="col-lg-8 mx-auto">
                  <div className="modal-body">
                    {/* Project Details Go Here */}
                    <h2 className="text-uppercase">About Honeybird</h2>
                    <p className="item-intro text-muted">
                      Located in the USC Village
                    </p>
                    {/* <img
                      className="img-fluid d-block mx-auto"
                      src="img/portfolio/04-full.jpg"
                      alt=""
                    /> */}
                    <p>
                      Inspired by the Southern table, Honeybird serves up
                      handcrafted comfort food featuring our golden fried
                      chicken. Serving classics like garlic mashed potatoes and
                      our homemade pies, we strive to provide a little touch of
                      Southern hospitality!
                    </p>
                    <ul className="list-inline">
                      <li>Grab amazing fried chicken at a disocunt!</li>
                    </ul>
                    <button
                      className="btn btn-primary"
                      data-dismiss="modal"
                      type="button"
                    >
                      <i className="fas fa-times" />
                      Close{" "}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Modal 5 */}
      <div
        className="portfolio-modal modal fade"
        id="portfolioModal5"
        tabIndex={-1}
        role="dialog"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="close-modal" data-dismiss="modal">
              <div className="lr">
                <div className="rl" />
              </div>
            </div>
            <div className="container">
              <div className="row">
                <div className="col-lg-8 mx-auto">
                  <div className="modal-body">
                    {/* Project Details Go Here */}
                    <h2 className="text-uppercase">
                      About Greenleaf Gourmet ChopShop
                    </h2>
                    <p className="item-intro text-muted">
                      Located in the USC Village
                    </p>
                    {/* <img
                      className="img-fluid d-block mx-auto"
                      src="img/portfolio/05-full.jpg"
                      alt=""
                    /> */}
                    <p>
                      Located in the heart of USC Village, Greenleaf Gourmet
                      ChopShop is an award-winning fast casual restaurant
                      serving up local California cuisine and craft cocktails
                      made from the freshest, premium ingredients. We serve
                      lunch and dinner daily, happy hours M-F and weekend
                      brunch.
                    </p>
                    <ul className="list-inline">
                      <li>Grab salads and sandwiches at a discount! </li>
                    </ul>
                    <button
                      className="btn btn-primary"
                      data-dismiss="modal"
                      type="button"
                    >
                      <i className="fas fa-times" />
                      Close{" "}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Modal 6 */}
      <div
        className="portfolio-modal modal fade"
        id="portfolioModal6"
        tabIndex={-1}
        role="dialog"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="close-modal" data-dismiss="modal">
              <div className="lr">
                <div className="rl" />
              </div>
            </div>
            <div className="container">
              <div className="row">
                <div className="col-lg-8 mx-auto">
                  <div className="modal-body">
                    {/* Project Details Go Here */}
                    <h2 className="text-uppercase">About SunLife Organics </h2>
                    <p className="item-intro text-muted">
                      Located in USC Village
                    </p>
                    {/* <img
                      className="img-fluid d-block mx-auto"
                      src="img/portfolio/06-full.jpg"
                      alt=""
                    /> */}
                    <p>
                      At SunLife Organics, we only use the highest quality
                      organic ingredients in our superfood smoothies, bowls,
                      juices, coffee and other yummy juice bar offerings. We
                      also offer grab and go food and drink options and retail
                      products that are in line with a healthy, happy lifestyle.
                    </p>
                    <ul className="list-inline">
                      <li>
                        Order acai bowls, smoothies, and other snacks at a
                        discount
                      </li>
                    </ul>
                    <button
                      className="btn btn-primary"
                      data-dismiss="modal"
                      type="button"
                    >
                      <i className="fas fa-times" />
                      Close{" "}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      Logo made by{" "}
      <a href="http://www.freepik.com/" title="Freepik">
        Freepik
      </a>{" "}
      from{" "}
      <a href="https://www.flaticon.com/" title="Flaticon">
        {" "}
        www.flaticon.com
      </a>
      {/* Bootstrap core JavaScript */}
      {/* Plugin JavaScript */}
      {/* Contact form JavaScript */}
      {/* Custom scripts for this template */}
    </div>
  );
}
