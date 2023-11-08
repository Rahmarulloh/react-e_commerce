import { GlassIcon } from "assets/icons";
import { CartProp } from "utils/types";

export default function Cart({ imgUrl, title, price }: CartProp) {
  const firstLetter = title.charAt(0).toUpperCase();
  const prefix = title.slice(1);
  const name = firstLetter + prefix;
  const stringPrice = `${price}`;
  let firstNumber = "";
  let suffixPrice = "";
  let prefixPrice = "";
  let fullPrice = "";

  if (stringPrice.length < 6) {
    suffixPrice = stringPrice.slice(0, 3);
    prefixPrice = stringPrice.slice(3);
    fullPrice = suffixPrice + "." + prefixPrice;
    console.log("fullPrice: ", fullPrice);
  } else {
    firstNumber = stringPrice.slice(0, 1);
    suffixPrice = stringPrice.slice(1, 4);
    prefixPrice = stringPrice.slice(4);
    fullPrice = firstNumber + "," + suffixPrice + "." + prefixPrice;
  }
  console.log("fullPrice: ", fullPrice);

  return (
    <div className="cart">
      <div className="cart_img">
        <img src={imgUrl} alt="cart img" className="cart_img" />

        <a href="" className="cart_img-link">
          <GlassIcon />
        </a>
      </div>

      <div className="cart_content">
        <p className="cart_title">{name}</p>
        <span className="cart_price">${fullPrice}</span>
      </div>
    </div>
  );
}
