import React, { FC, useEffect, useState } from 'react'
import { api } from '../../constants';
import "./Articles.css"

export const Articles: FC = () => {
  const [acrtiles, setActiles] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("")


  const getFetchArticles = async () => {
    setLoading(true)
    setError("")

    try {
      const response = await fetch(api);
      if (!response.ok) {
        throw new Error("no ok!");
      }
      const data = await response.json();
      setActiles(data)
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getFetchArticles()
  }, []);

  return (
    <>
      <h2>Articles</h2>
      {loading && <p>Loading..</p>}
      {!loading && (
        <ul className='new'>
          {acrtiles.map(article => <li key={article.id}>
            <h3>{article.title}</h3>
            <img src={article.imageUrl} />
            <h4>{article.newsSite}</h4>
            <p>{article.publishedAt}</p>
            <p>{article.summary}</p>
            <a href={article.url}>ссылка на источник</a>
          </li>)}
        </ul>
      )}

      {error && <p>{error}</p>}

      <button onClick={() => getFetchArticles()}>reload</button>
    </>
  )
}
