import Table from "../Elements/Table";
import CustomersTable from "../Fragments/CustomersTable";
import PopupCustomerForm from "../Fragments/PopupCustomerForm";

const CustomerLayout = (props) => {
  const { title, children, className, header, headerclass, customer, pic, phone, address, uuid } = props;
  return (
    <>
      <div className="flex justify-center h-15 text-white items-center px-10">
        <h1 className="text-3xl font-bold text-blue-700">{title}</h1>
      </div>
      <div className="flex overflow-x-auto sm:rounded-lg mt-5 mx-5 col-auto items-center justify-center">
        <CustomersTable
          className={className}
          header={header}
          headerclass={headerclass}
        >
          {children}
        </CustomersTable>
      </div>
      <PopupCustomerForm title="Edit Customer" customer={customer} pic={pic} phone={phone} address={address} uuid={uuid} />
    </>
  );
};

export default CustomerLayout;
