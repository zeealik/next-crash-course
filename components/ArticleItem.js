import Link from 'next/link'
import articleStyles from '../styles/Article.module.css'

const ArticleItem = ({ article, key }) => {
  return (
    <Link key={key} href={`/article/${article.id}`}>
      <a className={articleStyles.card}>
        <h3 >{article.title} &rarr;</h3>
        <p>{article.body}</p>
      </a>
    </Link>
  )
}

export default ArticleItem
