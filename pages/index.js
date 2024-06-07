import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'


export default function Home() {
  return (
    <>
     <Header/>
    <Head>
      <title>Accueil</title>
    </Head>
   <h1><span className="material-icons">home</span> Accueil </h1>

    </>
  );
}
// {`$(styles.icon