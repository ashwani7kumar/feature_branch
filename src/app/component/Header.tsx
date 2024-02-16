"use client";
import Link from "next/link";
import { totalCartItemsSelector } from "../Redux/CartSlice";
import { useAppSelector } from "../Redux/Store";

const Header = () => {
  const totalItems = useAppSelector(totalCartItemsSelector);
  return (
    <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
      <a
        href="/"
        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
      >
        <span className="fs-4">
          <strong> Shopping Cart</strong>
        </span>
      </a>
      <ul className="nav nav-pills">
        <li className="nav-item">
          <Link href="/" className="nav-link" aria-current="page">
            <button className="btn btn-success">Home</button>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/cart" className="nav-link">
            <button className="btn btn-warning">Cart ({totalItems})</button>
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
