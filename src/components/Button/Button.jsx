import { LoadMoreButton } from './Button.styled';
import { PropTypes } from 'prop-types';

export const Button = ({ onClick, children }) => <LoadMoreButton onClick={onClick}>{children}</LoadMoreButton>;

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.any,
};
