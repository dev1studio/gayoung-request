import React, { useEffect, useState } from "react";
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
}))

const MenuLink = styled(LinkButton)(({ currentRouter }) => ({
  [mq.maxTablet]: {
    backgroundColor: currentRouter ? colors.background : null,
    border: currentRouter ? `2px solid ${colors.background}` : `2px solid ${colors.default}`,
    color: currentRouter ? colors.white : colors.default,
  },
  [mq.minXsmall]: {
    borderBottom: currentRouter ? `2px solid ${colors.white}` : null,
  },
}))

const Dummy = styled.div({
  ...mixin.colAuto,
})

const OptionButton = styled(LinkButton)(({ socialMedia }) => ({
  marginRight: socialMedia ? null : Rem(10),
  width: socialMedia ? Rem(38) : null,
  height: Rem(38),
  color: colors.white,
  [mq.maxTablet]: {
    color: colors.background,
  },
}))

const LinkSocialFacebook = styled.i({
  backgroundImage: `url(${images.logos.social.facebook})`,
})

const LinkSocialInstagram = styled.i({
  backgroundImage: `url(${images.logos.social.instagram})`,
})

const LinkSocialYouTube = styled.i({
  backgroundImage: `url(${images.logos.social.youTube})`,
})

function GlobalNavigation({ open, setOpen }) {
  const router = useRouter()

  const [isApp, setIsApp] = useState(false);

  useEffect(() => {
    if ("serviceWorker" in navigator) {
      if (window.matchMedia('(display-mode: standalone)').matches) {
        const timeoutIsApp = setTimeout(() => setIsApp(true), 0);
        return () => {
          clearTimeout(timeoutIsApp);
        };
      }
      if (window.navigator.standalone === true) {
        const timeoutIsApp = setTimeout(() => setIsApp(true), 0);
        return () => {
          clearTimeout(timeoutIsApp);
        };
      }
    }
  }, [isApp]);

  return (
    <NavigationBar open={open} className={styles.nav}>
      <ol onClick={() => setOpen(!open)}>
        {isApp
          ?
          null
          :
          <li>
            <MenuLink
              href={'/'}
              currentRouter={router.pathname === '/' ? true : false}
              aria-label={router.pathname === '/' ? '선택 됨' : null}
            >
              앱 내려받기
            </MenuLink>
          </li>
        }
        <li>
          <MenuLink
            href={'/search'}
            currentRouter={router.pathname === '/search' ? true : false}
            aria-label={router.pathname === '/search' ? '선택 됨' : null}
          >
            곡 검색
          </MenuLink>
        </li>
        <li>
          <MenuLink
            href={'/ideas'}
            currentRouter={router.pathname === '/ideas' ? true : false}
            aria-label={router.pathname === '/ideas' ? '선택 됨' : null}
          >
            아이디어 제안
          </MenuLink>
        </li>
      </ol>
      <Dummy />
      <ul aria-label='Social Media Links'>
        <li><OptionButton href='https://forms.gle/SuFfuU9yTa4hKHRAA' socialMedia={false}>곡 신청하기</OptionButton></li>
        {/* <li><OptionButton href='https://www.facebook.com/CleanGroundwaterLab/'><LinkSocialFacebook aria-label={t('footer.social.facebook')}></LinkSocialFacebook></OptionButton></li> */}
        <li><OptionButton href='https://www.instagram.com/spygirls_anny/' socialMedia={true}><LinkSocialInstagram aria-label='Instagram'></LinkSocialInstagram></OptionButton></li>
        <li><OptionButton href='https://www.youtube.com/c/%EA%B0%80%EC%98%81%EC%95%84%EB%85%B8%EB%9E%98%EB%B6%88%EB%9F%AC%EC%A4%98' socialMedia={true}><LinkSocialYouTube aria-label='YouTube'></LinkSocialYouTube></OptionButton></li>
      </ul>
    </NavigationBar>
  )
}

export default GlobalNavigation;
