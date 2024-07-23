import { Children } from "react";
import Button from "../Elements/Button";
const CardUser = (props) => {
  const { children } = props;
  return (
    <div className="w-full max-w-sm bg-gray-800 border border-gray-700 rounded-lg shadow mx-2 flex flex-col justify-between">
      {children}
    </div>
  );
};

const Header = () => {
  return (
    <a href="#">
      <img src="/images/user.jpg" alt="user" className="p-8 rounded-t-lg" />
    </a>
  );
};

const Body = (props) => {
  const { children, title } = props;
  return (
    <div className="flext px-5 pb-5 justify-between h-full">
      <h5 className="text-xl font-semibold tracking-tight text-white">
        {title} {children}
      </h5>
    </div>
  );
};

const Footer = () => {
  return (
    <div className="flex items-center justify-between px-5 pb-3.5">
      <Button className="bg-blue-600">Update</Button>
      <Button className="bg-red-600">Delete</Button>
    </div>
  );
};
CardUser.Header = Header;
CardUser.Body = Body;
CardUser.Footer = Footer;

export default CardUser;
