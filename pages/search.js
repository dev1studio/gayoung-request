import React, { useState, useEffect } from "react";
import Image from 'next/image';
import styled from '@emotion/styled';
import { colors, mixin, mq, Rem } from '../styles/designSystem';
import withHead from '../components/utilities/withHead';
import songList from "../components/pages/search/songs";
import styles from '../styles/Home.module.sass';

const Contents = styled.div({
  ...mixin.widthSettings,
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

const Thumbnail = styled.picture({
  width: Rem(120),
  height: Rem(120),
  [mq.minXsmall]: {
    width: Rem(100),
    height: Rem(100),
  },
})

const Img = styled.img({
  display: 'block',
  width: '100%',
  height: '100%',
  objectFit: 'contain',
})

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

function Home() {
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
                  <Thumbnail>
                    <source srcSet={`/album-arts/avif${song.thumbnail}.avif?${(Math.random() * 7).toString(7)}`} type="image/avif" />
                    <source srcSet={`/album-arts/webp${song.thumbnail}.webp?${(Math.random() * 7).toString(7)}`} type="image/webp" />
                    <Img src={`/album-arts/jpeg${song.thumbnail}.jpeg?${(Math.random() * 7).toString(7)}`} alt="" width="100" height="100" />
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
  );
}

export default withHead(Search, '곡 검색');
