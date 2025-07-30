import React, { useState, useEffect } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

const MultiStepForm = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [entriesPerPage, setEntriesPerPage] = useState(15);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortConfig, setSortConfig] = useState({ key: null, direction: null });






  const imgData = "pngtree-colorful-loading-icon-png-image_2152960.jpg"; // Replace with the actual URL or path
  const data = [
    { name: "Airi Satou", position: "Accountant", office: "Tokyo", age: 33, startDate: "2008-11-28", salary: "$162,700" },
    { name: "Angelica Ramos", position: "CEO", office: "London", age: 47, startDate: "2009-10-09", salary: "$1,200,000" },
    { name: "Ashton Cox", position: "Junior Technical Author", office: "San Francisco", age: 66, startDate: "2009-01-12", salary: "$86,000" },
    { name: "Bradley Greer", position: "Software Engineer", office: "London", age: 41, startDate: "2012-10-13", salary: "$132,000" },
    { name: "Brenden Wagner", position: "Software Engineer", office: "San Francisco", age: 28, startDate: "2011-06-07", salary: "$206,850" },
    { name: "Brielle Williamson", position: "Integration Specialist", office: "New York", age: 61, startDate: "2012-12-02", salary: "$372,000" },
    { name: "Bruno Nash", position: "Software Engineer", office: "London", age: 38, startDate: "2011-05-03", salary: "$163,500" },
    { name: "Caesar Vance", position: "Pre-Sales Support", office: "New York", age: 21, startDate: "2011-12-12", salary: "$106,450" },
    { name: "Cara Stevens", position: "Sales Assistant", office: "New York", age: 46, startDate: "2012-12-06", salary: "$145,600" },
    { name: "Cedric Kelly", position: "Senior Javascript Developer", office: "Edinburgh", age: 22, startDate: "2012-03-29", salary: "$433,060" },
    // Add more data as needed
    { name: "Airi Satou", position: "Accountant", office: "Tokyo", age: 33, startDate: "2008-11-28", salary: "$162,700" },
    { name: "Angelica Ramos", position: "CEO", office: "London", age: 47, startDate: "2009-10-09", salary: "$1,200,000" },
    { name: "Ashton Cox", position: "Junior Technical Author", office: "San Francisco", age: 66, startDate: "2009-01-12", salary: "$86,000" },
    { name: "Bradley Greer", position: "Software Engineer", office: "London", age: 41, startDate: "2012-10-13", salary: "$132,000" },
    { name: "Brenden Wagner", position: "Software Engineer", office: "San Francisco", age: 28, startDate: "2011-06-07", salary: "$206,850" },
    { name: "Brielle Williamson", position: "Integration Specialist", office: "New York", age: 61, startDate: "2012-12-02", salary: "$372,000" },
    { name: "Bruno Nash", position: "Software Engineer", office: "London", age: 38, startDate: "2011-05-03", salary: "$163,500" },
    { name: "Caesar Vance", position: "Pre-Sales Support", office: "New York", age: 21, startDate: "2011-12-12", salary: "$106,450" },
    { name: "Cara Stevens", position: "Sales Assistant", office: "New York", age: 46, startDate: "2012-12-06", salary: "$145,600" },
    { name: "Cedric Kelly", position: "Senior Javascript Developer", office: "Edinburgh", age: 22, startDate: "2012-03-29", salary: "$433,060" },
    { name: "Airi Satou", position: "Accountant", office: "Tokyo", age: 33, startDate: "2008-11-28", salary: "$162,700" },
    { name: "Angelica Ramos", position: "CEO", office: "London", age: 47, startDate: "2009-10-09", salary: "$1,200,000" },
    { name: "Ashton Cox", position: "Junior Technical Author", office: "San Francisco", age: 66, startDate: "2009-01-12", salary: "$86,000" },
    { name: "Bradley Greer", position: "Software Engineer", office: "London", age: 41, startDate: "2012-10-13", salary: "$132,000" },
    { name: "Brenden Wagner", position: "Software Engineer", office: "San Francisco", age: 28, startDate: "2011-06-07", salary: "$206,850" },
    { name: "Brielle Williamson", position: "Integration Specialist", office: "New York", age: 61, startDate: "2012-12-02", salary: "$372,000" },
    { name: "Bruno Nash", position: "Software Engineer", office: "London", age: 38, startDate: "2011-05-03", salary: "$163,500" },
    { name: "Caesar Vance", position: "Pre-Sales Support", office: "New York", age: 21, startDate: "2011-12-12", salary: "$106,450" },
    { name: "Cara Stevens", position: "Sales Assistant", office: "New York", age: 46, startDate: "2012-12-06", salary: "$145,600" },
    { name: "Cedric Kelly", position: "Senior Javascript Developer", office: "Edinburgh", age: 22, startDate: "2012-03-29", salary: "$433,060" },
    { name: "Airi Satou", position: "Accountant", office: "Tokyo", age: 33, startDate: "2008-11-28", salary: "$162,700" },
    { name: "Angelica Ramos", position: "CEO", office: "London", age: 47, startDate: "2009-10-09", salary: "$1,200,000" },
    { name: "Ashton Cox", position: "Junior Technical Author", office: "San Francisco", age: 66, startDate: "2009-01-12", salary: "$86,000" },
    { name: "Bradley Greer", position: "Software Engineer", office: "London", age: 41, startDate: "2012-10-13", salary: "$132,000" },
    { name: "Brenden Wagner", position: "Software Engineer", office: "San Francisco", age: 28, startDate: "2011-06-07", salary: "$206,850" },
    { name: "Brielle Williamson", position: "Integration Specialist", office: "New York", age: 61, startDate: "2012-12-02", salary: "$372,000" },
    { name: "Bruno Nash", position: "Software Engineer", office: "London", age: 38, startDate: "2011-05-03", salary: "$163,500" },
    { name: "Caesar Vance", position: "Pre-Sales Support", office: "New York", age: 21, startDate: "2011-12-12", salary: "$106,450" },
    { name: "Cara Stevens", position: "Sales Assistant", office: "New York", age: 46, startDate: "2012-12-06", salary: "$145,600" },
    { name: "Cedric Kelly", position: "Senior Javascript Developer", office: "Edinburgh", age: 22, startDate: "2012-03-29", salary: "$433,060" },
    { name: "Airi Satou", position: "Accountant", office: "Tokyo", age: 33, startDate: "2008-11-28", salary: "$162,700" },
    { name: "Angelica Ramos", position: "CEO", office: "London", age: 47, startDate: "2009-10-09", salary: "$1,200,000" },
    { name: "Ashton Cox", position: "Junior Technical Author", office: "San Francisco", age: 66, startDate: "2009-01-12", salary: "$86,000" },
    { name: "Bradley Greer", position: "Software Engineer", office: "London", age: 41, startDate: "2012-10-13", salary: "$132,000" },
    { name: "Brenden Wagner", position: "Software Engineer", office: "San Francisco", age: 28, startDate: "2011-06-07", salary: "$206,850" },
    { name: "Brielle Williamson", position: "Integration Specialist", office: "New York", age: 61, startDate: "2012-12-02", salary: "$372,000" },
    { name: "Bruno Nash", position: "Software Engineer", office: "London", age: 38, startDate: "2011-05-03", salary: "$163,500" },
    { name: "Caesar Vance", position: "Pre-Sales Support", office: "New York", age: 21, startDate: "2011-12-12", salary: "$106,450" },
    { name: "Cara Stevens", position: "Sales Assistant", office: "New York", age: 46, startDate: "2012-12-06", salary: "$145,600" },
    { name: "Cedric Kelly", position: "Senior Javascript Developer", office: "Edinburgh", age: 22, startDate: "2012-03-29", salary: "$433,060" },
    { name: "Airi Satou", position: "Accountant", office: "Tokyo", age: 33, startDate: "2008-11-28", salary: "$162,700" },
    { name: "Angelica Ramos", position: "CEO", office: "London", age: 47, startDate: "2009-10-09", salary: "$1,200,000" },
    { name: "Ashton Cox", position: "Junior Technical Author", office: "San Francisco", age: 66, startDate: "2009-01-12", salary: "$86,000" },
    { name: "Bradley Greer", position: "Software Engineer", office: "London", age: 41, startDate: "2012-10-13", salary: "$132,000" },
    { name: "Brenden Wagner", position: "Software Engineer", office: "San Francisco", age: 28, startDate: "2011-06-07", salary: "$206,850" },
    { name: "Brielle Williamson", position: "Integration Specialist", office: "New York", age: 61, startDate: "2012-12-02", salary: "$372,000" },
    { name: "Bruno Nash", position: "Software Engineer", office: "London", age: 38, startDate: "2011-05-03", salary: "$163,500" },
    { name: "Caesar Vance", position: "Pre-Sales Support", office: "New York", age: 21, startDate: "2011-12-12", salary: "$106,450" },
    { name: "Cara Stevens", position: "Sales Assistant", office: "New York", age: 46, startDate: "2012-12-06", salary: "$145,600" },
    { name: "Cedric Kelly", position: "Senior Javascript Developer", office: "Edinburgh", age: 22, startDate: "2012-03-29", salary: "$433,060" },
  ];



  const filteredData = data
    .filter(
      (item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.position.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.office.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (sortConfig.key) {
        const aValue = a[sortConfig.key];
        const bValue = b[sortConfig.key];
        if (typeof aValue === "string" && typeof bValue === "string") {
          return sortConfig.direction === "asc" ? aValue.localeCompare(bValue) : bValue.localeCompare(aValue);
        }
        return sortConfig.direction === "asc" ? aValue - bValue : bValue - aValue;
      }
      return 0;
    });

  const totalPages = Math.ceil(filteredData.length / entriesPerPage);
  const displayedData = filteredData.slice((currentPage - 1) * entriesPerPage, currentPage * entriesPerPage);

  const handleChangePage = (page) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const handleSort = (key) => {
    setSortConfig((prev) => {
      if (prev.key === key) {
        return { key, direction: prev.direction === "asc" ? "desc" : "asc" };
      }
      return { key, direction: "asc" };
    });
  };

  return (
    <AuthenticatedLayout
      header={
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold leading-tight text-gray-800">Data Table</h2>
          <button className="px-4 py-2 bg-[#ff9022] text-white rounded-lg" onClick={() => setIsOpen(true)}>
            Application Form
          </button>
        </div>
      }
    >
      <Head title="Data Table" />
      <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
        <div className="p-4">
          <div className="flex justify-between items-center mb-4">
            <div>
              <label htmlFor="entries" className="mr-2 text-sm font-medium">
                Show
              </label>
              <select
                id="entries"
                value={entriesPerPage}
                onChange={(e) => setEntriesPerPage(Number(e.target.value))}
                className="border border-gray-300 rounded py-1 text-sm"
              >
                {[5, 10, 15, 20, 25, 50].map((size) => (
                  <option key={size} value={size}>
                    {size}
                  </option>
                ))}
              </select>
              <span className="ml-2 text-sm">entries per page</span>
            </div>
            <div>
              <input
                type="text"
                placeholder="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="border border-gray-300 rounded px-2 py-1 text-sm"
              />
            </div>
          </div>

          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                {Object.keys(data[0]).map((key) => (
                  <th
                    key={key}
                    className="border border-gray-300 px-4 py-2 text-left text-sm cursor-pointer"
                    onClick={() => handleSort(key)}
                  >
                    <div className="flex items-center space-x-1">
                      <span>{key.charAt(0).toUpperCase() + key.slice(1)}</span>
                      {sortConfig.key === key && (
                        <span>{sortConfig.direction === "asc" ? "\u2191" : "\u2193"}</span>
                      )}
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {displayedData.map((item, index) => (
                <tr key={index} className="odd:bg-white even:bg-gray-50">
                  {Object.values(item).map((value, idx) => (
                    <td key={idx} className="border border-gray-300 px-4 py-2 text-sm">
                      {value}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>

          <div className="flex justify-between items-center mt-4">
            <span className="text-sm">
              Showing {Math.min((currentPage - 1) * entriesPerPage + 1, filteredData.length)} to{" "}
              {Math.min(currentPage * entriesPerPage, filteredData.length)} of {filteredData.length} entries
            </span>
            <div className="flex space-x-2">
              <button
                onClick={() => handleChangePage(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-3 py-1 text-sm bg-gray-200 rounded disabled:opacity-50"
              >
                &laquo;
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => handleChangePage(page)}
                  className={`px-3 py-1 text-sm rounded ${currentPage === page ? "bg-blue-500 text-white" : "bg-gray-200"}`}
                >
                  {page}
                </button>
              ))}
              <button
                onClick={() => handleChangePage(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="px-3 py-1 text-sm bg-gray-200 rounded disabled:opacity-50"
              >
                &raquo;
              </button>
            </div>
          </div>
        </div>
      </div>

    </AuthenticatedLayout>
  );
};

export default MultiStepForm;
