import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { useState, useMemo, useEffect } from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";


import {
    useReactTable,
    getCoreRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    createColumnHelper,
} from "@tanstack/react-table";

import { Edit, Trash, Phone } from "lucide-react";
import moment from "moment";

export default function UserList() {
    const columnHelper = createColumnHelper();
    const [data, setData] = useState([]);
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const [isOpen, setIsOpen] = useState(false);
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [editingRow, setEditingRow] = useState(null);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        role: "",
        password: "",
    });

    const [isEditOpen, setIsEditOpen] = useState(false);
    const [isDeleteOpen, setIsDeleteOpen] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);



    const [step, setStep] = useState(1);
    const { register, watch, formState, trigger, formState: { errors } } = useForm();

    // const nextStep = () => setStep((prev) => prev + 1);
    // const prevStep = () => setStep((prev) => prev - 1);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("/get-all-user");

                console.log("Full API Response:", response.data); // Debug entire response

                if (response.data && response.data.users) {
                    console.log("Users from API:", response.data.users); // Debug users array
                    const formattedUsers = response.data.users.map(user => {
                        user.created_at = moment(user.created_at).local().format("DD-MMM-YYYY hh:mm A");
                        return user;
                    });

                    setData(formattedUsers);
                } else {
                    console.error("Unexpected API response format:", response.data);
                    setError("Unexpected API response format.");
                }
            } catch (err) {
                console.error("Fetch Error:", err);
                setError("Failed to fetch users.");
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    const handleEdit = (row) => {
        setEditingRow(row);
    };

    const handleDelete = (userId) => {
        console.log("Delete User ID:", userId);
    };

    const columns = useMemo(() => [
        columnHelper.accessor("name", { header: "Name" }),
        columnHelper.accessor("email", { header: "Email" }),
        columnHelper.accessor("role", { header: "Role" }),
        columnHelper.accessor("email_verified_at", { header: "Email Verified" }),
        columnHelper.accessor("created_at", { header: "Created At" }),
        columnHelper.display({
            id: "id",
            header: "Actions",
            cell: ({ row }) => (
                <div className="flex justify-center space-x-2">
                    {/* Call, Edit and Delete Button */}
                    <div className="p-2">
                        {!isCallStarted ? (
                            <button
                                onClick={startCall}
                                className="flex items-center px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
                            >
                                <Phone className="mr-2 h-5 w-5" />
                                Call
                            </button>
                        ) : (
                            <div>
                                <h1 className="text-xl font-bold mb-4">Video Call</h1>
                                <OTSession apiKey={apiKey} sessionId={sessionId} token={token}>
                                    <OTPublisher />
                                    <OTSubscriber />
                                </OTSession>
                            </div>
                        )}
                    </div>
                    <div className="p-2">
                        <button
                            onClick={() => {
                                setSelectedUser(row.original);
                                setIsEditOpen(true);
                            }}
                            className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg"
                        >
                            <Edit className="w-4 h-4 mr-2" />
                            Edit
                        </button>
                    </div>
                    <div className="p-2">
                        <button
                            onClick={() => {
                                setSelectedUser(row.original);
                                setIsDeleteOpen(true);
                            }}
                            className="flex items-center px-4 py-2 bg-red-500 text-white rounded-lg"
                        >
                            <Trash className="w-4 h-4 mr-2" />
                            Delete
                        </button>
                    </div>
                </div>
            ),
        }),
    ], []);
    console.log('data---------------------------', data);
    const tableData = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
    });
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        try {
            const response = await axios.post("/add-new-user", formData, {
                headers: { "Content-Type": "application/json" },
            });

            if (response.data.message) {
                alert(response.data.message);
            } else {
                alert("Registration successful!");
            }

            setIsOpen(false);
            setIsFormOpen(false);
            setFormData({ name: "", email: "", password: "", password_confirmation: "" });
        } catch (err) {
            console.error("Error Response:", err.response); // Debugging line
            setError(err.response?.data?.message || "Something went wrong!");
        }
    };
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };





    const [apiKey, setApiKey] = useState("your_vonage_api_key");
    const [sessionId, setSessionId] = useState("");
    const [token, setToken] = useState("");
    const [isCallStarted, setIsCallStarted] = useState(false);

    const startCall = async () => {
        console.log("Call button clicked");

        try {
            // Fetch sessionId from Laravel backend
            // const sessionResponse = await fetch("http://localhost:8000/video/create-session");
            // const sessionData = await sessionResponse.json();



            try {
                const response = await axios.get("/video/create-session");

                console.log("Full API Response------------:", response.data); // Debug entire response

                // if (response.data && response.data.users) {
                //     // console.log("Users from API:", response.data.users); // Debug users array
                //     // setData(response.data.users);
                // } else {
                //     console.error("Unexpected API response format---------:", response.data);
                //     setError("Unexpected API response format.");
                // }
            } catch (err) {
                console.error("Fetch Error:------------", err);
                setError("Failed to fetch users.");
            } finally {
                setIsLoading(false);
            }



            // Fetch token using the sessionId
            const tokenResponse = await fetch("http://localhost:8000/video/generate-token", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ sessionId: response.sessionId }),
            });

            const tokenData = await tokenResponse.json();

            // Set sessionId and token in state
            setSessionId(sessionData.sessionId);
            setToken(tokenData.token);

            // Mark the call as started
            setIsCallStarted(true);
        } catch (error) {
            console.error("Error starting the call:", error);
        }
    };




    const onSubmit = (data) => {
        console.log("Form Data Submitted: ", data);
        alert("Form submitted successfully!");
    };

    const renderStepFields = () => {
        switch (step) {
            case 1:
                return (
                    <>
                        <h2 className="step-title">Tourism Unit Detail.</h2>
                        <br></br>
                        <div className="form-group">
                            <label>Unit/Organization Name</label>
                            <input
                                type="text"
                                placeholder="Unit/Organization Name" // Add placeholder here
                                {...register("unit_or_organization_name", {
                                    required: "Unit/Organization Name Is Required",
                                    
                                })}
                                className={`input ${errors.unit_or_organization_name ? "input-error" : ""}`}
                                autoComplete="off" 
                            />
                            {errors.unit_or_organization_name && <p className="error-text">{errors.unit_or_organization_name.message}</p>}
                            <label>Unit Address With Block, Tehsil And District</label>
                            <input
                                type="text"
                                placeholder="Unit Address With Block, Tehsil And District" // Add placeholder here
                                {...register("unit_full_address", {
                                    required: "Unit Address With Block, Tehsil And District Is Required",

                                })}
                                className={`input ${errors.unit_full_address ? "input-error" : ""}`}
                                autoComplete="off" 
                            />
                            {errors.unit_full_address && <p className="error-text">{errors.unit_full_address.message}</p>}
                            <label>Contact No(Mobile No)</label>
                            <input
                                type="text"
                                placeholder="obile No" // Add placeholder here
                                {...register("mobile_no", {
                                    required: "Mobile No Is Required",

                                })}
                                className={`input ${errors.mobile_no ? "input-error" : ""}`}
                                autoComplete="off" 
                            />
                            {errors.mobile_no && <p className="error-text">{errors.mobile_no.message}</p>}
                            <label>Registered Office</label>
                            <input
                                type="text"
                                placeholder="Registered Office" // Add placeholder here
                                {...register("registered_office", {
                                    required: "Registered Office Is Required",

                                })}
                                className={`input ${errors.registered_office ? "input-error" : ""}`}
                                autoComplete="off" 
                            />
                            {errors.registered_office && <p className="error-text">{errors.registered_office.message}</p>}
                            <label>GST Registration No</label>
                            <input
                                type="text"
                                placeholder="GST Registration No" // Add placeholder here
                                {...register("gst_registration_no", {
                                    required: "GST Registration No Is Required",

                                })}
                                className={`input ${errors.gst_registration_no ? "input-error" : ""}`}
                                autoComplete="off" 
                            />
                            {errors.gst_registration_no && <p className="error-text">{errors.gst_registration_no.message}</p>}
                            <label>Travel Trade Registration Date(COD)</label>
                            <input
                                type="text"
                                placeholder="Travel Trade Registration Date(COD)" // Add placeholder here
                                {...register("travel_trade_registration_date", {
                                    required: "Travel Trade Registration Date(COD) Is Required",

                                })}
                                className={`input ${errors.travel_trade_registration_date ? "input-error" : ""}`}
                                autoComplete="off" 
                            />
                            {errors.travel_trade_registration_date && <p className="error-text">{errors.travel_trade_registration_date.message}</p>}
                            <label>Registration Number (UTTR No)</label>
                            <input
                                type="text"
                                placeholder="Registration Number (UTTR No)" // Add placeholder here
                                {...register("uttr_no", {
                                    required: "Registration Number (UTTR No) Is Required",

                                })}
                                className={`input ${errors.uttr_no ? "input-error" : ""}`}
                                autoComplete="off" 
                            />
                            {errors.uttr_no && <p className="error-text">{errors.uttr_no.message}</p>}
                        </div>
                    </>
                );
            case 2:
                return (
                    <>
                        <h2 className="step-title">Nature Of Organization.</h2>
                        <br></br>
                        <div className="form-group">
                            <label>Nature Of Organization</label>
                            <select
                                {...register("nature_of_organization", {
                                    required: "Nature Of Organization Is Required",
                                })}
                                className={`input ${errors.nature_of_organization ? "input-error" : ""}`}
                            >
                                <option value="">-- Select an Nature Of Organization --</option>
                                <option value="1">Private Limited Company</option>
                                <option value="2">Partnership Firm</option>
                                <option value="3">Proprietorship Firm</option>
                                <option value="4">Society Trust</option>
                            </select>
                            {errors.nature_of_organization && (
                                <p className="error-text">{errors.nature_of_organization.message}</p>
                            )}
                            <br></br>
                            <hr className="my-4 border-gray-300" />




                            <button
                                type="button"
                                className="float-right mt-2 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-50"
                                onClick={addMoreFields}
                            >
                                Add More
                            </button>

                            <h2 className="step-title">Details Owner(s) / Promoter(s) / Director(s).</h2>
                            {fields.map((field, index) => (
                                <div key={field.id} className="field-group">
                                    <label>Name</label>
                                    <input
                                        type="text"
                                        placeholder="Name"
                                        {...register(`owners_name.${index}`, {
                                            required: "Details Owner(s) / Promoter(s) / Director(s) Is Required",
                                        })}
                                        className={`input ${errors.owners_name?.[index] ? "input-error" : ""}`}
                                        autoComplete="off" 
                                    />
                                    {errors.owners_name?.[index] && (
                                        <p className="error-text">{errors.owners_name[index].message}</p>
                                    )}

                                    <label>Complete Address</label>
                                    <input
                                        type="text"
                                        placeholder="Complete Address"
                                        {...register(`owners_complete_address.${index}`, {
                                            required: "Complete Address Is Required",
                                        })}
                                        className={`input ${errors.owners_complete_address?.[index] ? "input-error" : ""}`}
                                        autoComplete="off" 
                                    />
                                    {errors.owners_complete_address?.[index] && (
                                        <p className="error-text">{errors.owners_complete_address[index].message}</p>
                                    )}

                                    <label>Permanent Residents Uttarakhand (Yes / No)</label>
                                    <select
                                        {...register(`owners_permanent_residents_is_in_uttarakhand.${index}`, {
                                            required: "Permanent Residents Uttarakhand Is Required",
                                        })}
                                        className={`input ${errors.owners_permanent_residents_is_in_uttarakhand?.[index] ? "input-error" : ""
                                            }`}
                                            autoComplete="off" 
                                    >
                                        <option value="">-- Select Permanent Residents Uttarakhand --</option>
                                        <option value="1">Yes</option>
                                        <option value="2">No</option>
                                    </select>
                                    {errors.owners_permanent_residents_is_in_uttarakhand?.[index] && (
                                        <p className="error-text">
                                            {errors.owners_permanent_residents_is_in_uttarakhand[index].message}
                                        </p>
                                    )}

                                    <label>Shareholding %</label>
                                    <input
                                        type="text"
                                        placeholder="Shareholding %"
                                        {...register(`owners_shareholding.${index}`, {
                                            required: "Shareholding % Is Required",
                                        })}
                                        className={`input ${errors.owners_shareholding?.[index] ? "input-error" : ""}`}
                                        autoComplete="off" 
                                    />
                                    {errors.owners_shareholding?.[index] && (
                                        <p className="error-text">{errors.owners_shareholding[index].message}</p>
                                    )}
                                    <div className="field-group">
                                        {fields.length > 1 && (
                                            <button
                                                type="button"
                                                className="float-right mt-2 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-50"
                                                onClick={() => removeField(field.id)}
                                            >
                                                Remove
                                            </button>
                                        )}
                                    </div>
                                </div>
                                
                            ))}






                            <br></br>
                            <hr className="my-4 border-gray-300" />


                            <h2 className="step-title">Project Detail.</h2>
                            <br></br>
                            <label>Project Type (New Or Expansion)</label>
                            <select
                                {...register("project_type", {
                                    required: "Project Type  Is Required",
                                })}
                                className={`input ${errors.project_type ? "input-error" : ""}`}
                            >
                                <option value="">-- Select an Project Type --</option>
                                <option value="1">New</option>
                                <option value="2">Expansion</option>

                            </select>
                            {errors.project_type && <p className="error-text">{errors.project_type.message}</p>}
                            <label>Date Of Commercial Operation</label>
                            <input
                                type="text"
                                placeholder="Date Of Commercial Operation" // Add placeholder here
                                {...register("date_of_commercial_operation", {
                                    required: "Date Of Commercial Operation Is Required",

                                })}
                                className={`input ${errors.date_of_commercial_operation ? "input-error" : ""}`}
                                autoComplete="off" 
                            />
                            {errors.date_of_commercial_operation && <p className="error-text">{errors.date_of_commercial_operation.message}</p>}
                            <label>NIC Code</label>
                            <input
                                type="text"
                                placeholder="Enter NIC Code" // Add placeholder here
                                {...register("nic_code", {
                                    required: "NIC Code Is Required",

                                })}
                                className={`input ${errors.nic_code ? "input-error" : ""}`}
                                autoComplete="off" 
                            />
                            {errors.nic_code && <p className="error-text">{errors.nic_code.message}</p>}
                            <label>Name Of Tourism Product</label>
                            <input
                                type="text"
                                placeholder="Name Of Tourism Product" // Add placeholder here
                                {...register("name_of_tourism_product", {
                                    required: "Name Of Tourism Product Is Required",

                                })}
                                className={`input ${errors.name_of_tourism_product ? "input-error" : ""}`}
                                autoComplete="off" 
                            />
                            {errors.name_of_tourism_product && <p className="error-text">{errors.name_of_tourism_product.message}</p>}

                        </div>
                    </>
                );
            case 3:
                return (
                    <>
                        <h3 className="step-title">Step 3</h3>
                        <div className="form-group">
                            <label>Address</label>
                            <input
                                type="text"
                                {...register("address", { required: "Address is required" })}
                                className={`input ${errors.address ? "input-error" : ""}`}
                                autoComplete="off" 
                            />
                            {errors.address && <p className="error-text">{errors.address.message}</p>}
                        </div>
                    </>
                );
            default:
                return null;
        }
    };
    const [fields, setFields] = useState([{ id: Date.now() }]);
    // Handler to add more fields
    const addMoreFields = () => {
        setFields([...fields, { id: Date.now() }]);
    };

    // Handler to remove a field
    const removeField = (id) => {
        setFields(fields.filter(field => field.id !== id));
    };


    const nextStep = async () => {
        const currentStepFields = {
            1: [
                "unit_or_organization_name",
                "unit_full_address",
                "mobile_no",
                "registered_office",
                "gst_registration_no",
                "travel_trade_registration_date",
                "uttr_no",
            ],
            2: [
                "nature_of_organization",
                ...fields.map((_, index) => [
                    `owners_name.${index}`,
                    `owners_complete_address.${index}`,
                    `owners_permanent_residents_is_in_uttarakhand.${index}`,
                    `owners_shareholding.${index}`,
                ]).flat(),
                "project_type",
                "date_of_commercial_operation",
                "nic_code",
                "name_of_tourism_product",
            ],
            3: ["address"],
        };

        const isStepValid = await trigger(currentStepFields[step]);
        if (isStepValid) {
            setStep((prev) => prev + 1);
        }
    };

    const prevStep = () => setStep((prev) => prev - 1);




    return (
        <AuthenticatedLayout
            header={
                <div className="flex items-center justify-between pl-6 pr-5">
                    <h2 className="text-xl font-semibold leading-tight text-gray-800">User List</h2>
                    <button className="px-4 py-2 bg-[#ff9022] text-white rounded-lg ml-auto" onClick={() => setIsOpen(true)}>
                        Appliction Form
                    </button>
                </div>
            }
        >
            <Head title="User List" />
            <div className="py-12">
                <div className="mx-auto max-w-12xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <div className="p-8">
                                <h1 className="text-2xl font-semibold mb-4">User List</h1>
                                <div className="overflow-x-auto">
                                    <table className="min-w-full border-collapse border border-gray-300">
                                        <thead className="bg-gray-100">
                                            {tableData.getHeaderGroups().map((headerGroup) => (
                                                <tr key={headerGroup.id}>
                                                    {headerGroup.headers.map((header) => (
                                                        <th key={header.id} className="border border-gray-300 px-4 py-2 text-center">
                                                            {header.column.columnDef.header}
                                                        </th>
                                                    ))}
                                                </tr>
                                            ))}
                                        </thead>
                                        <tbody>
                                            {tableData.getRowModel().rows.map((row) => (
                                                <tr key={row.original.id} className="hover:bg-gray-100">
                                                    {row.getVisibleCells().map((cell) => (
                                                        <td key={cell.id} className="border border-gray-300 px-4 py-2 text-center">
                                                            {cell.column.id === "id" ? cell.column.columnDef.cell({ row }) : cell.renderValue()}
                                                        </td>
                                                    ))}
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                                <div className="flex justify-between items-center mt-4">
                                    <button onClick={() => tableData.previousPage()} disabled={!tableData.getCanPreviousPage()} className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg disabled:opacity-50">
                                        Previous
                                    </button>
                                    <span>Page <strong>{tableData.getState().pagination.pageIndex + 1} of {tableData.getPageCount()}</strong></span>
                                    <button onClick={() => tableData.nextPage()} disabled={!tableData.getCanNextPage()} className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg disabled:opacity-50">
                                        Next
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {isOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-125" style={{ width: '72%' }}>
                        {error && <p className="text-red-500">{error}</p>}


                        <div className="form-box">
                            <h2 className="form-title">Hello This is Test Web with react Form</h2>
                            <h2 className="form-title">Hello This is Test Web with react Form</h2>
                            <h2 className="form-title">(2025 - 2026)</h2>
                            <div className="step-indicator">
                                {[1, 2, 3].map((item) => (
                                    <div key={item} className={`step-circle ${item === step ? "active" : ""}`}>
                                        {item}
                                    </div>
                                ))}
                            </div>

                            {renderStepFields()}
                            <div className="button-group">
                                {step > 1 && (
                                    <button type="button" onClick={prevStep} className="button bg-gray-200">
                                        Back
                                    </button>
                                )}
                                {step < 3 ? (
                                    <button type="button" onClick={nextStep} className="button button-next">
                                        Next
                                    </button>
                                ) : (
                                    <button type="submit" className="button button-submit">
                                        Submit
                                    </button>
                                )}
                            </div>


                        </div>

                        <div className="flex justify-end gap-2">
                            <button type="button" className="px-4 py-2 bg-gray-300 rounded" onClick={() => setIsOpen(false)}>
                                Cancel
                            </button>
                            {/* <button type="submit" className="px-4 py-2 bg-[#ff9022] text-white rounded">
                                Save
                            </button> */}
                        </div>

                    </div>

                </div>
            )}

            {/* Edit Popup */}
            {isEditOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h2 className="text-lg font-bold mb-4">Edit User</h2>
                        {/* <input
                            type="text"
                            value={selectedUser?.name || ""}
                            onChange={(e) => setSelectedUser({ ...selectedUser, name: e.target.value })}
                            className="border p-2 w-full"
                        /> */}

                        <input type="text" name="name" placeholder="Name" value={selectedUser?.name || ""} className="w-full mb-2 p-2 border rounded" onChange={handleChange} />
                        <input type="email" name="email" placeholder="Email" value={selectedUser?.email || ""} className="w-full mb-2 p-2 border rounded" onChange={handleChange} />
                        <input type="password" name="password" placeholder="Password" className="w-full mb-2 p-2 border rounded" onChange={handleChange} />
                        <input type="password" name="password_confirmation" placeholder="Password Confirmation" className="w-full mb-4 p-2 border rounded" onChange={handleChange} />

                        <div className="flex justify-end mt-4">
                            <button className="px-4 py-2 bg-gray-300 rounded mr-2" onClick={() => setIsEditOpen(false)}>Cancel</button>
                            <button className="px-4 py-2 bg-green-500 text-white rounded">Save</button>
                        </div>
                    </div>
                </div>
            )}

            {/* Delete Confirmation Popup */}
            {isDeleteOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h2 className="text-lg font-bold mb-4">Are you sure you want to delete {selectedUser?.name}?</h2>
                        <div className="flex justify-end">
                            <button className="px-4 py-2 bg-gray-300 rounded mr-2" onClick={() => setIsDeleteOpen(false)}>Cancel</button>
                            <button
                                className="px-4 py-2 bg-red-500 text-white rounded"
                                onClick={() => {
                                    handleDelete(selectedUser.id);
                                    setIsDeleteOpen(false);
                                }}
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            )}


        </AuthenticatedLayout>
    );
}
