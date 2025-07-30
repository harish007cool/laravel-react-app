import { Head, Link } from '@inertiajs/react';
import GuestLayout from '@/Layouts/GuestLayout';
import React, { useState } from "react";

export default function Blog({ auth }) {
    const handleImageError = () => {
        document
            .getElementById('screenshot-container')
            ?.classList.add('!hidden');
        document.getElementById('docs-card')?.classList.add('!row-span-1');
        document
            .getElementById('docs-card-content')
            ?.classList.add('!flex-row');
        document.getElementById('background')?.classList.add('!hidden');
    };
    // ImageSlider start

    const images = [
        "https://allinoneslider.com/wp-content/uploads/2019/06/all-in-one-slider-simple-full-width-1.jpg",
        "https://allinoneslider.com/wp-content/uploads/2019/06/all-in-one-slider-simple-full-width-1.jpg",
        "https://allinoneslider.com/wp-content/uploads/2019/06/all-in-one-slider-simple-full-width-1.jpg",
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    // ImageSlider end 


    return (
        <GuestLayout auth={auth}>
            <Head title="Blogs" />
            <div className="relative grid grid-cols-1 gap-4 max-w-[2000px] mx-auto  h-[500px] overflow-hidden mb-20">
                {/* Image */}
                <img
                    src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
                    alt="Beautiful Landscape"
                    className="w-full h-full object-cover shadow-md"
                />

                {/* Text Overlay */}
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white p-6">
                    <h1 className="text-3xl font-bold mb-2">Blogs</h1>
                    <h1 className="text-3xl font-bold mb-2">Beautiful Landscape</h1>
                    <p className="text-lg text-center">
                        This is a serene view of nature showcasing the beauty of mountains and lakes.
                    </p>
                </div>
            </div>
            <div className="grid grid-cols-1 gap-4 max-w-[1200px] mx-auto p-4 sm:grid-cols-3">
                {/* Large Image - spans 2 columns and 3 rows on larger screens */}
                <div className="relative col-span-1 sm:col-span-2 sm:row-span-3 h-[99%]">
                    {/* Image */}
                    <img
                        src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
                        alt="Beautiful Landscape"
                        className="w-full h-full object-cover rounded-lg shadow-md"
                    />

                    {/* Text Overlay */}

                </div>

                {/* Second Section */}
                <div className="bg-gray-200 flex flex-col items-start justify-center rounded-lg shadow-md col-span-1 p-6 max-w-prose mx-auto space-y-4">
                    {/* Heading */}
                    <p className="text-xl font-bold text-gray-800">
                        What is Lorem Ipsum?
                    </p>

                    {/* Body */}
                    <p className="text-sm text-gray-600 leading-relaxed">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>

                    <p className="text-sm text-gray-600 leading-relaxed">
                        It has survived not only five centuries, but also the leap into electronic typesetting,
                        remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets
                        containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker
                        including versions of Lorem Ipsum.
                    </p>
                </div>

                {/* Third Section */}
                <div className="bg-gray-200 flex flex-col items-start justify-center rounded-lg shadow-md col-span-1 p-6 max-w-prose mx-auto space-y-4">
                    {/* Heading */}
                    <p className="text-xl font-bold text-gray-800">
                        What is Lorem Ipsum?
                    </p>

                    {/* Body */}
                    <p className="text-sm text-gray-600 leading-relaxed">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>

                    <p className="text-sm text-gray-600 leading-relaxed">
                        It has survived not only five centuries, but also the leap into electronic typesetting,
                        remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets
                        containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker
                        including versions of Lorem Ipsum.
                    </p>
                </div>
            </div>
            <div className="relative grid grid-cols-1 gap-6 max-w-[2000px] mx-auto  overflow-hidden mb-20">
                {/* Features Section */}
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-lg shadow-lg">
                    <h2 className="text-3xl font-extrabold mb-8 text-gray-900 text-center uppercase tracking-wide">
                        Features
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            {
                                text: "Hello This is Test Web with react 1",
                                link: "/#",
                            },
                            {
                                text: "Hello This is Test Web with react 2",
                                link: "/#",
                            },
                            {
                                text: "Hello This is Test Web with react 3",
                                link: "/#",
                            },
                            {
                                text: "Hello This is Test Web with react 4",
                                link: "/#",
                            },
                        ].map((feature, index) => (
                            <div
                                key={index}
                                onClick={() => window.location.href = feature.link}
                                className="p-8 bg-white border-2 border-indigo-200 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 text-center cursor-pointer"
                            >
                                <h3 className="text-6xl font-bold text-indigo-500" style={{ color: '#ef7e39' }}>{index + 1}</h3>
                                <p className="mt-4 text-lg font-semibold text-gray-800">
                                    {feature.text}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Integration Section */}
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-lg shadow-lg">
                    <h2 className="text-3xl font-extrabold mb-8 text-gray-900 text-center uppercase tracking-wide">
                        Integration with Other Portals
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                           { text: "Next App1", link: "/#" },
                                { text: "Next App2", link: "/#" },
                                { text: "Next App3", link: "/#" },
                                { text: "Next App4", link: "/#" },
                        ].map((integration, index) => (
                            <div
                                key={index}
                                onClick={() => window.location.href = integration.link}
                                className="p-8 bg-white border-2 border-indigo-200 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 text-center cursor-pointer"
                            >
                                <h3 className="text-6xl font-bold text-teal-500" style={{ color: '#ef7e39' }}>{index + 1}</h3>
                                <p className="mt-4 text-lg font-semibold text-gray-800">
                                    {integration.text}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="relative grid grid-cols-1 gap-6 max-w-[2000px] mx-auto h-[500px] ">
                {/* Image Slider */}
                <div className="relative w-full h-full">
                    {/* Image */}
                    <img
                        src={images[currentIndex]}
                        alt="Slider Image"
                        className="w-full h-full object-cover"
                        onError={handleImageError}
                    />

                    {/* Text Overlay */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white bg-black/50 p-4">
                        <h1 className="text-4xl font-bold">Welcome to Our Platform</h1>
                        <p className="text-lg mt-2">Explore the services we offer and stay connected!</p>
                        <button
                            className="mt-4 px-6 py-2 bg-orange-500 text-white font-semibold rounded hover:bg-orange-600 transition"
                            onClick={() => alert('Get Started')}
                        >
                            Get Started
                        </button>
                    </div>

                    {/* Navigation Buttons */}
                    <button
                        onClick={handlePrev}
                        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-200"
                    >
                        &#8249; {/* Previous Arrow */}
                    </button>
                    <button
                        onClick={handleNext}
                        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-200"
                    >
                        &#8250; {/* Next Arrow */}
                    </button>
                </div>
            </div>
        </GuestLayout>
    );
}
