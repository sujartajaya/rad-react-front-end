import Button from "../Elements/Button";
import InputForm from "../Elements/Input";
const FormRegister = () => {
  return (
    <form action="">
      <InputForm
        label="Your Name"
        type="text"
        name="name"
        placeholder="Your Name"
      />
      <InputForm
        label="Email"
        type="email"
        name="email"
        placeholder="email@email.com"
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
      <Button className="bg-blue-600 w-full">Register</Button>
    </form>
  );
};
export default FormRegister;
