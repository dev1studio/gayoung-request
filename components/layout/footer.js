import React from "react";
import { useRouter } from 'next/router';
import styled from '@emotion/styled';
import styles from '../../styles/Footer.module.sass';
import { colors, mixin, mq } from '../../styles/designSystem';

const Contents = styled.div({
  ...mixin.widthSettings,
})

const FooterContainer = styled.footer({
  width: '100%',
  [mq.minXlarge]: {
    backgroundColor: colors.background,
  },
})

function Footer() {
  const router = useRouter()

  return (
    <FooterContainer className={styles['footer-contents']}>
      <Contents>
        {router.pathname === '/' ?
          <>
            <p>이 페이지는 앤가영이 부를 수 있는 곡을 안내하는 곳입니다.</p>
            <p>곡 신청은 라방에서 앤가영에게 직접 해주세요.</p>
            <p>앤가영이 부를 수 있는 곡이 생길 때마다 업데이트 됩니다.</p>
          </>
          : null
        }
        <p>라이브 방송: 매주 월요일 20시 `가영아 노래 불러줘` 유튜브 채널</p>
        <strong>제작: 끌로에 * 이미지: 앤가영</strong>
      </Contents>
    </FooterContainer>
  )
}

export default Footer;
