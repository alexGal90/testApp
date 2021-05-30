import { ServerErrorMessageContainer } from "./styles";

const ServerErrorMessage = (props) => {
  return (
    <ServerErrorMessageContainer {...props}>
      {props.children}
    </ServerErrorMessageContainer>
  );
};

export default ServerErrorMessage;
