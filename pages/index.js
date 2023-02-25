import Layout from '../components/layout';

export default function Index() {
  return (
    <Layout title="Home">
      <p>Hi, I'm Michael. My coworkers call me Vinny.</p>
      <p>Currently a Lead Solutions Engineer at <a href="https://firehydrant.io/">FireHydrant</a>. I work in technical sales, make music, write, and develop stuff.</p>
      <ul className="list-disc pl-8">
        <li><b>View my current projects</b> by using the navigation menu above.</li>
        <li><b>For my technical work history</b>, visit <a href="/resume">my résumé</a>.</li>
        <li><b>Downloads and resources</b> are available on the <a href="/resources">Resources page</a>.</li>
        <li><b>If you need help with your résumé</b>, read about what I provide on the <a href="/services">Services page</a>.</li><br/>
        <li><b>Finally, to contact me</b>, reach me at michael(DOT)thanh(AT)mvxt.me or via one of my social profiles in the footer.</li>
      </ul><br/>
      <p>Thanks for stopping by.</p>
    </Layout>
  );
};
