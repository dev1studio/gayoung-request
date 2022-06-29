import React, { useEffect } from "react";
import Script from 'next/script'
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
      <Script
        id="typekit"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `(function(d) {let config = {kitId: 'rdt1yjr',scriptTimeout: 3000,async: true},h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)})(document);`,
        }}
      />
    </Container>
  )
}

export default MyApp
