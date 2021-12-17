import React from "react";

class CartItem extends React.Component {
  render() {
    const { price, title, qty } = this.props.product;
    const { product } = this.props;
    return (
      <div className="cart-item">
        <div className="left-block">
          <img
            style={{
              height: 110,
              width: 110,
              borderRadius: 5,
              background: "#ccc",
            }}
            src={product.img}
          />
        </div>
        <div className="right-block">
          <div style={{ fontSize: 25 }}> {title} </div>
          <div style={{ color: "#777" }}>Rs {price}</div>
          <div style={{ color: "#777" }}>Qty : {qty}</div>
          <div className="cart-item-action">
            {/* Buttons */}
            <img
              alt="increase"
              className="action-icons"
              src="https://as2.ftcdn.net/jpg/01/07/62/07/500_F_107620769_UwNVSoXnKS4VNcOKoZjPohlEPn83oE38.jpg"
              onClick={() => this.props.onIncreaseQuantity(product)}
            />
            <img
              alt="decrease"
              className="action-icons"
              src="https://as1.ftcdn.net/jpg/03/73/49/86/500_F_373498649_nBxauQ0ipBSVrVcMpWWVmTpXu3BLvRyY.jpg"
              onClick={() => this.props.onDecreaseQuantity(product)}
            />
            <img
              alt="delete"
              className="action-icons"
              src="https://as2.ftcdn.net/jpg/01/90/89/15/500_F_190891550_N7uKp2aHE3mOc20dmtDytj7atgvbhdOu.jpg"
              onClick={() => this.props.onDeleteProduct(product.id)}
            />
          </div>
        </div>
      </div>
    );
  }
}
export default CartItem;