import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import starbikeLogo from '../assets/img/starbikehome.png';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);
  const navigate = useNavigate();
  const { login, pb } = useAuth();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const result = await login(email, password);
      if (result.success) navigate('/');
      else setError(result.error || 'Invalid email or password. Please try again.');
    } catch (err) {
      console.error('Login error:', err);
      setError('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Validate passwords match
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      setLoading(false);
      return;
    }

    try {
      // Create new user in PocketBase
      const userData = {
        name: fullName,
        email: email,
        password: password,
        passwordConfirm: confirmPassword,
      };

      const record = await pb.collection('users').create(userData);
      
      if (record) {
        // Show success message and switch to login form
        setError('');
        setSuccess('Account created successfully! Please log in with your credentials.');
        setIsRegistering(false);
        setFullName('');
        setConfirmPassword('');
        // Keep email and password for easy login
        setLoading(false);
      }
    } catch (err) {
      console.error('Registration error:', err);
      if (err.data?.message) {
        setError(err.data.message);
      } else {
        setError('Registration failed. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F3D73B]">
      <div className="mx-auto max-w-[1080px] px-6 pt-10 lg:pt-14">
        {/* Logo */}
        <div className="mb-2 flex justify-center">
          <img
            src={starbikeLogo}
            alt="Starbike Logo"
            className="h-24 w-auto sm:h-28 md:h-32 object-contain"
          />
        </div>

        {/* Glass Card */}
        <div className="mt-2 flex justify-center">
          <div
                         className="
               relative w-full max-w-[720px]
               rounded-[28px] md:rounded-[34px]
               border border-white/50
               bg-white/15 backdrop-blur-[12px]
               shadow-[0_8px_30px_rgba(0,0,0,0.08)]
               p-8 sm:p-10 md:p-12

               before:content-[''] before:absolute before:inset-0 before:rounded-[inherit]
               before:pointer-events-none
               before:bg-[radial-gradient(120%_70%_at_10%_0%,rgba(255,255,255,0.35)_0%,rgba(255,255,255,0.15)_30%,rgba(255,255,255,0.08)_55%,rgba(255,255,255,0.04)_75%,rgba(255,255,255,0)_100%)]
               before:z-0
               after:content-[''] after:absolute after:inset-0 after:rounded-[inherit]
               after:ring-1 after:ring-white/30 after:pointer-events-none after:z-[1]
             "
          >
                         {/* content wrapper sits above the overlays */}
             <div className="relative z-[2]">
               <h2 className="mb-8 text-center font-poppins text-[28px] font-extrabold text-[#5E5A2D] md:text-[30px]">
                 {isRegistering ? 'Create Account' : 'Login'}
               </h2>

               {!isRegistering ? (
                 // Login Form
                 <form onSubmit={handleLogin} className="space-y-8">
                   {/* Email */}
                   <div className="space-y-2">
                     <label className="sr-only" htmlFor="email">Email</label>
                     <div className="relative">
                       <input
                         id="email"
                         type="email"
                         value={email}
                         onChange={(e) => setEmail(e.target.value)}
                         placeholder="Email"
                         required
                         className="w-full bg-transparent px-3 py-2 font-poppins text-[15px] text-[#4B4B4B] placeholder-[#6b6b6b] outline-none"
                       />
                       <div className="pointer-events-none h-[2px] w-full bg-black/80" />
                       <FontAwesomeIcon icon={faEnvelope} className="absolute right-3 top-2.5 text-[#6b6b6b]" />
                     </div>
                   </div>

                   {/* Password */}
                   <div className="space-y-2">
                     <label className="sr-only" htmlFor="password">Password</label>
                     <div className="relative">
                       <input
                         id="password"
                         type="password"
                         value={password}
                         onChange={(e) => setPassword(e.target.value)}
                         placeholder="Password"
                         required
                         className="w-full bg-transparent px-3 py-2 font-poppins text-[15px] text-[#4B4B4B] placeholder-[#6b6b6b] outline-none"
                       />
                       <div className="pointer-events-none h-[2px] w-full bg-black/80" />
                       <FontAwesomeIcon icon={faLock} className="absolute right-3 top-2.5 text-[#6b6b6b]" />
                     </div>
                   </div>

                   {error && <div className="text-center text-sm font-medium text-red-600">{error}</div>}
                   {success && <div className="text-center text-sm font-medium text-green-600">{success}</div>}

                   <button
                     type="submit"
                     disabled={loading}
                     className="mt-2 w-full rounded-full bg-[#5670F3] py-3 text-lg font-semibold text-white shadow-[0_8px_24px_rgba(86,112,243,0.45)] transition-transform duration-200 hover:-translate-y-[1px] disabled:cursor-not-allowed disabled:opacity-60"
                   >
                     {loading ? 'Logging in...' : 'Login'}
                   </button>
                 </form>
               ) : (
                 // Registration Form
                 <form onSubmit={handleRegister} className="space-y-8">
                   {/* Full Name */}
                   <div className="space-y-2">
                     <label className="sr-only" htmlFor="fullName">Full Name</label>
                     <div className="relative">
                       <input
                         id="fullName"
                         type="text"
                         value={fullName}
                         onChange={(e) => setFullName(e.target.value)}
                         placeholder="Full Name"
                         required
                         className="w-full bg-transparent px-3 py-2 font-poppins text-[15px] text-[#4B4B4B] placeholder-[#6b6b6b] outline-none"
                       />
                       <div className="pointer-events-none h-[2px] w-full bg-black/80" />
                     </div>
                   </div>

                   {/* Email */}
                   <div className="space-y-2">
                     <label className="sr-only" htmlFor="regEmail">Email</label>
                     <div className="relative">
                       <input
                         id="regEmail"
                         type="email"
                         value={email}
                         onChange={(e) => setEmail(e.target.value)}
                         placeholder="Email"
                         required
                         className="w-full bg-transparent px-3 py-2 font-poppins text-[15px] text-[#4B4B4B] placeholder-[#6b6b6b] outline-none"
                       />
                       <div className="pointer-events-none h-[2px] w-full bg-black/80" />
                       <FontAwesomeIcon icon={faEnvelope} className="absolute right-3 top-2.5 text-[#6b6b6b]" />
                     </div>
                   </div>

                   {/* Password */}
                   <div className="space-y-2">
                     <label className="sr-only" htmlFor="regPassword">Password</label>
                     <div className="relative">
                       <input
                         id="regPassword"
                         type="password"
                         value={password}
                         onChange={(e) => setPassword(e.target.value)}
                         placeholder="Password"
                         required
                         className="w-full bg-transparent px-3 py-2 font-poppins text-[15px] text-[#4B4B4B] placeholder-[#6b6b6b] outline-none"
                       />
                       <div className="pointer-events-none h-[2px] w-full bg-black/80" />
                       <FontAwesomeIcon icon={faLock} className="absolute right-3 top-2.5 text-[#6b6b6b]" />
                     </div>
                   </div>

                   {/* Confirm Password */}
                   <div className="space-y-2">
                     <label className="sr-only" htmlFor="confirmPassword">Confirm Password</label>
                     <div className="relative">
                       <input
                         id="confirmPassword"
                         type="password"
                         value={confirmPassword}
                         onChange={(e) => setConfirmPassword(e.target.value)}
                         placeholder="Confirm Password"
                         required
                         className="w-full bg-transparent px-3 py-2 font-poppins text-[15px] text-[#4B4B4B] placeholder-[#6b6b6b] outline-none"
                       />
                       <div className="pointer-events-none h-[2px] w-full bg-black/80" />
                       <FontAwesomeIcon icon={faLock} className="absolute right-3 top-2.5 text-[#6b6b6b]" />
                     </div>
                   </div>

                   <button
                     type="submit"
                     disabled={loading}
                     className="mt-2 w-full rounded-full bg-[#5670F3] py-3 text-lg font-semibold text-white shadow-[0_8px_24px_rgba(86,112,243,0.45)] transition-transform duration-200 hover:-translate-y-[1px] disabled:cursor-not-allowed disabled:opacity-60"
                   >
                     {loading ? 'Creating Account...' : 'Create Account'}
                   </button>
                 </form>
               )}

               <div className="mt-5 flex items-center justify-between text-[14px] font-medium">
                 <button 
                   onClick={() => {
                     setIsRegistering(!isRegistering);
                     setError('');
                     setSuccess('');
                     setEmail('');
                     setPassword('');
                     setFullName('');
                     setConfirmPassword('');
                   }}
                   className="text-[#4B4B4B] transition-colors hover:text-[#5670F3] cursor-pointer"
                 >
                   {isRegistering ? 'Already have an account? Login' : 'Create an account'}
                 </button>
                 {!isRegistering && (
                   <a href="/forgot-password" className="text-[#4B4B4B] transition-colors hover:text-[#5670F3]">
                     Forget Password?
                   </a>
                 )}
               </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
