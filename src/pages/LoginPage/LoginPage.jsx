import { useState } from "react";
import { mockCredentialsConfig } from "./mockCredentialsConfig";
import Input from "components/ui/Input";
import {
  LoginFormContainer,
  LoginTitle,
  LoginButton,
  ErrorText,
} from "./styles";

const LoginPage = (props) => {
  const [username, setUsername] = useState("");

  const [password, setPassword] = useState("");

  const [isIncorrectAuthData, setIsIncorrectAuthData] = useState(false);

  const onAuthFildsChange = (e) => {
    setIsIncorrectAuthData(false);
    if (e.target.name === "username") setUsername(e.target.value);
    else setPassword(e.target.value);
  };

  const onAuthDataSubmit = () => {
    if (
      username === mockCredentialsConfig.username &&
      password === mockCredentialsConfig.password
    ) {
      localStorage.setItem("isAuth", true);
      props.history.push("/pokemon");
    } else {
      setIsIncorrectAuthData(true);
    }
  };

  return (
    <LoginFormContainer>
      <LoginTitle>Login To Your Account</LoginTitle>
      {isIncorrectAuthData && (
        <ErrorText>Username or password incorrect</ErrorText>
      )}
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <Input
          placeholder="Username"
          type="text"
          name="username"
          value={username}
          onChange={onAuthFildsChange}
          isInvalid={isIncorrectAuthData}
        />
        <Input
          placeholder="Password"
          type="password"
          name="password"
          value={password}
          onChange={onAuthFildsChange}
          isInvalid={isIncorrectAuthData}
        />
        <LoginButton
          disabled={!username || !password}
          onClick={onAuthDataSubmit}
        >
          Login
        </LoginButton>
      </form>
    </LoginFormContainer>
  );
};

export default LoginPage;
