import Head from 'next/head'
import Image from 'next/image'
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
 return (
  <div className={styles.container}>
   <Head>
    <title>we2-chat App</title>
    <meta name="description" content="chat with chatGpt" />
    <link rel="icon" href="/favicon.ico" />
   </Head>

   <main className={styles.main}>
    <h1 className={styles.title}>
     Welcome to <a href="">we2 Chat!</a>
    </h1>

    <p className={styles.description}>
     to open account visit{" "}
     <a href="https://chat.openai.com/" target="_blank">
      <code className={styles.code}>https://chat.openai.com</code>
     </a>
    </p>

    <div className={styles.grid}>
     <Link href="./chat" className={styles.card}>
      <h2>Chat &rarr;</h2>
      <p>Chat with chatGpt here, if you still dnt have an account.</p>
     </Link>

     <Link href="https://nextjs.org/learn" className={styles.card}>
      <h2>Bhagvat Gita &rarr;</h2>
      <p>Learn about Bhagavad Gita by harnessing the power of GPT.</p>
     </Link>

     <Link
      href="https://github.com/vercel/next.js/tree/canary/examples"
      className={styles.card}
     >
      <h2>Examples &rarr;</h2>
      <p>
       Discover and Learn to use this app by reading through the various
       examples .
      </p>
     </Link>

     <Link
      href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
      target="_blank"
      rel="noopener noreferrer"
      className={styles.card}
     >
      <h2>About Us &rarr;</h2>
      <p>
       We wish 2 unify hinduism with tech, 4 positive impact on community. Click
       4 more
      </p>
     </Link>
    </div>
   </main>

   <footer className={styles.footer}>
    <div>
     <h5 className="text-capitalize text-decoration-underline">Powered by </h5>
    </div>
    <div className={styles.logo}>
     <Image
      src="/images/gptLogo.png"
      alt="Vercel Logo"
      width={42}
      height={40}
     />
    </div>
   </footer>
  </div>
 );
}
