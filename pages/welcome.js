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

function Welcome() {
  return (
    <WelcomeContainer>
      <Contents className={styles['welcome-contents']}>
        <h2>‘가영아 노래 불러줘’ 앱 설치 방법</h2>
        <h3>iOS & iPadOS (for Safari)</h3>
        <h3>Android (for Chrome)</h3>
        <h3>macOS & Windows (for Chrome)</h3>
      </Contents>
    </WelcomeContainer>
  )
}

export default withHead(Welcome, '어서와 여기는 처음이지?');
