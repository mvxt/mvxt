import { Fragment } from 'react';

export default function Home() {
  return (
    <Fragment>
      <p>Hi, I'm Michael. My coworkers call me Vinny.</p>
      <p>Currently a Lead Solutions Engineer at <a href="https://firehydrant.io/">FireHydrant</a>. I work in technical sales, make music, write, and develop stuff.</p>
      <ul className="list-disc pl-8">
        <li><b>I dabble in indie music, which you can find</b> on my <a href="/music">music page</a>.</li>
        <li><b>All of my past projects</b> can be found <a href="/projects">here</a>.</li>
        <li><b>For my technical work history</b>, visit <a href="/resume">my résumé</a>.</li>
        <li><b>To contact me</b>, reach me at michael(DOT)thanh(AT)mvxt.me or via one of my social profiles in the footer.</li>
      </ul><br/>
      <p>Thanks for stopping by.</p>
    </Fragment>
  );
}
