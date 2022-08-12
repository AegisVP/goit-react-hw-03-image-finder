import { MessageText, MessageWindow } from './Message.styled';
import { PropTypes } from 'prop-types';

export const Message = ({ children }) => {
  return (
    <MessageWindow>
      <MessageText>{children}</MessageText>
    </MessageWindow>
  );
};

Message.propTypes = {
  children: PropTypes.any,
};
