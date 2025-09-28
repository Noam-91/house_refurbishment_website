import { useLocation } from 'react-router-dom';
import LoginCard from "../components/auth/LoginCard.tsx";
import ForgotPasswordCard from "../components/auth/ForgotPasswordCard.tsx";
import ResetPasswordCard from "../components/auth/ResetPasswordCard.tsx";


const Auth = () => {
    const location = useLocation();

    const loginPageContent = {
        image: "https://i.pinimg.com/1200x/f6/46/22/f64622c2048bea7884643079f06c36c8.jpg"
    };

    // Determine the current card type based on the URL path
    const getCardType = () => {
        const path = location.pathname;
        if (path.includes('/auth/forgot-password')) {
            return 'forgot-password';
        }
        if (path.includes('/auth/reset-password')) {
            return 'reset-password';
        }
        return 'login';
    };

    const currentCard = getCardType();

    return (
        <div className="flex justify-center items-center min-h-screen p-4 bg-orange-100">
            <div className="flex w-full max-w-4xl bg-white shadow-xl rounded-3xl overflow-hidden">
                {/* Left side: Render the correct card based on the path */}
                {currentCard === 'login' && <LoginCard />}
                {currentCard === 'forgot-password' && <ForgotPasswordCard />}
                {currentCard === 'reset-password' && <ResetPasswordCard />}

                {/* Right side: Image */}
                <div className="w-1/2">
                    <img
                        src={loginPageContent.image}
                        alt="A modern home office"
                        className="h-full w-full object-cover rounded-tr-3xl rounded-br-3xl"
                    />
                </div>
            </div>
        </div>
    );
};

export default Auth;