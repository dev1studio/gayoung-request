const paddingHorizontal = 15;
const defaultWidth = 1250;
const totalWidth = paddingHorizontal * 2 + defaultWidth;

export const mq = {
  maxMobile: `@media screen and (max-width: ${Rem(480)})`,
  minTablet: `@media screen and (min-width: ${Rem(481)})`,
  maxTablet: `@media screen and (max-width: ${Rem(768)})`,
  minXsmall: `@media screen and (min-width: ${Rem(769)})`,
  maxXsmall: `@media screen and (max-width: ${Rem(1024)})`,
  minSmall: `@media screen and (min-width: ${Rem(1025)})`,
  maxSmall: `@media screen and (max-width: ${Rem(1200)})`,
  minLarge: `@media screen and (min-width: ${Rem(1201)})`,
  maxLarge: `@media screen and (max-width: ${Rem(1280)})`,
  minXlarge: `@media screen and (min-width: ${Rem(1281)})`,
};

export const colors = {
  black: '#000',
  white: '#FFF',
  default: '#2d2a26',
  accent: '#dc2697',
  important: '#410099',
  background: '#d75d73',
};

export const mixin = {
  widthSettings: {
    margin: '0 auto',
    paddingRight: Rem(paddingHorizontal),
    paddingLeft: Rem(paddingHorizontal),
    width: '100%',
    maxWidth: Rem(totalWidth),
  },
  col: {
    display: 'block',
    flex: '1 0 0%',
    width: '100%',
    maxWidth: '100%',
  },
  colAuto: {
    flex: '0 0 auto',
    width: 'auto',
  },
  ellipsis: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },
  clearfix: {
    '&::after': {
      display: 'block',
      clear: 'both',
      content: '""',
    },
  },
  screenReaderOnly: {
    position: 'absolute',
    overflow: 'hidden',
    margin: 0,
    width: '1px',
    height: '1px',
    clip: 'rect(1px, 1px, 1px, 1px)',
  },
  visuallyHiddenFocuable: {
    position: 'absolute',
    overflow: 'hidden',
    zIndex: 20,
    margin: 0,
    width: 'auto',
    height: 'auto',
    clip: 'auto',
  },
  imageRendering: {
    imageRendering: '-webkit-optimize-contrast',
    transform: 'translateZ(0)',
    backfaceVisibility: 'hidden',
  },
};

export const Clamp = (clamp, height, lineheight) => (`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: ${clamp};
  max-height: ${height / 16}rem;
  line-height: ${lineheight};
`);

export function Rem(px) {
  const result = px / 16;
  return `${result}rem`;
};

export function Em(px) {
  const result = px / 16;
  return `${result}em`;
};
