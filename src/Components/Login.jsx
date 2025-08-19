import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { getCurrentUser, login } from "..";

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    const location = useLocation()

    useEffect(() => {
        const user = getCurrentUser()
        if (user) navigate('/')
    }, [navigate])

    const redirectTo = new URLSearchParams(location.search).get('redirect') || '/'

    const handleSubmit = (e) => {
        e.preventDefault()
        const ok = login({ email, password })
        if (ok) navigate(redirectTo)
    }

    return (
        <section>
            <Helmet>
                <title>Login | Gadget Heaven</title>
            </Helmet>
            <div className="bg-purple-600">
                <h1 className="text-3xl font-bold text-white text-center w-[900px] mx-auto pt-10">Login</h1>
                <p className="text-white text-center w-[900px] mx-auto py-4 ">Access your dashboard, manage your cart and wishlist.</p>
            </div>
            <div className="w-[90%] md:w-[500px] bg-white mx-auto mt-10 p-8 rounded-lg shadow">
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                        <label className="font-medium">Email</label>
                        <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} className="border rounded px-3 py-2" placeholder="you@example.com" required />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="font-medium">Password</label>
                        <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className="border rounded px-3 py-2" placeholder="••••••••" required />
                    </div>
                    <button type="submit" className="bg-purple-600 text-white py-2 rounded-full font-medium">Login</button>
                </form>
                <p className="text-center text-sm text-gray-600 mt-4">Don't have an account? <Link className="text-purple-600 underline" to="/signup">Sign up now</Link></p>
            </div>
        </section>
    );
};

export default Login;



