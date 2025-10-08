import {useEffect, useRef, useState} from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { motion } from 'framer-motion';
import {Link} from 'react-router-dom';

const blogPosts = [
    {
        id: 1,
        title: 'The Ultimate Guide to Kitchen Renovations',
        description: 'Learn how to plan and execute a stunning kitchen remodel from start to finish with our expert tips and tricks.',
        coverImage: 'https://images.wsj.net/im-426915/social',
        createdAt: 'September 1, 2025',
    },
    {
        id: 2,
        title: 'Bathroom Design Trends for 2026',
        description: 'Discover the latest trends in bathroom design that will transform your space into a luxurious sanctuary.',
        coverImage: 'https://cdn.decorilla.com/images/1600/033ff5c2-fc27-4a39-b4bb-b1ea92f2364e/Contemporary-Bathroom-Remodel-with-Bold-Wallpapers.jpg?cv=1',
        createdAt: 'August 28, 2025',
    },
    {
        id: 3,
        title: 'Modern Living Room: A Minimalist Approach',
        description: 'Simple and elegant design principles to create a calm and inviting living room. Less is more!',
        coverImage: 'https://www.decorilla.com/online-decorating/wp-content/uploads/2022/03/Elegant-living-room-design-by-Decorillas-Theresa-G.jpg',
        createdAt: 'August 15, 2025',
    },
    {
        id: 4,
        title: 'Eco-Friendly Materials for Your Next Renovation',
        description: 'A guide to sustainable materials that are not only good for the planet but also durable and beautiful.',
        coverImage: 'https://goloadup.com/wp-content/uploads/2020/01/eco-modular-homes.jpg',
        createdAt: 'July 29, 2025',
    },
    {
        id: 5,
        title: 'Smart Home Technology to Elevate Your Space',
        description: 'Integrate smart technology into your home to boost efficiency, security, and convenience.',
        coverImage: 'https://www.cnet.com/a/img/resize/9272057ab65ffc32b58700050cfaea25e5b3f394/hub/2023/11/22/b03925e7-4221-4b2e-8064-1de4fa607cca/amazon-echo-show-8-2023-03.jpg?auto=webp&fit=crop&height=900&width=1200',
        createdAt: 'July 10, 2025',
    },
    {
        id: 6,
        title: 'Outdoor Spaces: Extending Your Home’s Functionality',
        description: 'Make the most of your outdoor area with practical design ideas for patios, decks, and gardens.',
        coverImage: 'https://progressivedesignbuild.com/wp-content/uploads/2019/03/Bonita-Bay-Fl-Outdoor-Kitchen-and-Living-Space-opt-1024x670.jpg',
        createdAt: 'June 25, 2025',
    },
    {
        id: 7,
        title: 'Creating a Functional Home Office',
        description: 'Tips and tricks for designing a productive and stylish home office.',
        coverImage: 'https://storage.googleapis.com/spacejoy-main/blog/article/5eb966da0a7cfd002420fa71/5eb966ef0a7cfd002420fa72.jpg',
        createdAt: 'June 10, 2025' },
    {
        id: 8,
        title: 'The Art of Decluttering Your Home',
        description: 'Simple steps to organize your space and create a serene living environment.',
        coverImage: 'https://media.architecturaldigest.com/photos/65986b10038de010900a053e/16:9/w_2560%2Cc_limit/December22.png',
        createdAt: 'May 25, 2025' },
];

const Blogs = () => {
    const [blogs, setBlogs] = useState(blogPosts.slice(0, 3)); // Start with a few posts
    const [loading, setLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);
    const loadMoreRef = useRef(null);

    const fetchMorePosts = () => {
        if (loading || !hasMore) return;

        setLoading(true);

        // Simulate an API call
        setTimeout(() => {
            const currentPostCount = blogs.length;
            const newPosts = blogPosts.slice(currentPostCount, currentPostCount + 3);
            setBlogs((prevPosts) => [...prevPosts, ...newPosts]);
            setLoading(false);

            if (blogs.length + newPosts.length >= blogPosts.length) {
                setHasMore(false);
            }
        }, 1000); // 1-second delay to simulate loading
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && hasMore && !loading) {
                    fetchMorePosts();
                }
            },
            { threshold: 1.0 }
        );

        if (loadMoreRef.current) {
            observer.observe(loadMoreRef.current);
        }

        return () => {
            if (loadMoreRef.current) {
                observer.unobserve(loadMoreRef.current);
            }
        };
    }, [hasMore, loading]);

    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow">
                {/* Hero Section */}
                <section className="relative py-24">
                    {/* Background Image with overlay for readability */}
                    <div className="absolute inset-0 z-0">
                        <img
                            src="https://t4.ftcdn.net/jpg/05/08/17/01/360_F_508170187_4Oonk4IG8u9eyfwSUvTASkT8hl71vRX2.jpg"
                            alt="Stylish interior design background"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gray-900 bg-opacity-60"></div>
                    </div>
                    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4">
                                Our Blog
                            </h1>
                            <p className="text-lg sm:text-xl max-w-3xl mx-auto">
                                Insights, tips, and inspiration for your next home renovation or design project.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Blog Posts Grid */}
                <section className="py-16 bg-gray-100">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {blogs.map((post, index) => (
                                <motion.div
                                    key={post.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                                >
                                    <Link to={`/blog/${post.id}`}>
                                        <img
                                            src={post.coverImage}
                                            alt={post.title}
                                            className="w-full h-56 object-cover rounded-t-xl"
                                        />
                                    </Link>
                                    <div className="p-6">
                                        <div className="flex justify-between items-center text-sm text-gray-500 mb-2">
                                            <span>{post.createdAt}</span>
                                        </div>
                                        <Link to={`/blog/${post.id}`} className="block">
                                            <h3 className="text-2xl font-bold text-gray-900 leading-tight mb-2 hover:text-indigo-700 transition-colors">
                                                {post.title}
                                            </h3>
                                        </Link>
                                        <p className="text-gray-600">{post.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                        {loading && (
                            <div className="flex justify-center py-8">
                                <p>Loading more posts...</p>
                            </div>
                        )}
                        {!hasMore && (
                            <div className="flex justify-center py-8">
                                <p>You've reached the end of the blog posts.</p>
                            </div>
                        )}
                        <div ref={loadMoreRef} className="h-1" />
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default Blogs;