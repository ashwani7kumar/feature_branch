"use client";
import { useAppDispatch } from "@/app/Redux/Store";
import { add } from "@/app/Redux/CartSlice";
import { useFetchSingleProduct } from "@/app/customHooks/useFetch";
import { URL } from "@/app/static/constant";
import Link from "next/link";
import Image from "next/image";

const ProductPage = ({ params }: { params: { productId: number } }) => {
  const dispatch = useAppDispatch();

  const { data, loading, error } = useFetchSingleProduct(
    `${URL.PRODUCT_API}/${params.productId}`
  );

  return (
    <div>
      <div className="container my-5">
        <div className="row">
          <div className="col-md-5">
            <div className="main-img">
              <Image
                className="img-fluid"
                src={data.image}
                width="500"
                height="500"
                alt="ProductS"
              />
            </div>
          </div>
          <div className="col-md-7">
            <div className="main-description px-2">
              <div className="category text-bold">
                <strong>Category:</strong> {data.category}
              </div>
              <div className="product-title text-bold my-3">{data.title}</div>

              <div className="price-area my-4">
                <p className="new-price text-bold mb-1">
                  <strong>INR</strong> {data.price}
                </p>
              </div>

              <div className="buttons d-flex my-5">
                <div className="block">
                  <button
                    type="button"
                    onClick={() => dispatch(add(data))}
                    className="btn btn-sm btn-outline-primary"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>

            <div className="product-details my-4">
              <p className="details-title text-color mb-1">
                <strong>Product Details: </strong>
              </p>
              <p className="description">{data.description}</p>
            </div>
            <div className="block">
              <Link href="/">
                <button className="btn btn-sm btn-outline-secondary">
                  Continue Shopping
                </button>
              </Link>
            </div>

            <div className="row questions bg-light p-3">
              <div className="col-md-1 icon">
                <i className="fa-brands fa-rocketchat questions-icon"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
