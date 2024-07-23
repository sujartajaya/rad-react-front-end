import { useEffect } from "react";
import CardUser from "../components/Fragments/CardUser";
const UsersPage = () => {
  const datausers = [
    {
      id: 1,
      title: "Username",
      desc: "myuser",
    },
    {
      id: 2,
      title: "Username",
      desc: "myuser",
    },
  ];

  return (
    <div className="flex justify-center py-5">
      {datausers &&
        datausers.map((datauser) => (
          <CardUser key={datauser.id}>
            <CardUser.Header />
            <CardUser.Body title={datauser.title}>
              {datauser.desc}
            </CardUser.Body>
            <CardUser.Footer />
          </CardUser>
        ))}
    </div>
  );
};

export default UsersPage;
