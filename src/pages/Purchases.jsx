import { useDispatch, useSelector } from "react-redux"
import { store } from "../store/store";

export default function Purchases() {
  console.log(store.getState());
  const buyProducts = useSelector((state) => state.buyProducts )
  const dispatch = useDispatch()

  const handleClick = (e) => {
    const id = e.target.value
    dispatch({type: "REFUSE_PRODUCT", payload: id})
  }

  return (
    <div className="wrapper">
      {buyProducts.length == 0 ? (
        <div>
          <h2>Oh empty!</h2>
          <p>Your cart is empty, open the catalog and choose the best product</p>
        </div>
      ) : (
        buyProducts.map((prod, index) => {
          return (
            <div key={index} className="product">
              <h4>{prod.title}</h4>
              <img src={prod.images[0]} alt="poduct" />
              <div className="buy-container">
                <p>{prod.price} &#36;</p>
                <button className="buy-button" onClick={handleClick} value={index}>Refuse</button>
              </div>
            </div>
          )
        })
      )}
    </div>
  )
}
