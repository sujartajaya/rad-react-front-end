import CustomerLayout from "../components/Layouts/CustomerLayouts";
import { useState, useEffect } from "react";
import { getCustomers,getCustomerById } from "../services/customer.service";

const TestPage = () => {
  const [customers, setCustomers] = useState([]);
  const [customer, setCustomer] = useState("");
  const [pic, setPic] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [uuid, setUuid] = useState("");

  useEffect(() => {
    getCustomers((data) => {
      setCustomers(data);
    });
  }, []);

  const getId = (id) => {
    getCustomerById(id, (data) => {
      //console.log("nama customer", data.customer);
        setCustomer(data.customer);
        setPic(data.pic);
        setPhone(data.phone);
        setAddress(data.address);
        setUuid(data.uuid);
    });
  };
  
 
  return (
    <CustomerLayout
      title="TEST CUSTOMERS DATA"
      header={[
        "Customer",
        "Personal Information Contact",
        "Phone",
        "Address",
        "Action",
      ]}
      className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400"
      headerclass="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
      customer={customer}
      pic={pic}
      phone={phone}
      address={address}
      uuid={uuid}
    >
      <tbody>
        {customers.length > 0 &&
          customers.map((customer) => (
            <tr 
              key={customer.id}
              className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
            >
              <td
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {customer.customer}
              </td>
              <td className="px-6 py-4">{customer.pic}</td>
              <td className="px-6 py-4">{customer.phone}</td>
              <td className="px-6 py-4">{customer.address}</td>
              <td className="px-6 py-4">
                <a
                  href="#"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  onClick={() => {
                                  document
                                  .getElementById("contactFormModal")
                                  .classList.remove("hidden");
                                  getId(customer.uuid);
                                }}
                  >
                  Edit
                </a>
              </td>
            </tr>
          ))}
      </tbody>
    </CustomerLayout>
  );
};

export default TestPage;
