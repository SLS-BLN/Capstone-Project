import styled from 'styled-components/macro';
import {bool, func} from 'prop-types';

export default function Burger({open, setOpen}) {
  return (
    <Button
      aria-label={open ? 'close navigation menu' : 'open navigation menu'}
      role="navigation"
      open={open}
      onClick={() => setOpen(!open)}
    >
      <div />
      <div />
      <div />
    </Button>
  );
}

Burger.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
};

const Button = styled.button`
  margin-right: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2.5rem;
  height: 2.5rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  &:focus {
    outline: none;
  }

  div {
    width: 2.5rem;
    height: 0.25rem;
    background: ${({open}) => (open ? 'var(--color-secondary)' : 'var(--color-white)')};
    border-radius: 10px;
    transition: all 0.025s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({open}) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }

    :nth-child(2) {
      opacity: ${({open}) => (open ? '0' : '1')};
      transform: ${({open}) => (open ? 'translateX(1rem)' : 'translateX(0)')};
    }

    :nth-child(3) {
      transform: ${({open}) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`;
