import Layout from '../components/layout';

export default function About() {
  return (
    <Layout title="Home">
      <p>Hi, I'm Michael. My coworkers call me Vinny.</p>
      <p>Currently a Solutions Engineer at <a href="https://www.twilio.com/">Twilio</a>. I work in technical sales, make music, write, and develop stuff.</p>
      <ul>
        <li><b>To view my current projects</b>, use the navigation menu above.</li>
        <li><b>For my technical work history</b>, visit <a href="/cv">my CV</a>.</li>
        <li><b>To hire me</b>, visit the <a href="/hire">Hiring page</a>.</li>
        <li><b>To contact me</b>, please use my email: michael(DOT)thanh(AT)mvxt.me. Alternatively, reach me via one of my social profiles shown in the footer.</li>
      </ul>
    </Layout>
  );
};
