import React, { Component } from "react";
import {KURTAS,detailProduct} from '../shared/Kurtas';
const ProductContext = React.createContext();

class ProductProvider extends Component {
  state = {
      products: [],
      cart: [],
      modalOpen:false,
      modalProduct:detailProduct,
      CartSubTotal:0,
      CartTax:0,
      CartTotal:0,

  };
  componentDidMount() {
    this.setProducts();
  }

  setProducts = () => {
    let products = [];
    KURTAS.forEach(item => {
      const singleItem = { ...item };
      products = [...products, singleItem];
    });
    this.setState(() => {
      return { products };
    });
  };

  getItem = (cartid) => {
    const product = this.state.products.find(cloth => cloth.cartid === cartid );
    return product;
  };

  handleDetail = cartid => {
    const product = this.getItem(cartid);
    this.setState(() => {
      return { detailProduct: product };
    });
  };
  addToCart = (cartid) => {
    let tempProducts = [...this.state.products];
    const index = tempProducts.indexOf(this.getItem(cartid));
    const product = tempProducts[index];
    product.inCart = true;
    product.count = 1;
    const price = product.price;
    product.total = price;

    this.setState(() => {
      return {
        products: [...tempProducts],
        cart: [...this.state.cart, product],
          };
    },()=>this.addTotals());
  };
  openModal =cartid=>{
       window.scrollTo(350, 350);
      const product=this.getItem(cartid);
      this.setState(()=>{
          return { modalProduct: product , modalOpen:true };
      });
};
closeModal=()=>{
    this.setState(()=>{
        return{ modalOpen:false};
    })
}
increment=(cartid)=>{
  let tempCart = [...this.state.cart];
    const selectedProduct = tempCart.find(item => {
      return item.cartid === cartid;
    });
    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];
    product.count = product.count + 1;
    product.total = product.count * product.price;
    this.setState(() => {
      return {
        cart: [...tempCart]
      };
    },() =>this.addTotals());
}
decrement=(cartid)=>{
  let tempCart = [...this.state.cart];
    const selectedProduct = tempCart.find(item => {
      return item.cartid === cartid;
    });
    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];
    product.count = product.count - 1;
    if (product.count === 0) {
      this.removeItem(cartid);
    } else {
      product.total = product.count * product.price;
      this.setState(() => {
        return { cart: [...tempCart] };
      },() =>this.addTotals());
    }
}
removeItem=(cartid)=>{
  let tempProducts=[...this.state.products];
  let tempCart=[...this.state.cart];
  const index = tempProducts.indexOf(this.getItem(cartid));
    let removedProduct = tempProducts[index];
    removedProduct.inCart = false;
    removedProduct.count = 0;
    removedProduct.total = 0;

    tempCart = tempCart.filter(item => {
      return item.cartid !== cartid;
    });

    this.setState(() => {
      return {
        cart: [...tempCart],
        products: [...tempProducts]
      };
    },()=>this.addTotals());

}
clearCart=(carid)=>{
  this.setState(()=>{
    return{cart:[]}
  })
}
addTotals=()=>{
  let SubTotal=0;
  this.state.cart.map(item=>(SubTotal+=item.total));
  const tempTax=SubTotal*.18;
  const tax=parseFloat(tempTax.toFixed(2));
  const total=SubTotal+tax;
  this.setState(()=>{
      return{
        CartSubTotal:SubTotal,
      CartTax:tax,
      CartTotal:total,
      }
  })


}
  
  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handleDetail: this.handleDetail,
          addToCart: this.addToCart,
          openModal: this.openModal,
          closeModal: this.closeModal,
          increment:this.increment,
          decrement:this.decrement,
          removeItem:this.removeItem,
          clearCart:this.clearCart,


        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
