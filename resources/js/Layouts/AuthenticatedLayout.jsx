// import ApplicationLogo from '@/Components/ApplicationLogo';
// import Dropdown from '@/Components/Dropdown';
// import NavLink from '@/Components/NavLink';
// import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
// import { Link, usePage } from '@inertiajs/react';
// import { useState } from 'react';

// export default function AuthenticatedLayout({ header, children }) {
//     const user = usePage().props.auth.user;

//     const [showingNavigationDropdown, setShowingNavigationDropdown] =
//         useState(false);

//     return (
//         <div className="min-h-screen bg-gray-100">
//             <nav className="border-b border-gray-100 bg-white">
//                 <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//                     <div className="flex h-16 justify-between">
//                         <div className="flex">
//                             <div className="flex shrink-0 items-center">
//                                 <Link href="/">
//                                     <ApplicationLogo className="block h-9 w-auto fill-current text-gray-800" />
//                                 </Link>
//                             </div>

//                             <div className="hidden space-x-8 sm:-my-px sm:ms-10 sm:flex">
//                                 <NavLink
//                                     href={route('dashboard')}
//                                     active={route().current('dashboard')}
//                                 >
//                                     Dashboard
//                                 </NavLink>
//                             </div>
//                         </div>

//                         <div className="hidden sm:ms-6 sm:flex sm:items-center">
//                             <div className="relative ms-3">
//                                 <Dropdown>
//                                     <Dropdown.Trigger>
//                                         <span className="inline-flex rounded-md">
//                                             <button
//                                                 type="button"
//                                                 className="inline-flex items-center rounded-md border border-transparent bg-white px-3 py-2 text-sm font-medium leading-4 text-gray-500 transition duration-150 ease-in-out hover:text-gray-700 focus:outline-none"
//                                             >
//                                                 {user.name}

//                                                 <svg
//                                                     className="-me-0.5 ms-2 h-4 w-4"
//                                                     xmlns="http://www.w3.org/2000/svg"
//                                                     viewBox="0 0 20 20"
//                                                     fill="currentColor"
//                                                 >
//                                                     <path
//                                                         fillRule="evenodd"
//                                                         d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
//                                                         clipRule="evenodd"
//                                                     />
//                                                 </svg>
//                                             </button>
//                                         </span>
//                                     </Dropdown.Trigger>

//                                     <Dropdown.Content>
//                                         <Dropdown.Link
//                                             href={route('profile.edit')}
//                                         >
//                                             Profile
//                                         </Dropdown.Link>
//                                         <Dropdown.Link
//                                             href={route('logout')}
//                                             method="post"
//                                             as="button"
//                                         >
//                                             Log Out
//                                         </Dropdown.Link>
//                                     </Dropdown.Content>
//                                 </Dropdown>
//                             </div>
//                         </div>

//                         <div className="-me-2 flex items-center sm:hidden">
//                             <button
//                                 onClick={() =>
//                                     setShowingNavigationDropdown(
//                                         (previousState) => !previousState,
//                                     )
//                                 }
//                                 className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 transition duration-150 ease-in-out hover:bg-gray-100 hover:text-gray-500 focus:bg-gray-100 focus:text-gray-500 focus:outline-none"
//                             >
//                                 <svg
//                                     className="h-6 w-6"
//                                     stroke="currentColor"
//                                     fill="none"
//                                     viewBox="0 0 24 24"
//                                 >
//                                     <path
//                                         className={
//                                             !showingNavigationDropdown
//                                                 ? 'inline-flex'
//                                                 : 'hidden'
//                                         }
//                                         strokeLinecap="round"
//                                         strokeLinejoin="round"
//                                         strokeWidth="2"
//                                         d="M4 6h16M4 12h16M4 18h16"
//                                     />
//                                     <path
//                                         className={
//                                             showingNavigationDropdown
//                                                 ? 'inline-flex'
//                                                 : 'hidden'
//                                         }
//                                         strokeLinecap="round"
//                                         strokeLinejoin="round"
//                                         strokeWidth="2"
//                                         d="M6 18L18 6M6 6l12 12"
//                                     />
//                                 </svg>
//                             </button>
//                         </div>
//                     </div>
//                 </div>

//                 <div
//                     className={
//                         (showingNavigationDropdown ? 'block' : 'hidden') +
//                         ' sm:hidden'
//                     }
//                 >
//                     <div className="space-y-1 pb-3 pt-2">
//                         <ResponsiveNavLink
//                             href={route('dashboard')}
//                             active={route().current('dashboard')}
//                         >
//                             Dashboard
//                         </ResponsiveNavLink>
//                     </div>

//                     <div className="border-t border-gray-200 pb-1 pt-4">
//                         <div className="px-4">
//                             <div className="text-base font-medium text-gray-800">
//                                 {user.name}
//                             </div>
//                             <div className="text-sm font-medium text-gray-500">
//                                 {user.email}
//                             </div>
//                         </div>

//                         <div className="mt-3 space-y-1">
//                             <ResponsiveNavLink href={route('profile.edit')}>
//                                 Profile
//                             </ResponsiveNavLink>
//                             <ResponsiveNavLink
//                                 method="post"
//                                 href={route('logout')}
//                                 as="button"
//                             >
//                                 Log Out
//                             </ResponsiveNavLink>
//                         </div>
//                     </div>
//                 </div>
//             </nav>

//             {header && (
//                 <header className="bg-white shadow">
//                     <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
//                         {header}
//                     </div>
//                 </header>
//             )}

//             <main>{children}</main>
//         </div>
//     );
// }




import React, { useState, useEffect } from "react";
import ApplicationLogo from '@/Components/ApplicationLogo';
import Dropdown from '@/Components/Dropdown';
import { Link, usePage } from '@inertiajs/react';
import { Users } from "lucide-react";
import { TailSpin } from "react-loader-spinner";

export default function AuthenticatedLayout({ header, children }) {
    const user = usePage().props.auth.user;
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const timeout = setTimeout(() => {
            setLoading(false);
        }, 1000); // Simulated 1-second loading time

        return () => clearTimeout(timeout);
    }, []);
    return (

        <div className="flex min-h-screen bg-gray-100">
            {/* Sidebar */}
            <aside
                className={`${sidebarOpen ? 'block' : 'hidden'
                    } fixed inset-y-0 z-30 w-64 bg-white border-r border-gray-200 lg:block`}
                style={{ backgroundColor: '#f764005c' }}
            >
                <div className="flex items-center justify-center h-16 border-b">
                    <ApplicationLogo className=" w-auto" />
                </div>
                <nav className="mt-4 px-4" >
                    <ul className="space-y-2">
                        <li>
                            <Link
                                href={route('dashboard')}
                                className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 rounded-lg hover:bg-gray-100"
                            >
                                <span>🏠</span> Analytics Dashboard
                            </Link>
                        </li>
                        <li>

                            <Link
                                href={route('user-list')}
                                className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 rounded-lg hover:bg-gray-100"
                            >
                                <span><Users className="w-5 h-5 text-gray-600" /></span> User List
                            </Link>
                        </li>
                        <li>
                            <Link
                                href={route('multi-step-form')}
                                className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 rounded-lg hover:bg-gray-100"
                            >
                                <span>📧</span> Data Table
                            </Link>
                        </li>

                        <li>
                            <Link
                                href={route('test')}
                                className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 rounded-lg hover:bg-gray-100"
                            >
                                <span>📧</span> Data Test
                            </Link>
                        </li>
                        {/* Add more links as needed */}
                    </ul>
                </nav>
            </aside>

            {/* Main content */}
            <div className="flex flex-1 flex-col lg:ml-64">
                {/* Top navigation */}
                <nav className="flex items-center justify-between h-16 px-4  border-b border-gray-200   bg-[rgba(247,100,0,0.36)] ">
                    <button
                        className="text-gray-500 lg:hidden"
                        onClick={() => setSidebarOpen(!sidebarOpen)}
                    >
                        <svg
                            className="w-6 h-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </button>
                    <div className="flex items-center gap-4" style={{ marginLeft: 'auto' }}>
                        <span className="text-gray-700">{user.name}</span>
                        <Dropdown>
                            <Dropdown.Trigger>
                                <button className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg">
                                    <span>{user.name}</span>
                                    <svg
                                        className="w-4 h-4"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </button>
                            </Dropdown.Trigger>
                            <Dropdown.Content>
                                <Dropdown.Link href={route('profile.edit')}>
                                    Profile
                                </Dropdown.Link>
                                <Dropdown.Link
                                    href={route('logout')}
                                    method="post"
                                    as="button"
                                >
                                    Log Out
                                </Dropdown.Link>
                            </Dropdown.Content>
                        </Dropdown>
                    </div>
                </nav>

                {/* Page header */}
                {header && (
                    <header className="bg-white shadow" style={{ backgroundColor: '#db641317' }}>
                        <div className="mx-auto py-6 px-4 sm:px-6 lg:px-8 mt-63" >
                            {header}
                        </div>
                    </header>
                )}

                {/* Page content */}
                {loading ? (
                    <div className="relative h-screen">
                        <div className="flex justify-center items-center h-[80%]">
                            <div className="relative flex justify-center items-center">
                                <div className="animate-ping absolute inline-flex h-16 w-16 rounded-full  opacity-75" style={{ backgroundColor: '#f76400' }}></div>
                                <div className="relative inline-flex rounded-full h-16 w-16 " style={{ backgroundColor: '#f76400' }}></div>
                            </div>
                        </div>
                        <h2 className="absolute bottom-0 w-full text-center mb-[490px] ml-[9px]">
                            loading.......
                        </h2>
                    </div>
                ) : (
                    <main className="flex-1 p-4">{children}</main>
                )}
            </div>
        </div>
    );
}
