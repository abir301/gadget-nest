import { toast } from "react-hot-toast"

// Cart helpers
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
    window.dispatchEvent(new Event('cart-changed'))

}

// Wishlist helpers
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
    window.dispatchEvent(new Event('wishlist-changed'))

}

// ---- Simple client-side auth helpers ----
const USERS_KEY = 'users'
const CURRENT_USER_KEY = 'currentUser'

let getUsers = () => {
    let usersRaw = localStorage.getItem(USERS_KEY)
    if (!usersRaw) return []
    try {
        return JSON.parse(usersRaw)
    } catch (e) {
        return []
    }
}

let saveUsers = (users) => {
    localStorage.setItem(USERS_KEY, JSON.stringify(users))
}

let getCurrentUser = () => {
    let userRaw = localStorage.getItem(CURRENT_USER_KEY)
    if (!userRaw) return null
    try {
        return JSON.parse(userRaw)
    } catch (e) {
        return null
    }
}

let isAuthenticated = () => !!getCurrentUser()

let signup = ({ name, email, password }) => {
    const users = getUsers()
    const exists = users.find(u => u.email.toLowerCase() === email.toLowerCase())
    if (exists) {
        toast.error('Account already exists with this email')
        return false
    }
    const newUser = { id: crypto.randomUUID ? crypto.randomUUID() : Date.now().toString(), name, email, password }
    users.push(newUser)
    saveUsers(users)
    localStorage.setItem(CURRENT_USER_KEY, JSON.stringify({ id: newUser.id, name: newUser.name, email: newUser.email }))
    window.dispatchEvent(new Event('user-changed'))
    toast.success('Account created')
    return true
}

let login = ({ email, password }) => {
    const users = getUsers()
    const user = users.find(u => u.email.toLowerCase() === email.toLowerCase() && u.password === password)
    if (!user) {
        toast.error('Invalid credentials')
        return false
    }
    localStorage.setItem(CURRENT_USER_KEY, JSON.stringify({ id: user.id, name: user.name, email: user.email }))
    window.dispatchEvent(new Event('user-changed'))
    toast.success('Logged in')
    return true
}

let logout = () => {
    localStorage.removeItem(CURRENT_USER_KEY)
    window.dispatchEvent(new Event('user-changed'))
    toast.success('Logged out')
}

export {addToCart , getCartItems ,addToWishlist , getWishlistItems , getCurrentUser, isAuthenticated, signup, login, logout}