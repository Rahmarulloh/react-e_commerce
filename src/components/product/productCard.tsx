import { GlassIcon } from "assets/icons";
import { CartProp } from "utils/types";

export default function Cart({
  imgUrl,
  title,
  price,
  description,
  isGrid,
}: CartProp) {
  const stringPrice = `${price}`;
  let firstNumber = "";
  let suffixPrice = "";
  let prefixPrice = "";
  let fullPrice = "";

  if (stringPrice.length < 6) {
    suffixPrice = stringPrice.slice(0, 3);
    prefixPrice = stringPrice.slice(3);
    fullPrice = suffixPrice + "." + prefixPrice;
  } else {
    firstNumber = stringPrice.slice(0, 1);
    suffixPrice = stringPrice.slice(1, 4);
    prefixPrice = stringPrice.slice(4);
    fullPrice = firstNumber + "," + suffixPrice + "." + prefixPrice;
  }

  if (stringPrice.length < 5) {
    suffixPrice = stringPrice.slice(0, 2);
    prefixPrice = stringPrice.slice(2);
    fullPrice = suffixPrice + "." + prefixPrice;
    console.log("fullPrice: ", fullPrice);
  }

  return (
    <>
      {isGrid ? (
        <div className="cart">
          <div className="cart_img">
            <img src={imgUrl} alt="cart img" className="cart_img" />

            <a href="" className="cart_img-link">
              <GlassIcon />
            </a>
          </div>

          <div className="cart_content">
            <p className="cart_title">{title}</p>
            <span className="cart_price">${fullPrice}</span>
          </div>
        </div>
      ) : (
        <div className="cart_line">
          <div className="cart_line_img">
            <img src={imgUrl} alt="cart_line img" className="cart_line_img" />

            <a href="" className="cart_line_img-link">
              <GlassIcon />
            </a>
          </div>

          <div className="cart_line_content">
            <h4 className="cart_line_title">{title}</h4>
            <span className="cart_line_price">${fullPrice}</span>
            <p className="cart_line_description">{description}</p>
            <button className="cart_line_btn">DETAILS</button>
          </div>
        </div>
      )}
    </>
  );
}
