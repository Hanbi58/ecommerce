import Link from "next/link";
import { AiOutlineShopping } from "react-icons/ai";
const Navbar = () => {
  return (
    <div className="navbar-container">
      <p className="logo">
        <Link href="/">JSM Headphones</Link>
      </p>
      <button className="cart-icon">
        <AiOutlineShopping />
        <span className="cart-item-qty">0</span>
      </button>
    </div>
  );
};

export default Navbar;
