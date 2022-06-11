import React from "react";
import styled from '@emotion/styled';
import '../styles/globals.sass'
import Header from '../components/layout/header';
import Footer from '../components/layout/footer';

const Container = styled.div({
  width: '100%',
})

function MyApp({ Component, pageProps }) {
  return (
    <Container>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </Container>

  )
}

export default MyApp
