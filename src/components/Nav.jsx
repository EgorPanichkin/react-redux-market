import { Link } from "react-router-dom"
import { FaBasketShopping } from "react-icons/fa6";
import { useSelector } from "react-redux";

export default function Nav() {
  const buyProducts = useSelector((state) => state.buyProducts)


  return (
    <div className="wrapper">
      <nav>
        <Link to='/'>Home</Link>
        <div className="basket">
          <Link to='/purchases'>
            <FaBasketShopping size={30}/>
          </Link>
          <p>Count:{buyProducts.length}</p>
        </div>
      </nav>
    </div>
  )
}
