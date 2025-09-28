import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import {useAppDispatch, useAppSelector} from "../../redux/hooks.ts";
import {resetPassword} from "../../redux/user/user.thunks.ts";


const ResetPasswordCard = () => {
    const [searchParams] = useSearchParams();
    const dispatch = useAppDispatch();

    // Get status and error from the user state in Redux
    const { status, error } = useAppSelector((state) => state.user);

    const [token, setToken] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('');

    useEffect(() => {
        const tokenFromUrl = searchParams.get('token');
        if (tokenFromUrl) {
            setToken(tokenFromUrl);
        } else {
            setMessage('No password reset token provided. Please use the link from your email.');
        }
    }, [searchParams]);

    const handlePasswordReset = (e) => {
        e.preventDefault();
        setMessage('');

        if (!token) {
            setMessage('Invalid or expired password reset token.');
            return;
        }

        if (password !== confirmPassword) {
            setMessage('Passwords do not match.');
            return;
        }

        if (password.length < 8) {
            setMessage('Password must be at least 8 characters long.');
            return;
        }

        // Dispatch the async thunk without managing local loading state
        dispatch(resetPassword({ token, password }));
    };

    // Update the local message state based on the Redux state
    useEffect(() => {
        if (status === 'succeeded') {
            setMessage('Your password has been reset successfully!');
            setPassword('');
            setConfirmPassword('');
        }
        if (status === 'failed' && error) {
            setMessage(error);
        }
    }, [status, error]);

    return (
        <div className="w-1/2 p-12 flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">Reset Password</h2>
            {message && (
                <p className={`text-center font-medium mb-4 ${status === 'succeeded' ? 'text-green-600' : 'text-red-600'}`}>
                    {message}
                </p>
            )}
            <form className="space-y-6" onSubmit={handlePasswordReset}>
                <div>
                    <label className="block text-sm font-medium text-gray-700">New Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="••••••••"
                        className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        required
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
                    <input
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        placeholder="••••••••"
                        className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="w-full py-3 px-4 bg-blue-600 text-white font-medium rounded-xl hover:bg-blue-700 disabled:bg-gray-400"
                    disabled={status === 'loading'}
                >
                    {status === 'loading' ? 'Resetting...' : 'Reset Password'}
                </button>
            </form>
        </div>
    );
};

export default ResetPasswordCard;