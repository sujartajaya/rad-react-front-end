const Table = (props) => {
  const { children, className, header, headerclass} = props;
  return (
    <table className={className}>
      <thead className={headerclass}>
        <tr>
          {header.length > 0 &&
            header.map((head, index) => (
              <th scope="col" className="px-6 py-3" key={index}>
                {head}
              </th>
            ))}
        </tr>
      </thead>
      {children}
    </table>
  );
};
export default Table;
