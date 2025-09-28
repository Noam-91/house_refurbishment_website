import Header from "../components/Header.tsx";
import Footer from "../components/Footer.tsx";
import {
    PlusCircleIcon,
    SparklesIcon,
    HandRaisedIcon,
    BoltIcon,
    CheckCircleIcon, ViewColumnsIcon
} from '@heroicons/react/24/outline';

const About = ()=>{
    const content = {
        banner: {
            heading: 'Crafting spaces that tell a story.',
            subheading: 'We believe that great design is a conversation between form and function, tailored to your unique vision.',
            imageUrl: 'https://www.thespruce.com/thmb/3tqzoZ5GT2uQOFNE5__ykQwqN-M=/2500x0/filters:no_upscale():max_bytes(150000):strip_icc()/DesignbyEmilyHenderson_MountainHouseLivingRoom_PhotobySaraLigorria-TrampforEHD_9-79d20b8810c24403b627c6ee543dd538.jpg',
        },
        whoWeAre: {
            heading: 'Who We Are',
            paragraphs: [
                'Founded on the principle that every space has potential, RenovatePro has been transforming homes and businesses for over a decade. Our journey began with a simple idea: to make high-quality, personalized renovation accessible and stress-free. We’re a team of passionate designers, skilled builders, and project managers dedicated to bringing your dreams to life, one detail at a time.',
                'From the initial consultation to the final reveal, we work collaboratively with our clients, ensuring their voice is heard at every step. We pride ourselves on our transparency, craftsmanship, and a commitment to exceeding expectations.',
            ],
            imageUrl: 'https://i.pinimg.com/1200x/06/3d/6e/063d6e7c236d94cacd19755938c0c62c.jpg',
        },
        whatWeValue: [
            {
                icon: <PlusCircleIcon className="h-10 w-10 text-neutral-800" />,
                title: 'We add and create value',
                description: 'At Chapter, we believe in creating mutual success, ensuring that everyone—customers, subcontractors, and our community—benefits. Life is about giving and receiving value.'
            },
            {
                icon: <SparklesIcon className="h-10 w-10 text-neutral-800" />,
                title: 'We make it simple',
                description: 'We leverage technology to streamline processes and communications, making each step straightforward and hassle-free for everyone involved.'
            },
            {
                icon: <HandRaisedIcon className="h-10 w-10 text-neutral-800" />,
                title: 'We are transparent and honest',
                description: 'Transparency and honesty are non-negotiable for us; clear and open communication is fundamental to our success and relationships.'
            },
            {
                icon: <ViewColumnsIcon className="h-10 w-10 text-neutral-800" />,
                title: 'We are structured',
                description: 'Our approach is methodical and organized, eliminating uncertainties to manage outcomes effectively, especially in the face of renovation challenges.'
            },
            {
                icon: <BoltIcon className="h-10 w-10 text-neutral-800" />,
                title: 'We are agile',
                description: 'Adaptability and agility are at our core, enabling us to navigate the dynamic renovation industry with a start-up’s enthusiasm and readiness.'
            },
            {
                icon: <CheckCircleIcon className="h-10 w-10 text-neutral-800" />,
                title: 'We are accountable',
                description: 'We embrace responsibility for our actions, understanding that accountability fosters trust and elevates our work and partnerships.'
            }
        ],
        members: [
            {
                name: 'Jane Doe',
                title: 'Chief Design Officer',
                intro: 'A visionary in modern and sustainable design.',
                imageUrl: 'https://i.pinimg.com/736x/ed/97/17/ed97179b1a21251a1b4f3c2f03cd9273.jpg',
                link:"#"
            },
            {
                name: 'Emily White',
                title: 'Head of Operations',
                intro: 'Ensuring every project runs smoothly from start to finish.',
                imageUrl: 'https://i.pinimg.com/736x/4d/91/58/4d915862f4d3453fdcb9ce8c2bff2020.jpg',
                link:"#"
            },
            {
                name: 'John Smith',
                title: 'CEO & Lead Builder',
                intro: 'Dedicated to precision and bringing blueprints to life.',
                imageUrl: 'https://i.pinimg.com/1200x/85/fc/09/85fc097b34bff079cfe2c2ca2c680870.jpg',
                link:"#"
            },
        ],
    }

    return (
        <div className="bg-white min-h-screen font-sans text-gray-800">
            <Header/>
            <main className="mx-auto">
                {/* Welcome Banner */}
                <div className="relative overflow-hidden shadow-lg">
                    <img
                        src={content.banner.imageUrl}
                        alt="A beautifully designed interior space."
                        className="w-full h-96 object-cover"
                    />

                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center p-8">
                        <div className="text-white max-w-2xl w-1/2">
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-4">
                                {content.banner.heading}
                            </h1>
                            <p className="text-lg sm:text-xl font-light">
                                {content.banner.subheading}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Who We Are Section */}
                <section className="bg-gray-800 text-gray-200 shadow-xl p-8 sm:p-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                        {/* Text Content */}
                        <div>
                            <p className="text-6xl lg:text-5xl sm:text-4xl font-bold mb-6 text-white">{content.whoWeAre.heading}</p>
                            <div className="space-y-6 text-lg">
                                {content.whoWeAre.paragraphs.map((paragraph, index) => (
                                    <p key={index}>{paragraph}</p>
                                ))}
                            </div>
                        </div>
                        {/* Image */}
                        <div>
                            <img
                                src={content.whoWeAre.imageUrl}
                                alt="Our professional and collaborative team"
                                className="w-full h-full object-cover rounded-lg shadow-md"
                            />
                        </div>
                    </div>
                </section>

                {/* What We Value Section */}
                <section className="bg-[#F9F7F5] py-20 px-4 sm:px-8 lg:px-16">
                    <div className="max-w-7xl mx-auto">
                        <h2 className="text-4xl sm:text-5xl font-semibold text-center mb-16 text-neutral-800">
                            Values that define us
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
                            {content.whatWeValue.map((value, index) => (
                                <div key={index} className="flex items-start space-x-6">
                                    <div className="flex-shrink-0 text-3xl">
                                        {value.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-medium text-neutral-800 mb-2">
                                            {value.title}
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            {value.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Members Section */}
                <section className={"py-20 px-4 sm:px-8 lg:px-16"}>
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 text-center">Meet Our Members</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                        {content.members.map((member, index) => (
                            <div key={index}
                                 className="relative rounded-xl overflow-hidden shadow-lg group cursor-pointer">
                                {/* Image that fills the card */}
                                <img
                                    src={member.imageUrl}
                                    alt={member.name}
                                    className="w-full h-full object-cover aspect-[4/5]"
                                />

                                {/* Overlay content that appears on hover */}
                                <div
                                    className="absolute inset-0 bg-gray-900 bg-opacity-70 flex flex-col items-center justify-center p-6 text-center text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                    <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                                    <p className="text-sm font-light mb-4">{member.title}</p>
                                    <p className="text-xs italic max-w-xs mb-4">{member.intro}</p>
                                    <button className="bg-white text-gray-900 px-6 py-2 rounded-full font-medium hover:bg-gray-200 transition-colors">
                                        <a href={member.link}>Know more</a>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </main>
            <Footer/>
        </div>
    );
}

export default About;