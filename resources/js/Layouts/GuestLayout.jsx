import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';
import { TailSpin } from "react-loader-spinner";
import React, { useState, useEffect } from "react";
export default function GuestLayout({ children, auth = { user: null } }) {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const timeout = setTimeout(() => {
            setLoading(false);
        }, 1000); // Simulated 1-second loading time

        return () => clearTimeout(timeout);
    }, []);
    return (
        <>
            {/* Header */}
            <header
                className="absolute bg-gray-900 top-0 left-0 w-full px-4"
                style={{ background: '#f76400', position: 'fixed', zIndex: '200' }}
            >
                <div className="hidden md:flex justify-between items-center py-2 border-b text-sm py-3 border-opacity-25 border-white">
                    <div>
                        <ul className="flex text-white">
                            <li>
                                <div className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 fill-current text-white" viewBox="0 0 24 24">
                                        <path d="M12,2C7.589,2,4,5.589,4,9.995C3.971,16.44,11.696,21.784,12,22c0,0,8.029-5.56,8-12C20,5.589,16.411,2,12,2z M12,14c-2.21,0-4-1.79-4-4s1.79-4,4-4s4,1.79,4,4S14.21,14,12,14z" />
                                    </svg>
                                    <span className="ml-2">XYXZ Kerry Way, Whittier, CA, USA</span>
                                </div>
                            </li>
                            <li className="ml-6">
                                <div className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 fill-current text-white" viewBox="0 0 24 24">
                                        <path d="M14.594,13.994l-1.66,1.66c-0.577-0.109-1.734-0.471-2.926-1.66c-1.193-1.193-1.553-2.354-1.661-2.926l1.661-1.66l0.701-0.701L5.295,3.293L4.594,3.994l-1,1C3.42,5.168,3.316,5.398,3.303,5.643c-0.015,0.25-0.302,6.172,4.291,10.766C11.6,20.414,16.618,20.707,18,20.707c0.202,0,0.326-0.006,0.358-0.008c0.245-0.014,0.476-0.117,0.649-0.291l1-1l0.697-0.697l-5.414-5.414L14.594,13.994z" />
                                    </svg>
                                    <span className="ml-2">+91 343-563-3452</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <ul className="flex justify-end text-white">
                            <li>
                                <a href="#" target="_blank" title="">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
                                        <path d="M20,3H4C3.447,3,3,3.448,3,4v16c0,0.552,0.447,1,1,1h8.615v-6.96h-2.338v-2.725h2.338v-2c0-2.325,1.42-3.592,3.5-3.592c0.699-0.002,1.399,0.034,2.095,0.107v2.42h-1.435c-1.128,0-1.348,0.538-1.348,1.325v1.735h2.697l-0.35,2.725h-2.348V21H20c0.553,0,1-0.448,1-1V4C21,3.448,20.553,3,20,3z" />
                                    </svg>
                                </a>
                            </li>
                            <li className="ml-6">
                                <a href="#" target="_blank" title="">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
                                        <path d="M19.633,7.997c0.013,0.175,0.013,0.349,0.013,0.523c0,5.325-4.053,11.461-11.46,11.461c-2.282,0-4.402-0.661-6.186-1.809c0.324,0.037,0.636,0.05,0.973,0.05c1.883,0,3.616-0.636,5.001-1.721c-1.771-0.037-3.255-1.197-3.767-2.793c0.249,0.037,0.499,0.062,0.761,0.062c0.361,0,0.724-0.05,1.061-0.137c-1.847-0.374-3.23-1.995-3.23-3.953v-0.05c0.537,0.299,1.16,0.486,1.82,0.511C3.534,9.419,2.823,8.184,2.823,6.787c0-0.748,0.199-1.434,0.548-2.032c1.983,2.443,4.964,4.04,8.306,4.215c-0.062-0.3-0.1-0.611-0.1-0.923c0-2.22,1.796-4.028,4.028-4.028c1.16,0,2.207,0.486,2.943,1.272c0.91-0.175,1.782-0.512,2.556-0.973c-0.299,0.935-0.936,1.721-1.771,2.22c0.811-0.088,1.597-0.312,2.319-0.624C21.104,6.712,20.419,7.423,19.633,7.997z" />
                                    </svg>
                                </a>
                            </li>
                            <li className="ml-6">
                                <a href="#" target="_blank" title="">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
                                        <path d="M20.947,8.305c-0.011-0.757-0.151-1.508-0.419-2.216c-0.469-1.209-1.424-2.165-2.633-2.633c-0.699-0.263-1.438-0.404-2.186-0.42C14.747,2.993,14.442,2.981,12,2.981s-2.755,0-3.71,0.055c-0.747,0.016-1.486,0.157-2.185,0.42C4.896,3.924,3.94,4.88,3.472,6.089C3.209,6.788,3.067,7.527,3.053,8.274c-0.043,0.963-0.056,1.268-0.056,3.71s0,2.754,0.056,3.71c0.015,0.748,0.156,1.486,0.419,2.187c0.469,1.208,1.424,2.164,2.634,2.632c0.696,0.272,1.435,0.426,2.185,0.45c0.963,0.043,1.268,0.056,3.71,0.056s2.755,0,3.71-0.056c0.747-0.015,1.486-0.156,2.186-0.419c1.209-0.469,2.164-1.425,2.633-2.633c0.263-0.7,0.404-1.438,0.419-2.187c0.043-0.962,0.056-1.267,0.056-3.71C21.003,9.572,21.003,9.262,20.947,8.305z M11.994,16.602c-2.554,0-4.623-2.069-4.623-4.623s2.069-4.623,4.623-4.623c2.552,0,4.623,2.069,4.623,4.623S14.546,16.602,11.994,16.602z M16.801,8.263c-0.597,0-1.078-0.482-1.078-1.078s0.481-1.078,1.078-1.078c0.595,0,1.077,0.482,1.077,1.078S17.396,8.263,16.801,8.263z" />
                                        <circle cx="11.994" cy="11.979" r="3.003" />
                                    </svg>
                                </a>
                            </li>
                            <li className="ml-6">
                                <a href="#" target="_blank" title="">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
                                        <path d="M21.593,7.203c-0.23-0.858-0.905-1.535-1.762-1.766C18.265,5.007,12,5,12,5S5.736,4.993,4.169,5.404c-0.84,0.229-1.534,0.921-1.766,1.778c-0.413,1.566-0.417,4.814-0.417,4.814s-0.004,3.264,0.406,4.814c0.23,0.857,0.905,1.534,1.763,1.765c1.582,0.43,7.83,0.437,7.83,0.437s6.265,0.007,7.831-0.403c0.856-0.23,1.534-0.906,1.767-1.763C21.997,15.281,22,12.034,22,12.034S22.02,8.769,21.593,7.203z M9.996,15.005l0.005-6l5.207,3.005L9.996,15.005z" />
                                    </svg>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="flex flex-wrap items-center justify-between py-6">
                    <div className="w-1/2 md:w-auto">
                        <Link href="/" className="text-white font-bold text-2xl">
                           Hello This is Test Web with react
                        </Link>
                    </div>

                    <label htmlFor="menu-toggle" className="pointer-cursor md:hidden block">
                        <svg className="fill-current text-white" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                            <title>menu</title>
                            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                        </svg>
                    </label>

                    <input className="hidden" type="checkbox" id="menu-toggle" />

                    <div className="hidden md:block w-full md:w-auto mt-2" id="menu" style={{ zIndex: '200' }}>
                        <nav className="w-full bg-white md:bg-transparent rounded shadow-lg px-6 py-4 mt-4 text-center md:p-0 md:mt-0 md:shadow-none">
                            <ul className="md:flex items-center">
                                <li className='nav-data'>
                                    <Link href={route('about-us')} className="py-2 inline-block md:text-white md:px-2 font-semibold hover:scale-125">AboutUs</Link>
                                </li>



                                <li className="md:ml-4 md:hidden lg:block nav-data">
                                    <Link href={route('blog')} className="py-2 inline-block md:text-white md:px-2 font-semibold hover:scale-125">Blog</Link>
                                </li>
                                <li className="md:ml-4 nav-data"><Link href={route('contact-us')} className="py-2 inline-block md:text-white md:px-2 font-semibold hover:scale-125">Contact Us</Link></li>
                                <li className="md:ml-6 mt-3 md:mt-0">
                                    {auth.user ? (
                                        <Link
                                            href={route('dashboard')}
                                            className="inline-block font-semibold px-4 py-2 text-white bg-blue-600 md:bg-transparent md:text-white border border-white rounded hover:bg-[#d95300] hover:scale-110" style={{ marginRight: '20px' }}
                                        >
                                            Dashboard
                                        </Link>
                                    ) : (
                                        <>
                                            <Link
                                                href={route('login')}
                                                className="inline-block font-semibold px-4 py-2 text-white bg-blue-600 md:bg-transparent md:text-white border border-white rounded hover:bg-[#d95300] hover:scale-110"
                                                style={{ marginRight: '20px' }}
                                            >
                                                Log in
                                            </Link>
                                            <Link
                                                href={route('register')}
                                                className="inline-block font-semibold px-4 py-2 text-white bg-blue-600 md:bg-transparent md:text-white border border-white rounded  hover:bg-[#d95300] hover:scale-110"
                                            >
                                                Register
                                            </Link>
                                        </>
                                    )}
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
            {loading ? (
                // <div className="relative h-screen">
                //     <div className="flex justify-center items-center h-[80%] mt-[100px]">
                //         <div className="w-8 h-8  rounded-full animate-bounce" style={{ backgroundColor: '#f76400' }}></div>
                //     </div>
                //     <h2 className="absolute bottom-0 w-full text-center mb-[535px] ml-[9px]">
                //         loading.......
                //     </h2>
                // </div>
                <div class="flex items-center justify-center w-full h-[100vh] text-[#f76400] dark:text-[#f76400] dark:bg-[#f76400]">
                <div>
                    <h1 class="text-xl md:text-3xl font-bold flex items-center">L<svg stroke="currentColor" fill="currentColor" stroke-width="0"
                        viewBox="0 0 24 24" class="animate-spin" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path
                        d="M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2ZM13.6695 15.9999H10.3295L8.95053 17.8969L9.5044 19.6031C10.2897 19.8607 11.1286 20 12 20C12.8714 20 13.7103 19.8607 14.4956 19.6031L15.0485 17.8969L13.6695 15.9999ZM5.29354 10.8719L4.00222 11.8095L4 12C4 13.7297 4.54894 15.3312 5.4821 16.6397L7.39254 16.6399L8.71453 14.8199L7.68654 11.6499L5.29354 10.8719ZM18.7055 10.8719L16.3125 11.6499L15.2845 14.8199L16.6065 16.6399L18.5179 16.6397C19.4511 15.3312 20 13.7297 20 12L19.997 11.81L18.7055 10.8719ZM12 9.536L9.656 11.238L10.552 14H13.447L14.343 11.238L12 9.536ZM14.2914 4.33299L12.9995 5.27293V7.78993L15.6935 9.74693L17.9325 9.01993L18.4867 7.3168C17.467 5.90685 15.9988 4.84254 14.2914 4.33299ZM9.70757 4.33329C8.00021 4.84307 6.53216 5.90762 5.51261 7.31778L6.06653 9.01993L8.30554 9.74693L10.9995 7.78993V5.27293L9.70757 4.33329Z">
                        </path>
                    </svg> ading . . .</h1>
                </div>
                </div>

            ) : (
                <div className="w-full overflow-hidden bg-white  ">
                    {/* <div className='parent-container'> */}
                    {children}
                    {/* </div> */}
                </div>
            )}

            <section id="AppSection" className="bg-gray-900 pb-0 text-white h-[400px]">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap justify-center items-center">
                        {/* Left Content */}
                        <div className="w-full lg:w-5/12 mb-6 lg:mb-0">
                            <div className="mb-6 md:mb-9">
                                <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">
                                   Hello This is Test Web with react
                                </h2>
                                <p className="mb-4">
                                    Use our application to stay informed about news, get updates, and assistance!
                                </p>
                            </div>
                            <div className="flex items-center">
                                <a
                                    href="#"
                                    className="mr-2"
                                >
                                    <img
                                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSADMTEo4YEurEn-gXFBOfumKYAJMviq-T9ww&s"
                                        alt="Google Play Store"
                                        className="h-12"
                                    />
                                </a>
                            </div>
                        </div>

                        {/* Middle Content (Empty Placeholder) */}
                        <div className="w-full lg:w-4/12 py-4"></div>

                        {/* Right Image */}
                        <div className="w-full lg:w-3/12 flex justify-center">
                            <div className="max-w-xs">
                                <img
                                    src="https://upload.wikimedia.org/wikipedia/commons/4/4b/Mobile.png"
                                    className="w-full h-auto lg:mt-[115px] mt-0"
                                    alt="Hello This is Test Web with react"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Footer */}
            <footer className="relative bg-white-900 text-white px-4  py-12 " style={{ backgroundColor: '#f76400' }}>
                <div className="flex flex-col md:flex-row">
                    <div className="w-full lg:w-2/6 lg:mx-4 lg:pr-8">
                        <h3 className="font-bold text-2xl">Hello This is Test Web with react</h3>
                        <p className="text-white-400">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.</p>

                        <form className="flex items-center mt-6">
                            <div className="w-full">
                                <label className="block uppercase tracking-wide text-white-600 text-xs font-bold mb-2" htmlFor="grid-last-name">
                                    Subscribe for our Newsletter
                                </label>
                                <div className="relative">
                                    <input
                                        className="appearance-none block w-full bg-white-200 text-white-700 border border-white-200 rounded py-4 px-4 leading-tight focus:outline-none focus:bg-white focus:border-white-500"
                                        type="email" placeholder="Enter Your Email Address"
                                    />
                                    <button type="submit" className="bg-teal-500 hover:bg-teal-400 text-white px-4 py-2 text-sm font-bold rounded absolute top-0 right-0 my-2 mr-2">
                                        Subscribe
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>

                    <div className="w-full lg:w-1/6 mt-8 lg:mt-0 lg:mx-4">
                        <h5 className="uppercase tracking-wider font-semibold text-white-500">Treatments</h5>
                        <ul className="mt-4">
                            <li className="mt-2"><Link href="#" className="opacity-75 hover:opacity-100">General Dentistry</Link></li>
                            <li className="mt-2"><Link href="#" className="opacity-75 hover:opacity-100">Cosmetic Dentistry</Link></li>
                            <li className="mt-2"><Link href="#" className="opacity-75 hover:opacity-100">Oral Health</Link></li>
                        </ul>
                    </div>

                    <div className="w-full lg:w-2/6 mt-8 lg:mt-0 lg:mx-4 lg:pr-8">
                        <h5 className="uppercase tracking-wider font-semibold text-white-500">Contact Details</h5>
                        <ul className="mt-4">
                            <li>
                                <Link href="#" className="block flex items-center opacity-75 hover:opacity-100">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
                                        <path d="M12,2C7.589,2,4,5.589,4,9.995C3.971,16.44,11.696,21.784,12,22c0,0,8.029-5.56,8-12C20,5.589,16.411,2,12,2z M12,14c-2.21,0-4-1.79-4-4s1.79-4,4-4s4,1.79,4,4S14.21,14,12,14z" />
                                    </svg>
                                    <span className="ml-3">6533 Kerry Way, Whittier, CA, USA</span>
                                </Link>
                            </li>
                            <li className="mt-4">
                                <Link href="#" className="block flex items-center opacity-75 hover:opacity-100">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
                                        <path d="M12,2C6.486,2,2,6.486,2,12s4.486,10,10,10c5.514,0,10-4.486,10-10S17.514,2,12,2z M12,20c-4.411,0-8-3.589-8-8s3.589-8,8-8s8,3.589,8,8S16.411,20,12,20z" />
                                        <path d="M13 7L11 7 11 13 17 13 17 11 13 11z" />
                                    </svg>
                                    <span className="ml-3">Mon - Fri: 9:00 - 19:00<br />Closed on Weekends</span>
                                </Link>
                            </li>
                            <li className="mt-4">
                                <Link href="#" className="block flex items-center opacity-75 hover:opacity-100">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
                                        <path d="M14.594,13.994l-1.66,1.66c-0.577-0.109-1.734-0.471-2.926-1.66c-1.193-1.193-1.553-2.354-1.661-2.926l1.661-1.66l0.701-0.701L5.295,3.293L4.594,3.994l-1,1C3.42,5.168,3.316,5.398,3.303,5.643c-0.015,0.25-0.302,6.172,4.291,10.766C11.6,20.414,16.618,20.707,18,20.707c0.202,0,0.326-0.006,0.358-0.008c0.245-0.014,0.476-0.117,0.649-0.291l1-1l0.697-0.697l-5.414-5.414L14.594,13.994z" />
                                    </svg>
                                    <span className="ml-3">+91 343-563-3452</span>
                                </Link>
                            </li>
                            <li className="mt-4">
                                <Link href="#" className="block flex items-center opacity-75 hover:opacity-100">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
                                        <path d="M20,4H4C2.896,4,2,4.896,2,6v12c0,1.104,0.896,2,2,2h16c1.104,0,2-0.896,2-2V6C22,4.896,21.104,4,20,4z M20,8.7l-8,5.334L4,8.7V6.297l8,5.333l8-5.333V8.7z" />
                                    </svg>
                                    <span className="ml-3">Hello This is Test Web with react Helpline@example.com</span>
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="w-full lg:w-1/6 mt-8 lg:mt-0 lg:mx-4">
                        <h5 className="uppercase tracking-wider font-semibold text-white-500">We're Social</h5>
                        <ul className="mt-4 flex">
                            <li>
                                <Link href="#" target="_blank" title="">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
                                        <path d="M20,3H4C3.447,3,3,3.448,3,4v16c0,0.552,0.447,1,1,1h8.615v-6.96h-2.338v-2.725h2.338v-2c0-2.325,1.42-3.592,3.5-3.592c0.699-0.002,1.399,0.034,2.095,0.107v2.42h-1.435c-1.128,0-1.348,0.538-1.348,1.325v1.735h2.697l-0.35,2.725h-2.348V21H20c0.553,0,1-0.448,1-1V4C21,3.448,20.553,3,20,3z" />
                                    </svg>
                                </Link>
                            </li>
                            <li className="ml-6">
                                <Link href="#" target="_blank" title="">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
                                        <path d="M19.633,7.997c0.013,0.175,0.013,0.349,0.013,0.523c0,5.325-4.053,11.461-11.46,11.461c-2.282,0-4.402-0.661-6.186-1.809c0.324,0.037,0.636,0.05,0.973,0.05c1.883,0,3.616-0.636,5.001-1.721c-1.771-0.037-3.255-1.197-3.767-2.793c0.249,0.037,0.499,0.062,0.761,0.062c0.361,0,0.724-0.05,1.061-0.137c-1.847-0.374-3.23-1.995-3.23-3.953v-0.05c0.537,0.299,1.16,0.486,1.82,0.511C3.534,9.419,2.823,8.184,2.823,6.787c0-0.748,0.199-1.434,0.548-2.032c1.983,2.443,4.964,4.04,8.306,4.215c-0.062-0.3-0.1-0.611-0.1-0.923c0-2.22,1.796-4.028,4.028-4.028c1.16,0,2.207,0.486,2.943,1.272c0.91-0.175,1.782-0.512,2.556-0.973c-0.299,0.935-0.936,1.721-1.771,2.22c0.811-0.088,1.597-0.312,2.319-0.624C21.104,6.712,20.419,7.423,19.633,7.997z" />
                                    </svg>
                                </Link>
                            </li>
                            <li className="ml-6">
                                <Link href="#" target="_blank" title="">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
                                        <path d="M20.947,8.305c-0.011-0.757-0.151-1.508-0.419-2.216c-0.469-1.209-1.424-2.165-2.633-2.633c-0.699-0.263-1.438-0.404-2.186-0.42C14.747,2.993,14.442,2.981,12,2.981s-2.755,0-3.71,0.055c-0.747,0.016-1.486,0.157-2.185,0.42C4.896,3.924,3.94,4.88,3.472,6.089C3.209,6.788,3.067,7.527,3.053,8.274c-0.043,0.963-0.056,1.268-0.056,3.71s0,2.754,0.056,3.71c0.015,0.748,0.156,1.486,0.419,2.187c0.469,1.208,1.424,2.164,2.634,2.632c0.696,0.272,1.435,0.426,2.185,0.45c0.963,0.043,1.268,0.056,3.71,0.056s2.755,0,3.71-0.056c0.747-0.015,1.486-0.156,2.186-0.419c1.209-0.469,2.164-1.425,2.633-2.633c0.263-0.7,0.404-1.438,0.419-2.187c0.043-0.962,0.056-1.267,0.056-3.71C21.003,9.572,21.003,9.262,20.947,8.305z M11.994,16.602c-2.554,0-4.623-2.069-4.623-4.623s2.069-4.623,4.623-4.623c2.552,0,4.623,2.069,4.623,4.623S14.546,16.602,11.994,16.602z M16.801,8.263c-0.597,0-1.078-0.482-1.078-1.078s0.481-1.078,1.078-1.078c0.595,0,1.077,0.482,1.077,1.078S17.396,8.263,16.801,8.263z" />
                                        <circle cx="11.994" cy="11.979" r="3.003" />
                                    </svg>
                                </Link>
                            </li>
                            <li className="ml-6">
                                <Link href="#" target="_blank" title="">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
                                        <path d="M21.593,7.203c-0.23-0.858-0.905-1.535-1.762-1.766C18.265,5.007,12,5,12,5S5.736,4.993,4.169,5.404c-0.84,0.229-1.534,0.921-1.766,1.778c-0.413,1.566-0.417,4.814-0.417,4.814s-0.004,3.264,0.406,4.814c0.23,0.857,0.905,1.534,1.763,1.765c1.582,0.43,7.83,0.437,7.83,0.437s6.265,0.007,7.831-0.403c0.856-0.23,1.534-0.906,1.767-1.763C21.997,15.281,22,12.034,22,12.034S22.02,8.769,21.593,7.203z M9.996,15.005l0.005-6l5.207,3.005L9.996,15.005z" />
                                    </svg>
                                </Link>
                            </li>
                        </ul>

                        <p className="text-sm text-white-400 mt-12">© 2025 ProDentists. <br className="hidden lg:block" />All Rights Reserved.</p>
                    </div>
                </div>
            </footer>
        </>
    );
}