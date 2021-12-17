import React from 'react';
import Cart from "./Cart";
import Navbar from './Navbar';

class App extends React.Component {


  constructor(){
    super();
    this.state = {
        products: [
            {
                price : 8000, 
                title : 'Mobile Phone',
                qty : 0,
                img : 'https://images.unsplash.com/photo-1585060544812-6b45742d762f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bW9iaWxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
                id: 1
                
            },
            {
                price : 54000, 
                title : 'Laptop',
                qty : 0,
                img : 'https://media.istockphoto.com/photos/laptop-computer-with-blue-pink-lighting-and-blank-screen-place-on-picture-id1292038829?b=1&k=20&m=1292038829&s=170667a&w=0&h=L8DhcSOFS3BZdCHN6ldjumqQBw0J2kk7mBagO5io5jM=',
                id: 2
            },
            {
                price : 375, 
                title : 'Watch',
                qty : 0,
                img : 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8d2F0Y2h8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
                id: 3
            }
        ]
    }
}

IncreaseQuantity = (product) =>{
  const {products} =this.state;
  const idx= products.indexOf(product);
  products[idx].qty+=1;
  this.setState({
      products
  })
}

DecreaseQuantity = (product) =>{
const {products} =this.state;
const idx= products.indexOf(product);
if(products[idx].qty==0) return;
products[idx].qty-=1;
this.setState({
  products
})
}

DeleteProduct = (id) =>{
const {products }=this.state;
const items = products.filter((item)=>item.id!==id);
this.setState({
  products: items
})
}

getCount =  () =>{
  const{products} = this.state;
  let count=0;
  products.forEach((product)=>{
    count+=product.qty;
  })
  return count;
}

getCartTotal = () =>{
  const{products} = this.state;
  let totalPrice=0;
  products.forEach((product)=>{
    totalPrice+=(product.price*product.qty);
  })
  return totalPrice; 
}


  render(){
    const {products}=this.state;
  return (
    <div className="App">

      <Navbar
      count={this.getCount()}
      
      />

      <Cart
    	products={products}  
      onIncreaseQuantity={this.IncreaseQuantity}
      onDecreaseQuantity={this.DecreaseQuantity}
      onDeleteProduct={this.DeleteProduct}

      />
      <div style={{padding: 10, fontSize:20}}>Total Price : {this.getCartTotal()} </div>
      )
      
    </div>
  );
  }
}

export default App;
