import { useEffect, useRef, useState } from "react";
import Button from "../Elements/Button";
import InputForm from "../Elements/Input";
import { login } from "../../services/auth.service";
const FormLogin = () => {
  const [loginfields, setLoginfields] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();
    // localStorage.setItem("email", event.target.email.value);
    // localStorage.setItem("password", event.target.password.value);
    // window.location.href = "/userstable";
    const data = {
      username: event.target.username.value,
      password: event.target.password.value,
    }
    login(data, (status, res) => {
      if (status) {
        console.log(res);} else {  
          setLoginfields(res.response.data.msg);
          //console.log(res.response.data.msg);
        }
    })
  };
  const usernameRef = useRef(null);
  useEffect(() => {
    usernameRef.current.focus();
  }, []);
  return (
    <form onSubmit={handleLogin}>
      <InputForm
        label="Username"
        type="text"
        name="username"
        placeholder="Username"
        ref={usernameRef}
      />
      <InputForm
        label="Password"
        type="password"
        name="password"
        placeholder="******"
      />
      <Button className="bg-blue-600 w-full" type="submit">
        Login
      </Button>
      {loginfields && <p className="text-red-500 text-center mt-5">{loginfields}</p>}
    </form>
  );
};
export default FormLogin;
