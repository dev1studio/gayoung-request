import React from "react";
import { useRouter } from 'next/router';
import styled from '@emotion/styled';
import styles from '../../styles/Header.module.sass';
import { colors, mixin, mq, Rem } from '../../styles/designSystem';
import ToggleNavigation from './toggleNavigation';
import GlobalNavigation from './globalNavigation';

const Contents = styled.div({
  ...mixin.widthSettings,
})

const HeadingContainer = styled.header(({ open }) => ({
  width: '100%',
  position: 'relative',
  overflow: 'hidden',
  backgroundColor: colors.background,
  [mq.maxTablet]: {
    '&::before': {
      content: open ? '""' : null,
      display: open ? 'block' : null,
      width: open ? `calc(100% - ${Rem(270)})` : '100%',
      height: '100%',
      position: open ? 'fixed' : null,
      top: 0,
      left: 0,
      backgroundColor: 'rgba(34, 34, 34, .5)',
      zIndex: '99',
      transition: 'all .25s linear',
    },
  },
}))

const Background = styled.picture({
  display: 'block',
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  backgroundColor: colors.background,
})

const Img = styled.img({
  width: '100%',
  aspectRatio: '1920 / 1280',
  objectFit: 'contain',
  objectPosition: '0 0',
})

const Subject = styled.h2({
  position: 'relative',
  zIndex: 1,
  backgroundColor: colors.white,
  display: 'inline-block',
  borderRadius: Rem(5),
  padding: `${Rem(5)} ${Rem(10)}`,
  fontWeight: 900,
  fontSize: Rem(20),
  color: colors.accent,
  [mq.maxTablet]: {
    padding: `${Rem(2)} ${Rem(5)}`,
    fontSize: Rem(16),
  },
})

const Heading = styled.div({
  paddingTop: Rem(100),
  [mq.maxLarge]: {
    paddingTop: Rem(50),
  },
  '& h1': {
    fontSize: Rem(70),
    [mq.maxLarge]: {
      fontSize: '5.5vw',
    },
    [mq.maxTablet]: {
      fontSize: Rem(37),
    },
  },
})

const Notice = styled.div({
  margin: `${Rem(20)} 0 ${Rem(50)}`,
  [mq.minXlarge]: {
    margin: `${Rem(50)} 0 ${Rem(300)}`,
  },
})

const useOnClickOutside = (ref, handler) => {
  React.useEffect(() => {
    const listener = event => {
      if (!ref.current || ref.current.contains(event.target)) return;
      handler(event);
    };
    document.addEventListener("mousedown", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
    };
  }, [ref, handler]);
};

function Header() {
  const router = useRouter()

  const [open, setOpen] = React.useState(false);
  const node = React.useRef();
  useOnClickOutside(node, () => setOpen(false));

  return (
    <HeadingContainer
      className={styles['header-contents']}
      open={open}
    >
      <Background>
        <source srcSet={`/4740ae9a-12ea-491b-adf7-1d37ec04cca8.avif?${(Math.random() * 7).toString(7)}`} type="image/avif" />
        <source srcSet={`/4740ae9a-12ea-491b-adf7-1d37ec04cca8.webp?${(Math.random() * 7).toString(7)}`} type="image/webp" />
        <Img src={`/4740ae9a-12ea-491b-adf7-1d37ec04cca8.png?${(Math.random() * 7).toString(7)}`} alt="" width="1920" height="1280" />
      </Background>
      <Contents>
        <Heading><h1>가영아 노래 불러줘~*</h1></Heading>
        <div
          className={styles['nav-container']}
          ref={node}
        >
          <ToggleNavigation
            open={open}
            setOpen={setOpen}
          />
          <GlobalNavigation
            open={open}
            setOpen={setOpen}
          />
        </div>
        {router.pathname === '/' &&
          <>
            <Subject>곡 검색 only ON AIR</Subject>
            <Notice>
              <p><strong>가수명</strong> 또는 <strong>곡명</strong>으로 검색이 가능합니다.</p>
              <p><strong>초성 검색</strong>은 지원하지 않으며, <strong>앨범명</strong>으로는 검색 불가합니다.</p>
              <p>국문인 경우 띄어쓰기를 하지 않습니다 (e.g. 아빠컵엄마컵애기컵송)</p>
              <p>단, 영문인 경우에는 띄어쓰기를 해주세요.</p>
              <p>일본곡인 경우 국문, 영문, 일본어 모두 지원합니다.</p>
              <p>약어/약자 검색 지원합니다. (e.g. bts, bol4, 볼4, 블핑 등.)</p>
              <p><strong>검색 전용입니다. 곡 신청은 라방에서 앤가영에게!</strong></p>
              <p lang='en'>Please be careful of spacing when searching songs in English. Supports searching for singer names and song titles.</p>
              <p lang='ja'>J-pop/Anime OSTは英文と日本語両方に対応しています。（曲数が多くありません。すみません。）</p>
            </Notice>
          </>
        }
        {router.pathname === '/request' &&
          <>
            <Subject>곡 신청</Subject>
            <Notice>
              <p><strong>MR을 구하기 어렵거나 앤가영과 어울리지 않는 곡</strong>은 죄송하지만 반려될 수 있어요.</p>
              <p><strong>앨범으로 정식발매된 케이스가 아닌 곡</strong>은 반드시 관련 영상의 주소를 입력해 주세요.</p>
              <p lang='en'>The MR of a song that has not been released in Korea may be difficult to obtain.</p>
              <p lang='ja'>韓国で発売されていない曲のMRは入手困難な場合があります。</p>
            </Notice>
          </>
        }
        {router.pathname === '/welcome' &&
          <>
            <Subject>어서와 여기는 처음이지?</Subject>
            <Notice>
              <p>여기는 <strong>가영</strong>이가 부를 수 있는 곡을 검색하거나 신청할 수 있는 곳입니다.</p>
              <p>좋은 아이디어도 받아요! 제안 주세요~</p>
            </Notice>
          </>
        }
        {router.pathname === '/ideas' &&
          <>
            <Subject>앱 개선 아이디어</Subject>
            <Notice>
              <p>아이디어를 제안해 주세요.</p>
              <p><strong>끌로에가 제작이 가능한 경우</strong> 제안한 내용이 반영되어요.</p>
            </Notice>
          </>
        }
      </Contents>
    </HeadingContainer>
  )
}

export default Header;
