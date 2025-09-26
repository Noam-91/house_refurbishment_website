import Header from "../components/Header.tsx";
import Footer from "../components/Footer.tsx";

const About = ()=>{
    const content = {
        banner: {
            heading: 'Crafting spaces that tell a story.',
            subheading: 'We believe that great design is a conversation between form and function, tailored to your unique vision.',
            imageUrl: 'https://placehold.co/1600x900/E5E7EB/4B5563?text=About+Us',
        },
        whoWeAre: {
            heading: 'Who We Are',
            paragraphs: [
                'Founded on the principle that every space has potential, RenovatePro has been transforming homes and businesses for over a decade. Our journey began with a simple idea: to make high-quality, personalized renovation accessible and stress-free. We’re a team of passionate designers, skilled builders, and project managers dedicated to bringing your dreams to life, one detail at a time.',
                'From the initial consultation to the final reveal, we work collaboratively with our clients, ensuring their voice is heard at every step. We pride ourselves on our transparency, craftsmanship, and a commitment to exceeding expectations.',
            ],
            imageUrl: 'https://placehold.co/800x600/E5E7EB/4B5563?text=Our+Team',
        },
        whatWeValue: {
            heading: 'What We Value',
            values: [
                {
                    title: 'Integrity',
                    description: 'We operate with honesty and transparency, building trust through clear communication and ethical practices.',
                },
                {
                    title: 'Craftsmanship',
                    description: 'Our work is a testament to our skill and attention to detail. We are dedicated to delivering lasting quality in every project.',
                },
                {
                    title: 'Collaboration',
                    description: 'Your vision is our blueprint. We believe the best results come from working together, respecting your ideas and insights.',
                },
                {
                    title: 'Innovation',
                    description: 'We stay ahead of design trends and construction technologies to offer modern, efficient, and creative solutions.',
                },
            ],
        },
        members: [
            {
                name: 'Jane Doe',
                title: 'Chief Design Officer',
                intro: 'A visionary in modern and sustainable design.',
                imageUrl: 'https://placehold.co/400x500/E5E7EB/4B5563?text=Jane+Doe',
                link:"#"
            },
            {
                name: 'John Smith',
                title: 'CEO & Lead Builder',
                intro: 'Dedicated to precision and bringing blueprints to life.',
                imageUrl: 'https://placehold.co/400x500/E5E7EB/4B5563?text=John+Smith',
                link:"#"
            },
            {
                name: 'Emily White',
                title: 'Head of Operations',
                intro: 'Ensuring every project runs smoothly from start to finish.',
                imageUrl: 'https://placehold.co/400x500/E5E7EB/4B5563?text=Emily+White',
                link:"#"
            },
        ],
    }

    return (
        <div className="bg-white min-h-screen font-sans text-gray-800">
            <Header/>
            <main className="mx-auto  py-16">
                {/* Welcome Banner */}
                <div className="relative mb-16 rounded-2xl overflow-hidden shadow-lg">
                    <img
                        src={content.banner.imageUrl}
                        alt="A beautifully designed interior space."
                        className="w-full h-96 object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center p-8 text-center rounded-2xl">
                        <div className="text-white max-w-2xl">
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
                <section className="bg-gray-800 text-gray-200 rounded-lg shadow-xl p-8 sm:p-12 mb-16">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                        {/* Text Content */}
                        <div>
                            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white">{content.whoWeAre.heading}</h2>
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
                <section className="mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 text-center">{content.whatWeValue.heading}</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {content.whatWeValue.values.map((value, index) => (
                            <div key={index} className="p-6 bg-gray-50 rounded-lg shadow-sm">
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                                <p className="text-sm text-gray-600">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Co-Founders Section */}
                <section>
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 text-center">Meet Our Members</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                        {content.members.map((member, index) => (
                            <div key={index} className="relative rounded-xl overflow-hidden shadow-lg group cursor-pointer">
                                {/* Image that fills the card */}
                                <img
                                    src={member.imageUrl}
                                    alt={member.name}
                                    className="w-full h-full object-cover aspect-[4/5]"
                                />

                                {/* Overlay content that appears on hover */}
                                <div className="absolute inset-0 bg-gray-900 bg-opacity-70 flex flex-col items-center justify-center p-6 text-center text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
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