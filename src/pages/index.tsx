import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <Head>
        <title>HomePage</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Link href="/posts">
        <a>posts</a>
      </Link>
      <Link href="/about">
        <a>about</a>
      </Link>
    </div>
  );
}
