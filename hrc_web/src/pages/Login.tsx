import {useState} from "react";
import LoginCard from "../components/auth/LoginCard.tsx";
import ForgotPasswordCard from "../components/auth/ForgotPasswordCard.tsx";

const Login = () => {

    const loginPageContent = {
        image: "https://i.pinimg.com/1200x/f6/46/22/f64622c2048bea7884643079f06c36c8.jpg"
    };
    
    type CardType = 'login' | 'forgot-password' | 'register';

    const [card, setCard] = useState<CardType>('login');

    return (
        <div className="flex justify-center items-center min-h-screen p-4 bg-orange-100">
            <div className="flex w-full max-w-4xl bg-white shadow-xl rounded-3xl overflow-hidden">
                {/* Left side: Login Form */}
                {card==='login' && <LoginCard switchCardFn={setCard}/>}
                {card==='forgot-password' && <ForgotPasswordCard switchCardFn={setCard} />}
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

export default Login;