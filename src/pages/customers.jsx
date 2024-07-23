import { Fragment, useEffect, useState } from "react";
import { getCustomers } from "../services/customer.service";
import Table from "../components/Elements/Table";

const CustomersPage = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    getCustomers((data) => {
      setCustomers(data);
    });
  }, []);

  return (
    <Fragment>
      <div className="flex justify-center h-15 text-white items-center px-10">
        <h1 className="text-3xl font-bold text-blue-700">DATA CUSTOMERS</h1>
      </div>
      <div className="flex overflow-x-auto sm:rounded-lg mt-5 mx-5 col-auto items-center justify-center">
        <Table
          className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400"
          header={[
            "Customer",
            "Personal Information Contact",
            "Phone",
            "Address",
            "Action",
          ]}
          headerclass="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
        >
          <tbody>
            {customers.length > 0 &&
              customers.map((customer) => (
                <tr
                  key={customer.id}
                  className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {customer.customer}
                  </th>
                  <td className="px-6 py-4">{customer.pic}</td>
                  <td className="px-6 py-4">{customer.phone}</td>
                  <td className="px-6 py-4">{customer.address}</td>
                  <td className="px-6 py-4">
                    <a
                      href="#"
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      Edit
                    </a>
                  </td>
                </tr>
              ))}
          </tbody>
        </Table>
      </div>
    </Fragment>
  );
};

export default CustomersPage;
