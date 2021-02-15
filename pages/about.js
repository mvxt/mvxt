import Layout from '../components/layout';

export default function About() {
  return (
    <Layout title="About">
      <p>Hi, I'm Michael. My coworkers call me Vinny.</p>
      <p>Currently a Senior Solutions Engineer at <a href="https://circleci.com">CircleCI</a>. I work in technical sales, make music, write, and develop stuff.</p>
      <ul>
        <li><b>For my technical work history</b>, visit <a href="/cv">my CV page</a>.</li>
        <li><b>To see the nonprofits I donate to</b>, visit <a href="/ethos">the Ethos page</a>.</li>
        <li><b>To contact me</b>, please use my email: michael(DOT)thanh(AT)mvxt.me. Alternatively, reach me via one of my social profiles shown in the footer.</li>
      </ul>
    </Layout>
  );
};
