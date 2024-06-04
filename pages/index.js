import { Head } from 'next/head';
import styles from '../styles/Home.module.css'
export default function Home() {
  return (
    <>
    <head>
      <title>Accueil</title>
    </head>
   <h1> Accueil </h1>
   <div className={`${styles.accueil} `}>  </div>
    </>
  );
}
