import Layout from '../components/layout';
import printLinks from '../utils/printLinks';

export default function Blog() {
  return (
    <Layout title="Blog">
      <figure className="image">
        <img src="/img/medium-long.jpg" alt="Medium Profile" />
      </figure>
      <br />
      <p>I write periodically on Medium about a variety of topics. I've contributed to several different publications like <a href="https://medium.com/better-programming">Better Programming</a>, <a href="https://medium.com/swlh">The Startup</a>, and <a href="https://medium.com/mind-cafe">Mind Cafe</a>. I've also been featured as a Top Writer in Technology, Productivity, and Self Improvement.</p>
      <p>The views expressed on these articles are my own, and they do not represent the views of any organizations or employers I am, have been, or will be a part of.</p>
      <p><a href="https://blog.mvxt.me">Visit my blog here</a>.</p>
    </Layout>
  );
};
