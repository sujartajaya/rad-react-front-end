import { updateCustomerById } from "../../services/customer.service";
import Button from "../Elements/Button";
import InputForm from "../Elements/Input";
import { useEffect, useState } from "react";

const PopupCustomerForm = (props) => {
    const  {title, customer, pic, phone, address, uuid} = props;
    const [changecustomer,setChangecustomer] = useState('');
    const [changePic,setChangePic] = useState('');
    const [changePhone,setChangePhone] = useState('');
    const [changeAddress,setChangeAddress] = useState('');

    const updateDataCustomer = (uuid) => {
        const data = {
            customer: changecustomer,
            pic: changePic,
            phone: changePhone,
            address: changeAddress
        }
        updateCustomerById(uuid, data, (data) => {
            console.log(data);
            window.location.href = "/test"
        });

    }
    useEffect((e) => {
        setChangecustomer(customer);
        setChangePic(pic);
        setChangePhone(phone);
        setChangeAddress(address);
    }, [customer,pic,phone,address]);
    return (
        <div className="flex justify-center items-center h-screen">
            <div id="contactFormModal" className="fixed z-10 inset-0 overflow-y-auto hidden bg-gray-500 bg-opacity-50">
                <div className="flex items-center justify-center min-h-screen">
                    <div className="bg-white w-1/2 p-6 rounded shadow-md">
                        <div className="flex justify-end">
                            <button
                            id="closeContactForm"
                            className="text-gray-700 hover:text-red-500"
                            onClick={() =>
                                document
                                .getElementById("contactFormModal")
                                .classList.add("hidden")
                            }
                            >
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                strokeLinecap="round"
                                strokeinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                                ></path>
                            </svg>
                            </button>
                        </div>
                        <h2 className="text-2xl font-bold mb-4">{title}</h2>
                        <form>
                            <InputForm
                                label="Customer Name"
                                type="text"
                                name="customer"
                                placeholder="Customer Name"
                                value={changecustomer}
                                onChange={(e) => setChangecustomer(e.target.value)}
                            />
                            <InputForm
                                label="Personal Information Contact"
                                type="text"
                                name="pic"
                                placeholder="Personal Information Contact"
                                value={changePic}
                                onChange={(e) => setChangePic(e.target.value)}
                            />
                            <InputForm
                                label="Phone"
                                type="number"
                                name="phone"
                                placeholder="Phone number"
                                value={changePhone}
                                onChange={(e) => setChangePhone(e.target.value)}
                            />
                            <InputForm
                                label="Address"
                                type="text"
                                name="phone"
                                placeholder="Address"
                                value={changeAddress}
                                onChange={(e) => setChangeAddress(e.target.value)}
                            />
                            <Button className="bg-blue-600 w-full" onClick={() => { 
                                updateDataCustomer(uuid);
                                document.getElementById("contactFormModal").classList.add("hidden");
                                }}>Save</Button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PopupCustomerForm;