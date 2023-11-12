import "../assets/styles/pages/_home.scss";
import img1 from "../assets/images/img1.jpeg";
import img2 from "../assets/images/img2.jpeg";
import product from "../assets/images/product1.jpeg";
import product2 from "../assets/images/product2.jpeg";
import product3 from "../assets/images/product3.jpeg";
import { useNavigate } from "react-router-dom";
export default function Home() {
  const navigete = useNavigate();

  return (
    <div className="home">
      <div className="section1">
        <div className="text1">
          <h1>Design Your Comfort Zone </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            iure quasi odit tenetur unde officiis repudiandae quod deserunt quia
            eum?
          </p>
          <button>Shop Now</button>
        </div>
        <div className="images">
          <div className="div1"></div>
          <img className="img1" src={img1} alt="" />
          <img className="img2" src={img2} alt="" />
        </div>
      </div>
      <div className="section2">
        <h2>Featured Products</h2>
        <div className="prodd">
          <div className="products3">
            <div className="foto1">
              <img className="foto3-1" src={product} alt="" />
              <div className="texts3">
                <p>Entertainment Center</p>
                <p>$599.99</p>
              </div>
            </div>
          </div>
          <div className="products3">
            <div className="foto1">
              <img className="foto3-1" src={product2} alt="" />
              <div className="texts3">
                <p>High-Back Bench</p>
                <p>$399.99</p>
              </div>
            </div>
          </div>
          <div className="products3">
            <div className="foto1">
              <img className="foto3-1" src={product3} alt="" />
              <div className="texts3">
                <p>Modern Bookshelf</p>
                <p>$319.99</p>
              </div>
            </div>
          </div>
        </div>
        <div className="btnnn">
          <button
            className="btn22"
            onClick={() => {
              navigete("/products");
            }}
          >
            All Products
          </button>
        </div>
      </div>

      <div className="section3">
        <div className="textsss">
          <h2>Custom Furniture Built Only For You</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
            quisquam saepe id reiciendis sunt, repudiandae libero amet rem quia
            quod?
          </p>
        </div>
        <div className="boxes">
          <div className="box">
            <div></div>
            <h3>Mission</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum
              velit autem unde numquam nisi
            </p>
          </div>
          <div className="box">
            <div></div>
            <h3>Mission</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum
              velit autem unde numquam nisi
            </p>
          </div>
          <div className="box">
            <div></div>
            <h3>Mission</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum
              velit autem unde numquam nisi
            </p>
          </div>
        </div>
      </div>

      <div className="section4">
        <div className="teksts">
          <h2>Join our newsletter and get 20% off</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
            veniam repudiandae vel ab id, fuga praesentium nobis natus ipsam
            vero?
          </p>
        </div>
        <div className="input">
          <input type="text" placeholder="Enter Email" />
          <button>Subscribe</button>
        </div>
      </div>
    </div>
  );
}
