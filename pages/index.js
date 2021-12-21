import {server} from '../config'
import Head from 'next/head'
import ArticleList from '../components/ArticleList'
import styles from '../styles/Layout.module.css'

export default function Home({ articles }) {
  return (
    <div>
      <Head>
        <title>Web Dev Newss</title>
        <meta name='keywords' content='web development programming' />
      </Head>
      <ArticleList articles={articles}/>
    </div>
  )
}


export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/articles`)
  const articles = await res.json();


  return {
    props: {
      articles
    }
  }
}  