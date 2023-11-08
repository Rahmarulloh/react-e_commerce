import { CartProp } from "utils/types";

export default function Cart(prop: CartProp) {
  return (
    <div className="cart">
      <div className="cart_img">
        <img src={prop.imgUrl} alt="cart img" />
        <div className="cart_content">
          <p className="cart_title">{prop.title}</p>
          <span className="cart_price">{prop.price}</span>
        </div>
      </div>
    </div>
  );
}
