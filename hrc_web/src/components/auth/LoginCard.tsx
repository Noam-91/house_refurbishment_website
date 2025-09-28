import {useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from "../../redux/hooks.ts";
import {login} from "../../redux/auth/auth.thunks.ts";

const LoginCard = ({switchCardFn}) => {
    const dispatch = useAppDispatch();
    const { status, error } = useAppSelector((state) => state.auth);

    /** Login Form */
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleLogin = (e) => {
        e.preventDefault();
        // If "remember me" is checked, save the email to local storage
        if (rememberMe) {
            localStorage.setItem('rememberMeEmail', formData.email);
        } else {
            localStorage.removeItem('rememberMeEmail');
        }
        dispatch(login({ ...formData }));
    };

    /** Remember Me functionality */
    const [rememberMe, setRememberMe] = useState(false);

    // This useEffect hook runs once when the component mounts
    // to check for a saved email in localStorage.
    useEffect(() => {
        const savedEmail = localStorage.getItem('rememberMeEmail');
        if (savedEmail) {
            setFormData((prevData) => ({
                ...prevData,
                email: savedEmail,
            }));
            setRememberMe(true);
        }
    }, []);

    const handleRememberMeChange = (e) => {
        const isChecked = e.target.checked;
        setRememberMe(isChecked);
        // If the checkbox is unchecked, remove the email from local storage
        if (!isChecked) {
            localStorage.removeItem('rememberMeEmail');
        }
    };

    return (
        <div className="w-1/2 p-12 flex flex-col justify-center">
            <h2 className="text-3xl font-semibold mb-8 text-neutral-800">Login</h2>
            <form className="space-y-6" onSubmit={handleLogin}>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="name@example.com"
                        className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 ease-in-out"
                    />
                </div>
                <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="••••••••"
                        className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 ease-in-out"
                    />
                </div>
                <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center">
                        <input
                            id="remember-me"
                            name="remember-me"
                            type="checkbox"
                            checked={rememberMe}
                            onChange={handleRememberMeChange}
                            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                        />
                        <label htmlFor="remember-me" className="ml-2 block text-gray-900">Remember me</label>
                    </div>
                    <span className="font-medium text-blue-600 hover:text-blue-500 cursor-pointer"
                          onClick={() => switchCardFn('forgot-password')}>Forgot
                        password?</span>
                </div>
                <button
                    type="submit"
                    className="w-full flex justify-center py-3 px-4 border border-transparent rounded-xl shadow-sm text-lg font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-gray-400 transition-colors duration-200"
                    disabled={status === 'loading'}
                >
                    {status === 'loading' ? 'Logging in...' : 'Log in'}
                </button>
                {error && <div className="text-red-500 text-sm text-center mt-2">{error}</div>}
            </form>
        </div>
    );
};

export default LoginCard;