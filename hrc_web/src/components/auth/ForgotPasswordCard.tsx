import { useState } from 'react';
import {useAppDispatch} from "../../redux/hooks.ts";
import { forgotPassword } from '../../redux/auth/auth.thunks.ts';

const ForgotPasswordCard = ({switchCardFn}) => {
    const [email, setEmail] = useState('');
    const dispatch = useAppDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(forgotPassword(email));
        console.log('Sending password reset link to:', email);
    };

    return (
        // Removed the outer div to align with the LoginCard's structure.
        <div className="w-1/2 p-12 flex flex-col justify-center">
            <h2 className="text-3xl font-semibold mb-6 text-neutral-800 text-center">Forgot Password?</h2>
            <p className="text-sm text-gray-600 mb-8 text-center">
                Enter the email address associated with your account and we'll send you a link to reset your password.
            </p>
            <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="name@example.com"
                        className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 ease-in-out"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="w-full flex justify-center py-3 px-4 border border-transparent rounded-xl shadow-sm text-lg font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
                >
                    Send Reset Link
                </button>
                <div className="text-center mt-4">
                    <span onClick={() => switchCardFn('login')} className="text-sm text-blue-600 hover:text-blue-500 cursor-pointer">Back to Login</span>
                </div>
            </form>
        </div>
    );
};

export default ForgotPasswordCard;