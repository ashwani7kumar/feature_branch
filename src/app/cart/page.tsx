"use client";
import CartItemDetails from "../component/CartItemDetails";
import React from "react";
import { TotalPriceSelector } from "../Redux/CartSlice";
import { useAppSelector } from "../Redux/Store";
import Providers from "../Redux/Provider";

const CartPage = () => {
  const cartItems = useAppSelector((state) => state.cart.cartItems);

  const totalPrice = useAppSelector(TotalPriceSelector);
  return (
    <div className="p-2">
      {cartItems.map((item) => (
        <CartItemDetails key={item.product.id} cartItem={item} />
      ))}

      <p className="text-slate-600">
        Total Price:{" "}
        <span className="text-slate-900 font-bold">INR {totalPrice}</span>
      </p>
    </div>
  );
};

export default CartPage;
