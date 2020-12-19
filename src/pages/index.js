import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div class={styles.container}>
      <p>nextjs app</p>
      안녕하세요 this is next.js Application

      <style jsx global>{`
        html, body {
          margin: 0;
          padding: 0;
        }
      `}</style>
    </div>
  )
}
