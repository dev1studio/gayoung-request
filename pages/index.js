import React, { useState, useEffect } from "react";
import songList from "../components/songs";
import styles from '../styles/Home.module.sass';
import styled from '@emotion/styled';
import { colors, mixin, mq, Rem } from '../styles/designSystem';

const Container = styled.div({
  width: '100%',
})

const Contents = styled.div({
  ...mixin.widthSettings,
})

const HeadingContainer = styled.header({
  width: '100%',
  position: 'relative',
  overflow: 'hidden',
  backgroundColor: colors.background,
  '&::before': {
    content: "''",
    display: 'block',
    position: 'absolute',
    top: 0,
    left: 0,
    paddingTop: '66.66666667%',
    width: '100%',
    height: 0,
    background: `${colors.background} url(/4740ae9a-12ea-491b-adf7-1d37ec04cca8.png?${(Math.random() * 7).toString(7)}) no-repeat 50% 0/contain`,
  },
})

const FooterContainer = styled.footer({
  width: '100%',
  [mq.minXlarge]: {
    backgroundColor: colors.background,
  },
})

const SearchContainer = styled.main({
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

const SearchForm = styled.div({
  backgroundColor: colors.white,
})

const Search = styled.input({
  display: 'block',
  margin: `0 ${Rem(-15)}`,
  padding: `0 ${Rem(20)}`,
  width: `calc(100% + ${Rem(30)})`,
  height: Rem(100),
  fontSize: Rem(50),
  [mq.maxLarge]: {
    height: '7.9vw',
    fontSize: '3.9vw',
  },
  [mq.maxTablet]: {
    height: Rem(60),
    fontSize: Rem(30),
  },
})

const List = styled.ul({
  padding: `${Rem(20)} 0`,
  [mq.minXlarge]: {
    padding: `${Rem(50)} 0`,
  },
  '& li': {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'relative',
    padding: `${Rem(10)} 0`,
    fontSize: Rem(20),
  },
})

const Summary = styled.div({
  display: 'flex',
})

const Thumbnail = styled.div(({ thumbnail }) => ({
  width: Rem(120),
  height: Rem(120),
  [mq.minXsmall]: {
    width: Rem(100),
    height: Rem(100),
  },
  '& i': {
    display: 'block',
    width: '100%',
    height: '100%',
    background: `url(${thumbnail}) no-repeat 50% 50%/cover`,
  },
}))

const Info = styled.div({
  ...mixin.col,
  display: 'flex',
  flexDirection: 'column',
  paddingLeft: Rem(20),
  [mq.minXlarge]: {
    justifyContent: 'center',
  },
  '& strong': {
    paddingBottom: Rem(5),
    fontSize: Rem(16),
    [mq.maxTablet]: {
      lineHeight: '1.3',
    },
    [mq.minXsmall]: {
      fontSize: Rem(22),
    },
    [mq.minXlarge]: {
      paddingBottom: Rem(15),
    },
  },
  '& em': {
    fontSize: Rem(14),
    [mq.maxTablet]: {
      lineHeight: '1.3',
    },
    [mq.minXsmall]: {
      fontSize: Rem(18),
    },
  },
})

const Album = styled.small({
  fontSize: Rem(12),
  fontFamily: "'Noto Serif KR', serif",
  [mq.minXsmall]: {
    fontSize: Rem(16),
  },
  [mq.maxXsmall]: {
    position: 'absolute',
    bottom: Rem(15),
    left: Rem(120),
  },
  [mq.maxTablet]: {
    left: Rem(140)
  },
});

export default function Home() {
  const [songs, setSongs] = useState([]);
  const [search, setSearch] = useState(null);

  useEffect(() => {
    getSongs(songList);
  }, []);

  const getSongs = songList => {
    setSongs(songList);
  };

  const bySearch = (song, search) => {
    if (search) {
      return song.name.toLowerCase().includes(search.toLowerCase());
    } else return song;
  };

  const filteredList = (songs, search) => {
    return songs.filter(song => bySearch(song, search));
  };

  return (
    <Container className={styles.container}>
      <HeadingContainer className={styles['header-contents']}>
        <Contents>
          <Heading><h1>가영아 노래 불러줘~*</h1></Heading>
          <Notice>
            <p><strong>가수명</strong> 또는 <strong>곡명</strong>으로 검색이 가능합니다.</p>
            <p><strong>초성 검색</strong>은 지원하지 않으며, <strong>앨범명</strong>으로는 검색 불가합니다.</p>
            <p>국문인 경우 띄어쓰기를 하지 않습니다 (e.g. 아빠컵엄마컵애기컵송)</p>
            <p>단, 영문인 경우에는 띄어쓰기를 해주세요.</p>
            <p>일본곡인 경우 국문, 영문, 일본어 모두 지원합니다.</p>
            <p>약어/약자 검색 지원합니다. (e.g. bts, bol4, 볼4, 블핑 등.)</p>
            <p><strong>검색 전용입니다. 곡 신청은 직접 앤가영에게!</strong></p>
            <p>Please be careful of spacing when searching songs in English. Supports searching for singer names and song titles.</p>
            <p>J-pop/Anime OSTは英文と日本語両方に対応しています。 （曲数が多くありません。すみません。）</p>
          </Notice>
        </Contents>
      </HeadingContainer>
      <SearchContainer>
        <Contents className={styles['search-contents']}>
          <SearchForm>
            <Search
              type="search"
              placeholder="찾는 곡을 입력하세요"
              onChange={e => setSearch(e.target.value)}
            />
            <List>
              {filteredList(songs, search).map(song => (
                <li key={song.id}>
                  <Summary>
                    <Thumbnail thumbnail={song.thumbnail}>
                      <i />
                    </Thumbnail>
                    <Info>
                      <strong>{song.title}</strong>
                      <em>{song.singer}</em>
                    </Info>
                  </Summary>
                  <Album>{song.album}</Album>
                </li>
              ))}
            </List>
          </SearchForm>
        </Contents>
      </SearchContainer>
      <FooterContainer className={styles['footer-contents']}>
        <Contents>
          <p>이곳은 앤가영이 부를 수 있는 곡을 안내하는 곳입니다.</p>
          <p>신청 기능 또는 노래 듣기 기능은 없습니다.</p>
          <p>앤가영이 부를 수 있는 곡이 생길 때마다 업데이트 됩니다.</p>
          <p>라이브 방송: 매주 월요일 20시 `가영아 노래 불러줘` 유튜브 채널</p>
          <strong>제작: 끌로에 * 이미지: 앤가영</strong>
        </Contents>
      </FooterContainer>
    </Container>
  );
}
