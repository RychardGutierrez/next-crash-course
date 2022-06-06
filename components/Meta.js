import Head from 'next/head';

const Meta = ({
  title = 'WenDev News',
  keywords = 'web development, programming',
  description = 'Get the latest news in the web',
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="keywords" content={keywords} />
      </Head>
    </>
  );
};

export default Meta;
