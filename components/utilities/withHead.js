import Head from 'next/head';

const withHead = (Component, pageName) => {
  const App = props => {
    const domain = `https://gayoung-request.vercel.app/`

    return (
      <>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          <link rel='canonical' href={domain} />
          <meta name='format-detection' content='telephone=no' />
          <title>{pageName} : 가영아 노래 불러줘~*</title>
          <meta name='description' content={'앤가영에게 노래를 신청해 보아요'} />
          <meta name="twitter:card" content="summary_large_image" />
          <meta property='og:title' content={`${pageName} : 가영아 노래 불러줘~*`} />
          <meta property='og:description' content={'앤가영에게 노래를 신청해 보아요'} />
          <meta property='og:url' content={domain} />
          <meta property='og:locale' content={'ko_KR'} />
          <meta property='og:image' content={`${domain}og.png?${(Math.random() * 7).toString(7)}`} />
          <meta property='og:type' content='website' />
          <meta property='og:site_name' content={'가영아 노래 불러줘~*'} />
        </Head>
        <Component {...props} />
      </>
    );
  };

  return App;

};

export default withHead;
