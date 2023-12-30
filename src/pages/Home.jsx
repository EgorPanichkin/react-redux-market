import { useEffect } from "react"
import { fetchProds } from "../store/prodReducer"
import { useDispatch, useSelector } from "react-redux"
import { store } from "../store/store"

export default function Home() {
  const dispatch = useDispatch()
  const products = useSelector((state) => state.products.data)

  useEffect(() => {
    dispatch(fetchProds())
  }, [])

  const handleClickBuy = (e) => {
    const id = e.target.value
    const buy = products.products.filter((item) => item.id == id)
    console.log(buy[0]);
    console.log(store.getState())
    dispatch({type: "BUY_PRODUCT", payload: buy[0]})
  }

  return (
    <div className="wrapper">
      {products.products?.map(prod => {
        return (
          <div key={prod.id} className="product">
            <h4>{prod.title}</h4>
            <img src={prod.images[0]} alt="poduct" />
            <div className="buy-container">
              <p>{prod.price} &#36;</p>
              <button className="buy-button" onClick={handleClickBuy} value={prod.id}>Buy Now</button>
            </div>
          </div>
        )
      })}
    </div>
  )
}
