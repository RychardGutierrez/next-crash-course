import Head from 'next/head';

import ArticleList from '../components/ArticleList';
import Meta from '../components/Meta';
import { server } from '../config';

export default function Home({ articles }) {
  return (
    <div>
      <Meta />
      <ArticleList articles={articles} />
    </div>
  );
}

export const getStaticProps = async () => {
  const response = await fetch(`${server}/api/articles`);
  const articles = await response.json();
  return {
    props: { articles },
  };
};

// export const getStaticProps = async () => {
//   const response = await fetch(
//     `https://jsonplaceholder.typicode.com/posts?_limit=6`
//   );
//   const articles = await response.json();
//   return {
//     props: { articles },
//   };
// };
