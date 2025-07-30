import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import React, { useEffect, useLayoutEffect, useRef } from 'react';

const TestData = () => {
    const inputRef = useRef(null);

    const handleClick = () => {
      inputRef.current.focus();
    };
  
  return (
    <AuthenticatedLayout
      header={
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold leading-tight text-gray-800">Data Table</h2>
          <button className="px-4 py-2 bg-[#ff9022] text-white rounded-lg" onClick={() => setIsOpen(true)}>
            Data Test
          </button>
        </div>
      }
    >
      <Head title="Data Test" />
      
        <div className="p-4">
          
        <input ref={inputRef} type="text" />
        <button onClick={handleClick}>Focus Input</button>

        </div>
      
    </AuthenticatedLayout>
  );
};

export default TestData;
