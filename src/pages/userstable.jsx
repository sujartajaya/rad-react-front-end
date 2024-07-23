import { Fragment, useState } from "react";
import Button from "../components/Elements/Button";
import InputForm from "../components/Elements/Input";

const users = [
  {
    id: 1,
    username: "putu27@yahoo.com",
    expired_day: "30",
    start_conn: "2022-10-10",
    expired_date: "2025-11-11",
  },
  {
    id: 2,
    username: "putu2@yahoo.com",
    expired_day: "20",
    start_conn: "2022-10-10",
    expired_date: "2026-11-11",
  },
  {
    id: 3,
    username: "putu3@yahoo.com",
    expired_day: "10",
    start_conn: "2022-10-10",
    expired_date: "2027-11-11",
  },
  {
    id: 4,
    username: "putu4@yahoo.com",
    expired_day: "50",
    start_conn: "2022-10-10",
    expired_date: "2028-11-11",
  },
  {
    id: 5,
    username: "putu5@yahoo.com",
    expired_day: "40",
    start_conn: "2022-10-10",
    expired_date: "2029-11-11",
  },
  {
    id: 6,
    username: "putu5@yahoo.com",
    expired_day: "30",
    start_conn: "2022-10-10",
    expired_date: "2030-11-11",
  },
  {
    id: 7,
    username: "putu5@yahoo.com",
    expired_day: "30",
    start_conn: "2022-10-10",
    expired_date: "2031-11-11",
  },
];
const email = localStorage.getItem("email");
const UsersTablePage = () => {
  const [username, setUsername] = useState("");
  const [expiredday, setExpiredday] = useState(0);
  const [expireddate, setExpireddate] = useState("");
  const handleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    window.location.href = "/login";
  };
  const handleUpdate = (e) => {
    e.preventDefault();
    alert(username);
  };
  return (
    <Fragment>
      <div className="flex justify-end h-20 bg-blue-600 text-white items-center px-10">
        {email}
        <Button className="ml-5 bg-black" type="button" onClick={handleLogout}>
          Logout
        </Button>
      </div>
      <div className="flex overflow-x-auto sm:rounded-lg mt-5 mx-5">
        <div className="w-3/4">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Username
                </th>
                <th scope="col" className="px-6 py-3">
                  Expired day
                </th>
                <th scope="col" className="px-6 py-3">
                  Start connect
                </th>
                <th scope="col" className="px-6 py-3">
                  Expired date
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {users &&
                users.map((user) => (
                  <tr
                    key={user.id}
                    className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
                  >
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {user.username}
                    </th>
                    <td className="px-6 py-4">{user.expired_day}</td>
                    <td className="px-6 py-4">{user.start_conn}</td>
                    <td className="px-6 py-4">{user.expired_date}</td>
                    <td className="px-6 py-4">
                      <a
                        href="#"
                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                        onClick={() => {
                          setUsername(user.username);
                          setExpiredday(user.expired_day);
                          setExpireddate(user.expired_date);
                        }}
                      >
                        Edit
                      </a>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
        <div className="w-1/4 ml-3">
          <h1 className="text-3xl font-bold text-blue-600">Data User:</h1>
          <form onSubmit={handleUpdate}>
            <InputForm
              label="Username"
              type="text"
              name="username"
              placeholder="Username"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
            <InputForm
              label="Expire day"
              type="number"
              name="expiredday"
              value={expiredday}
              onChange={(e) => {
                setExpiredday(e.target.value);
              }}
            />
            <InputForm
              label="Expire date"
              type="date"
              name="expiredate"
              value={expireddate}
              onChange={(e) => {
                setExpireddate(e.target.value);
              }}
            />
            <InputForm
              label="Password"
              type="password"
              name="password"
              placeholder="******"
            />
            <InputForm
              label="Confirm Password"
              type="password"
              name="Confpassword"
              placeholder="******"
            />
            <Button className="bg-blue-600 w-full" type="submit">
              Update
            </Button>
          </form>
        </div>
      </div>
    </Fragment>
  );
};
export default UsersTablePage;
