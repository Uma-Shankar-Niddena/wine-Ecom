import { Link } from "react-router-dom"
import "./CartItems.css"

const CartProducts = ({ cartItems, increaseQuantity, decreaseQuantity, removeItem}) => {
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0)

  
  return (
    <div className="cart-container">
      <h1 className="cart-heading">Your Cart</h1>

      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <p>Your cart is empty</p>
          <Link to="/products" className="continue-shopping">Continue Shopping</Link>
        </div>
      ) : (
        <>
          <div className="cart-table">
            <div className="cart-header">
              <div className="header-product">Product</div>
              <div className="header-price">Price</div>
              <div className="header-qty">Quantity</div>
              <div className="header-subtotal">Subtotal</div>
            </div>

            {cartItems.map((item) => (
              <div key={item.id} className="cart-row">
                <div className="product-info">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="product-image"
                    onError={(e) => {
                      e.target.onerror = null
                      e.target.src = "https://via.placeholder.com/150"
                    }}
                  />
                  <div>
                    <h3>{item.name}</h3>
                    <button onClick={() => removeItem(item.id)} className="remove-btn">Remove</button>
                  </div>
                </div>

                <div className="text-center">${item.price.toFixed(2)}</div>

                <div className="text-center">
                  <div className="qty-controls">
                    <button onClick={() => decreaseQuantity(item.id)} disabled={item.quantity <= 1}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => increaseQuantity(item.id)}>+</button>
                  </div>
                </div>

                <div className="text-center">${(item.price * item.quantity).toFixed(2)}</div>
              </div>
            ))}

            <div className="cart-summary">
              <span>Total:</span>
              <span className="total-price">${totalPrice.toFixed(2)}</span>
            </div>
          </div>

          <div className="cart-actions">
            <Link to="/products" className="continue-shopping">Continue Shopping</Link>
            <button className="checkout-btn" onClick={() => alert("Proceeding to checkout...")}>Checkout</button>
          </div>
        </>
      )}
    </div>
  )
}

export default CartProducts
