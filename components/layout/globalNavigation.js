import { useRouter } from 'next/router';
import styled from '@emotion/styled';
import LinkButton from '../utilities/linkButton';
import { images } from '../../assets/images';
import { colors, mixin, mq, Rem } from '../../styles/designSystem';
import styles from '../../styles/Header.module.sass';

const NavigationBar = styled.nav(({ open }) => ({
  [mq.maxTablet]: {
    position: 'fixed',
    top: 0,
    right: 0,
    width: Rem(270),
    height: '100%',
    transform: open ? 'translateX(0)' : 'translateX(100vw)',
    transition: 'transform 0.25s ease-in-out',
    backgroundColor: colors.white,
    zIndex: '999',
  },
  [mq.minXsmall]: {
    position: 'absolute',
    top: Rem(15),
    right: Rem(15),
    zIndex: 9,
  },
}));

const MenuLink = styled(LinkButton)(({ currentRouter }) => ({
  [mq.maxTablet]: {
    backgroundColor: currentRouter ? colors.background : null,
    border: currentRouter ? `2px solid ${colors.background}` : `2px solid ${colors.default}`,
    color: currentRouter ? colors.white : colors.default,
  },
  [mq.minXsmall]: {
    borderBottom: currentRouter ? `2px solid ${colors.white}` : null,
  },
}));

const Dummy = styled.div({
  ...mixin.colAuto,
});

const LinkSocialFacebook = styled.i({
  backgroundImage: `url(${images.logos.social.facebook})`,
});

const LinkSocialInstagram = styled.i({
  backgroundImage: `url(${images.logos.social.instagram})`,
});

const LinkSocialYouTube = styled.i({
  backgroundImage: `url(${images.logos.social.youTube})`,
});

function GlobalNavigation({ open, setOpen }) {
  const router = useRouter()

  return (
    <NavigationBar open={open} className={styles.nav}>
      <ol onClick={() => setOpen(!open)}>
        <li>
          <MenuLink
            href={'/'}
            currentRouter={router.pathname === '/' ? true : false}
            aria-label={router.pathname === '/' ? '선택 됨' : null}
          >
            곡 검색
          </MenuLink>
        </li>
        <li>
          <MenuLink
            href={'/request'}
            currentRouter={router.pathname === '/request' ? true : false}
            aria-label={router.pathname === '/request' ? '선택 됨' : null}
          >
            곡 신청
          </MenuLink>
        </li>
      </ol>
      <Dummy />
      <ul aria-label='Social Media Links'>
        {/* <li><LinkButton href='https://www.facebook.com/CleanGroundwaterLab/'><LinkSocialFacebook aria-label={t('footer.social.facebook')}></LinkSocialFacebook></LinkButton></li> */}
        <li><LinkButton href='https://www.instagram.com/spygirls_anny/'><LinkSocialInstagram aria-label='Instagram'></LinkSocialInstagram></LinkButton></li>
        <li><LinkButton href='https://www.youtube.com/c/%EA%B0%80%EC%98%81%EC%95%84%EB%85%B8%EB%9E%98%EB%B6%88%EB%9F%AC%EC%A4%98'><LinkSocialYouTube aria-label='YouTube'></LinkSocialYouTube></LinkButton></li>
      </ul>
    </NavigationBar>
  )
}

export default GlobalNavigation;
