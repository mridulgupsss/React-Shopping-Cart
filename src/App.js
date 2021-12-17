import React from 'react';
import Cart from "./Cart";
import Navbar from './Navbar';

class App extends React.Component {


  constructor(){
    super();
    this.state = {
        products: [
            {
                price : 999, 
                title : 'Mobile Phone',
                qty : 1,
                img : '',
                id: 1
                
            },
            {
                price : 99999, 
                title : 'Laptop',
                qty : 2,
                img : '',
                id: 2
            },
            {
                price : 99, 
                title : 'Watch',
                qty : 5,
                img : '',
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



  render(){
    const {products}=this.state;
  return (
    <div className="App">

      <Navbar/>

      <Cart
    	products={products}  
      onIncreaseQuantity={this.IncreaseQuantity}
      onDecreaseQuantity={this.DecreaseQuantity}
      onDeleteProduct={this.DeleteProduct}

      />
      
      )
      
    </div>
  );
  }
}

export default App;
