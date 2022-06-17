import Head from 'next/head'

export default function Fallback() {
  return (
    <>
      <Head>
        <title>가영아 노래 불러줘</title>
      </Head>
      <p>인터넷에 연결되지 않은 상태입니다. 인터넷 연결 상태를 확인해 주세요.</p>
    </>
  )
}
