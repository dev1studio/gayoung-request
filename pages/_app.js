import React, { useEffect } from "react";
import styled from '@emotion/styled';
import '../styles/globals.sass'
import Header from '../components/layout/header';
import Footer from '../components/layout/footer';

const Container = styled.div({
  width: '100%',
})

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      window.addEventListener("load", function () {
        navigator.serviceWorker.register("/sw.js").then(
          function (registration) {
            console.log(
              "Service Worker registration successful with scope: ",
              registration.scope
            );
          },
          function (err) {
            console.log("Service Worker registration failed: ", err);
          }
        );
      });
    }
  }, []);

  return (
    <Container>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </Container>
  )
}

export default MyApp
