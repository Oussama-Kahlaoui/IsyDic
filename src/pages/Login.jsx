import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/useAuth';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    
    try {
      if (email === "oussama@syndic.com" && password === "admin@123") {
        login({ name: "Oussama", role: "admin" });
        navigate("/admin-dashboard");
      } else {
        setError("Invalid credentials");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-sky-100 flex justify-center items-center h-screen">
      {/* Navigation Header */}
      <nav className="absolute top-0 left-0 right-0 bg-white shadow-sm border-b z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center gap-3">
              <div className="text-[#0e141b]">
                <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M24 45.8096C19.6865 45.8096 15.4698 44.5305 11.8832 42.134C8.29667 39.7376 5.50128 36.3314 3.85056 32.3462C2.19985 28.361 1.76794 23.9758 2.60947 19.7452C3.451 15.5145 5.52816 11.6284 8.57829 8.5783C11.6284 5.52817 15.5145 3.45101 19.7452 2.60948C23.9758 1.76795 28.361 2.19986 32.3462 3.85057C36.3314 5.50129 39.7376 8.29668 42.134 11.8833C44.5305 15.4698 45.8096 19.6865 45.8096 24L24 24L24 45.8096Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
              <h2 className="text-[#0e141b] text-lg font-bold leading-tight tracking-[-0.015em]">ResidenceConnect</h2>
            </Link>
            <div className="flex flex-1 justify-end gap-8">
              <div className="flex items-center gap-9">
                <a className="text-[#0e141b] text-sm font-medium leading-normal" href="#">About</a>
                <a className="text-[#0e141b] text-sm font-medium leading-normal" href="#">Features</a>
                <a className="text-[#0e141b] text-sm font-medium leading-normal" href="#">Testimonials</a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Left: Image */}
      <div className="w-1/2 h-screen hidden lg:block">
        <img 
          src="https://images.unsplash.com/photo-1614083511337-49069ad58b9f?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
          alt="Professional Office" 
          className="object-cover w-full h-full"
        />
      </div>
      
      {/* Right: Login Form */}
      <div className="lg:p-36 md:p-52 sm:p-20 p-8 w-full lg:w-1/2">
        <h1 className="text-2xl font-semibold mb-4">Login</h1>
        <form onSubmit={handleSubmit}>
          {/* Email Input */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-600">Email</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" 
              autoComplete="off"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
          </div>
          
          {/* Password Input */}
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-800">Password</label>
            <div className="relative">
              <input 
                type={showPassword ? "text" : "password"} 
                id="password" 
                name="password" 
                className="w-full border border-gray-300 rounded-md py-2 px-3 pr-10 focus:outline-none focus:border-blue-500" 
                autoComplete="off"
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 hover:text-gray-700"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M53.92,34.62A8,8,0,1,0,42.08,45.38L61.32,66.55C25,88.84,9.38,123.2,8.69,124.76a8,8,0,0,0,0,6.5c.35.85,8.82,21.07,25.65,35.79C52.47,173.29,72.88,184,128,184s75.51-10.71,93.66-26.95c16.83-14.72,25.3-34.94,25.65-35.79a8,8,0,0,0,0-6.5c-.69-1.56-16.35-35.92-52.63-58.21l18.24-21.17a8,8,0,1,0-11.84-10.76L47.26,33.38A8,8,0,0,0,53.92,34.62ZM128,168c-30.78,0-58.07-11.14-77.25-27.88C35.92,123.82,49.16,96.09,128,96.09s92.08,27.73,77.25,44C185.93,156.86,158.78,168,128,168Zm0-60a28,28,0,1,0,28,28A28,28,0,0,0,128,108Zm0,40a12,12,0,1,1,12-12A12,12,0,0,1,128,148Z"></path>
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M247.31,124.76c-.35-.79-8.82-21.07-25.65-35.79C185.53,82.71,165.12,72,128,72S46.47,82.71,28.34,89A8,8,0,0,0,28,104a8,8,0,0,0,8,8c.35,0,33.28-9.33,90.47-13.25C134.43,114.84,128,125.37,128,136a8,8,0,0,0,16,0c0-10.63-6.43-21.16-18.47-37.25C202.72,102.67,235.65,112,236,112a8,8,0,0,0,8-8A8,8,0,0,0,247.31,124.76ZM128,168c-30.78,0-58.07-11.14-77.25-27.88C35.92,123.82,49.16,96.09,128,96.09s92.08,27.73,77.25,44C185.93,156.86,158.78,168,128,168Zm0-60a28,28,0,1,0,28,28A28,28,0,0,0,128,108Zm0,40a12,12,0,1,1,12-12A12,12,0,0,1,128,148Z"></path>
                  </svg>
                )}
              </button>
            </div>
          </div>
          
          {/* Remember Me Checkbox */}
          <div className="mb-4 flex items-center">
            <input 
              type="checkbox" 
              id="remember" 
              name="remember" 
              className="text-red-500"
              checked={rememberMe}
              onChange={e => setRememberMe(e.target.checked)}
            />
            <label htmlFor="remember" className="text-blue-900 ml-2">Remember Me</label>
          </div>
          
          {/* Error Message */}
          {error && <div className="mb-4 text-blue-500 text-sm">{error}</div>}
          
          {/* Forgot Password Link */}
          {/* <div className="mb-6 text-blue-500"> */}
            {/* <a href="#" className="hover:underline">Forgot Password?</a> */}
          {/* </div> */}
          
          {/* Login Button */}
          <button 
            type="submit" 
            disabled={isLoading}
            className="bg-blue-500 hover:bg-blue-600 disabled:bg-gray-400 text-white font-semibold rounded-md py-2 px-4 w-full transition-colors"
          >
            {isLoading ? 'Logging in...' : 'Login'}
          </button>
        </form>
        
        {/* Sign up Link */}
      </div>
    </div>
  );
} 