import { MessageText, MessageWindow } from './Message.styled';

export const Message = ({ children }) => {
  return (
    <MessageWindow>
      <MessageText>{children}</MessageText>
    </MessageWindow>
  );
};
