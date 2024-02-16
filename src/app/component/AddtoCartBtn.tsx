"use client";
import { useAppDispatch, useAppSelector } from "../Redux/Store";
import { Product } from "../interface";
import { add, remove, productQtyInCartSelector } from "../Redux/CartSlice";
import QtyAddRemove from "./Qty";

interface Props {
  product: Product;
}
const AddToCartBtn = (props: Props) => {
  const qty = useAppSelector((state) =>
    productQtyInCartSelector(state, props.product.id)
  );

  const dispatch = useAppDispatch();

  if (!qty)
    return (
      <div className="btn-group">
        <button
          type="button"
          onClick={() => dispatch(add(props.product))}
          className="btn btn-sm btn-outline-secondary"
        >
          Add to Cart
        </button>
      </div>
    );
  return (
    <QtyAddRemove
      onDecrease={() => dispatch(add(props.product))}
      onIncrease={() => dispatch(remove(props.product))}
      qty={qty}
    />
  );
};
export default AddToCartBtn;
