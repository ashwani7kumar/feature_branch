import Image from "next/image";
import React from "react";
import { CartItem } from "../interface";
import { add, remove } from "../Redux/CartSlice";
import { useAppDispatch } from "../Redux/Store";
import QtyAddRemove from "./Qty";
interface Props {
  cartItem: CartItem;
}
const CartItemDetails = ({ cartItem }: Props) => {
  const dispatch = useAppDispatch();
  if (cartItem.qty)
    return (
      <div className="container text-center">
        <div className="row">
          <div className="col">
            <Image
              src={cartItem.product.image}
              width={200}
              height={150}
              alt={cartItem.product.title}
              className="bd-placeholder-img card-img-top"
            />
          </div>
          <div className="col">{cartItem.product.title}</div>
          <div className="col">
            <p>INR {cartItem.product.price}</p>
            X
            <QtyAddRemove
              onDecrease={() => dispatch(add(cartItem.product))}
              onIncrease={() => dispatch(remove(cartItem.product))}
              qty={cartItem.qty}
            />
          </div>
          <div className="col">INR {cartItem.qty * cartItem.product.price}</div>
        </div>
        <hr />
      </div>
    );
  return <div>There is no item in the cart</div>;
};

export default CartItemDetails;
