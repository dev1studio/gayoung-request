import React from 'react';
import styled from '@emotion/styled';
import { colors, mq, Rem } from '../../styles/designSystem';
import { images } from '../../assets/images';

const ButtonNavigation = styled.button(({ open }) => ({
  position: open ? 'fixed' : 'absolute',
  zIndex: 9999,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-evenly',
  backgroundColor: 'transparent',
  top: Rem(15),
  right: Rem(15),
  border: open ? `2px solid ${colors.background}` : `2px solid ${colors.white}`,
  borderRadius: Rem(5),
  padding: `${Rem(7)} 0`,
  width: Rem(40),
  height: Rem(40),
  '&:focus': {
    outline: `2px solid transparent`,
  },
  [mq.minXsmall]: {
    display: 'none',
  },
  '& i': {
    display: 'block',
    width: Rem(27),
    height: Rem(27),
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '50% 50%',
    backgroundSize: 'contain',
    backgroundImage: open ? `url(${images.icons.menuOpen})` : `url(${images.icons.menuClose})`,
    transition: 'all .25s linear',
    transformOrigin: '2px',
    position: 'relative',
  },
}));

ButtonNavigation.defaultProps = {
  type: 'button',
};

function ToggleNavigation({ open, setOpen }) {
  return (
    <ButtonNavigation
      aria-label={open ? '메뉴 닫힘' : '메뉴 열림'}
      aria-pressed={open}
      open={open}
      onClick={() => setOpen(!open)}
    >
      <i />
    </ButtonNavigation>
  )
}

export default ToggleNavigation;
