import Link from 'next/link';

import articlesStyles from '../../../styles/Article.module.css';
import { server } from '../../../config';
import Meta from '../../../components/Meta';

const article = ({ article }) => {
  return (
    <>
      <Meta title={article.title} keywords="articles" description="" />
      <div className={articlesStyles.grid}>
        <h1>{article.title}</h1>
        <p>{article.body}</p>
        <br />
        <Link href="/">
          <div className={articlesStyles.button}>Go to Home</div>
        </Link>
      </div>
    </>
  );
};

export const getStaticProps = async (context) => {
  const response = await fetch(`${server}/api/articles/${context.params.id}`);
  const article = await response.json();
  return { props: { article } };
};

export const getStaticPaths = async () => {
  const response = await fetch(`${server}/api/articles`);
  const articles = await response.json();

  const paths = articles.map((params) => ({
    params: { id: params.id.toString() },
  }));

  return { paths, fallback: false };
};

// export const getServerSideProps = async (context) => {
//   const response = await fetch(
//     `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
//   );
//   const article = await response.json();
//   return { props: { article } };
// };

// export const getStaticProps = async (context) => {
//   const response = await fetch(
//     `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
//   );
//   const article = await response.json();
//   return { props: { article } };
// };

// export const getStaticPaths = async () => {
//   const response = await fetch(`https://jsonplaceholder.typicode.com/posts/`);
//   const articles = await response.json();

//   const paths = articles.map((params) => ({
//     params: { id: params.id.toString() },
//   }));

//   return { paths, fallback: false };
// };

export default article;
