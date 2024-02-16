import Image from "next/image";
import Link from "next/link";
import { Product } from "../interface";
import AddToCartBtn from "./AddtoCartBtn";
interface Props {
  product: Product;
}
const ProductCard = (props: Props) => {
  return (
    <div className="col">
      <div className="card shadow-sm">
        <Link href={`/product/${props.product.id}`}>
          <Image
            src={props.product.image}
            alt="Image"
            className="bd-placeholder-img card-img-top"
            width="100"
            height="225"
          />
        </Link>
        <div className="card-body">
          <span className="card-text">
            <h4>{props.product.title}</h4>
            <h5>INR {props.product.price}</h5>
          </span>
          <div className="d-flex justify-content-between align-items-center">
            <AddToCartBtn product={props.product} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
