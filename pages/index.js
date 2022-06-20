import React from "react";
import styled from '@emotion/styled';
import styles from '../styles/Welcome.module.sass';
import { colors, mixin, mq, Rem } from '../styles/designSystem';
import withHead from '../components/utilities/withHead';

const WelcomeContainer = styled.main({
  backgroundColor: colors.white,
  [mq.minXlarge]: {
    position: 'relative',
    '&::before': {
      content: "''",
      position: 'absolute',
      top: Rem(-90),
      left: 0,
      width: '100%',
      height: Rem(200),
      transform: 'skewY(-5deg)',
      backgroundColor: colors.white,
    },
  },
})

const Contents = styled.div({
  ...mixin.widthSettings,
  padding: Rem(20),
  [mq.minXlarge]: {
    padding: Rem(50),
  },
})

const Thumbnail = styled.picture()

const Img = styled.img({
  display: 'block',
  width: '100%',
  objectFit: 'contain',
  aspectRatio: '720 / 1560',
  height: 'auto',
  ...mixin.imageRendering,
})

const Description = styled.div({
  marginTop: Rem(20),
  '& p': {
    marginLeft: Rem(20),
    display: 'list-item',
    listStyle: 'outside',
    fontWeight: 700,
    fontSize: Rem(16),
    lineHeight: 1.5,
  },
  '& strong': {
    color: colors.accent,
  },
})

function Welcome() {
  return (
    <WelcomeContainer>
      <Contents className={styles['welcome-contents']}>
        <h2>‘가영아 노래 불러줘’ 앱 설치 방법</h2>
        <h3>iOS & iPadOS (for Safari)</h3>
        <div className={styles['guide-list']}>
          <div className={styles['guide-item']}>
            <Thumbnail>
              <source srcSet={`/welcome/ios0.webp?${(Math.random() * 7).toString(7)}`} type="image/webp" />
              <Img src={`/welcome/ios0.png?${(Math.random() * 7).toString(7)}`} alt="" width="720" height="1560" />
            </Thumbnail>
            <p>하단 가운데의 공유하기 버튼을 눌러주세요</p>
          </div>
          <div className={styles['guide-item']}>
            <Thumbnail>
              <source srcSet={`/welcome/ios1.webp?${(Math.random() * 7).toString(7)}`} type="image/webp" />
              <Img src={`/welcome/ios1.png?${(Math.random() * 7).toString(7)}`} alt="" width="720" height="1560" />
            </Thumbnail>
            <p><strong>`홈 화면에 추가`</strong> 메뉴를 눌러주세요</p>
          </div>
          <div className={styles['guide-item']}>
            <Thumbnail>
              <source srcSet={`/welcome/ios2.webp?${(Math.random() * 7).toString(7)}`} type="image/webp" />
              <Img src={`/welcome/ios2.png?${(Math.random() * 7).toString(7)}`} alt="" width="720" height="1560" />
            </Thumbnail>
            <p>상단 오른쪽의 <strong>`추가`</strong> 버튼을 눌러주세요</p>
          </div>
        </div>
        <h3>Android (for Chrome)</h3>
        <div className={styles['guide-list']}>
          <div className={styles['guide-item']}>
            <Thumbnail>
              <source srcSet={`/welcome/aos0.webp?${(Math.random() * 7).toString(7)}`} type="image/webp" />
              <Img src={`/welcome/aos0.png?${(Math.random() * 7).toString(7)}`} alt="" width="720" height="1560" />
            </Thumbnail>
            <p>상단 오른쪽의 메뉴 버튼을 눌러주세요</p>
          </div>
          <div className={styles['guide-item']}>
            <Thumbnail>
              <source srcSet={`/welcome/aos1.webp?${(Math.random() * 7).toString(7)}`} type="image/webp" />
              <Img src={`/welcome/aos1.png?${(Math.random() * 7).toString(7)}`} alt="" width="720" height="1560" />
            </Thumbnail>
            <p><strong>`앱 설치`</strong> 메뉴를 눌러주세요</p>
          </div>
          <div className={styles['guide-item']}>
            <Thumbnail>
              <source srcSet={`/welcome/aos2.webp?${(Math.random() * 7).toString(7)}`} type="image/webp" />
              <Img src={`/welcome/aos2.png?${(Math.random() * 7).toString(7)}`} alt="" width="720" height="1560" />
            </Thumbnail>
            <p><strong>`설치`</strong> 버튼을 눌러주세요</p>
          </div>
        </div>
        <h3>macOS & Windows (for Chrome)</h3>
        <Description>
          <p><strong>맥OS와 윈도우즈의 크롬</strong>에서는 <strong>주소 입력창 오른쪽에 있는 내려받는 아이콘</strong>을 누르세요.</p>
          <p><strong>네이버 웨일</strong>에서도 앱 설치 가능합니다.</p>
        </Description>
      </Contents>
    </WelcomeContainer>
  )
}

export default withHead(Welcome, '어서와 여기는 처음이지?');
