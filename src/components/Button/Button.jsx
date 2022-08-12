import { LoadMoreButton } from './Button.styled';

export const Button = ({ onClick, children }) => <LoadMoreButton onClick={onClick}>{children}</LoadMoreButton>;
