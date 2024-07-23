import Table from "../Elements/Table";

const CustomersTable = (props) => {
  const { children, className, header, headerclass } = props;
  return (
    <Table className={className} header={header} headerclass={headerclass}>
      {children}
    </Table>
  );
};

export default CustomersTable;
