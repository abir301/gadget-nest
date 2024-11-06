import { toast } from "react-hot-toast"

let getCartItems = () =>{
    let items = localStorage.getItem('cart')
    if (items){
    let allItems = JSON.parse(items)
    
    return allItems
    } else {
        return []
    }
}

let addToCart=(product) => {
    let cart = getCartItems()
    let inCart = cart.find(item=> item.product_id === product.product_id)
    if (inCart) return toast.error('Already exists in cart!');
    cart.push(product)
    localStorage.setItem('cart' , JSON.stringify(cart))
    toast.success("Product added successfully to cart!");

}

let getWishlistItems = () =>{
    let items = localStorage.getItem('wishlist')
    if (items){
    let allItems = JSON.parse(items)
    
    return allItems
    } else {
        return []
    }
}

let addToWishlist=(product) => {
    let wishlist = getWishlistItems()
    let inWishlist = wishlist.find(item=> item.product_id === product.product_id)
    if (inWishlist) return toast.error('Already exists in wishlist!');
    wishlist.push(product)
    localStorage.setItem('wishlist' , JSON.stringify(wishlist))
    toast.success("Product added successfully to wishlist!");

}

export {addToCart , getCartItems ,addToWishlist , getWishlistItems }