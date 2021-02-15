import Layout from '../components/layout';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowRight,
  faLink,
  faLocationArrow
} from '@fortawesome/free-solid-svg-icons';

export default function CV() {
  return (
    <Layout title="CV">
      <p>
        Here is a summary of my professional experience. For a more details, visit <a href="https://www.linkedin.com/in/michaelthanh/">my LinkedIn</a> or reach out to me.
      </p>
      <table className="table offwhite-bg">
      <tbody>
        <tr>
          <th width="25%">
            <span className="title is-6">CircleCI</span>
            <br />
            <span className="subtitle is-6 job-date">Mar 2019 - Current</span>
          </th>
          <td>
            <span className="title is-6">Solutions Engineer (2019) <FontAwesomeIcon icon={faArrowRight} /> Sr. Solutions Engineer (2020)</span>
            <br />
            <span className="subtitle is-6 job-skills">CI/CD, DevOps, Sales, Node.js & JavaScript, Go, Bash, Various Tools</span>
            <br /><br />
            <span>CircleCI is a Continuous Integration tool that empowers developers to push better code, faster. Our work involves reducing build times and speeding up the commit-to-deploy times for development teams everywhere.</span>
            <br /><br />
            <FontAwesomeIcon
              icon={faLocationArrow}
              className="spacer"
            />
            Denver, CO
            <span className="subtitle separator">|</span>
            <FontAwesomeIcon
              icon={faLink}
              className="spacer"
            />
            <a href="https://circleci.com/">CircleCI</a>
          </td>
        </tr>
        <tr>
          <th width="25%">
            <span className="title is-6">Data Ductus, Inc.</span>
            <br />
            <span className="subtitle is-6 job-date">Jun 2016 - Mar 2019</span>
          </th>
          <td>
            <span className="title is-6">Jr. Software Engineer (2016) <FontAwesomeIcon icon={faArrowRight} /> Software Engineer (2017)</span>
            <br />
            <span className="subtitle is-6 job-skills">Java, Python, Bash, XML/XSLT, JavaScript/NodeJS, Project Management, DevOps</span>
            <br /><br />
            <span>Data Ductus, Inc. is a software consultancy specializing in NFV/SDN solutions and IoT systems development. Our work involves automating enterprise telecom and provider networks as well as developing IoT solutions for a rapidly evolving, connected world.</span>
            <br /><br />
            <FontAwesomeIcon
              icon={faLocationArrow}
              className="spacer"
            />
            Longmont, CO
            <span className="subtitle separator">|</span>
            <FontAwesomeIcon
              icon={faLink}
              className="spacer"
            />
            <a href="https://www.dataductus.com/">Data Ductus, Inc.</a>
          </td>
        </tr>
        <tr>
          <th width="25%">
            <span className="title is-6">Total Benchmark Solution, LLC.</span>
            <br />
            <span className="subtitle is-6 job-date">Nov 2015 - Apr 2016</span>
          </th>
          <td>
            <span className="title is-6">Software Development Intern</span>
            <br />
            <span className="subtitle is-6 job-skills">PHP, MySQL, HTML/Javascript</span>
            <br /><br />
            <span>Total Benchmark Solution, LLC. (acquired by Kaufman Hall) was a company specializing in health care analytics software. We developed a comprehensive solution which ingested large numbers of records from public health institutions to visualize trends and data.</span>
            <br /><br />
            <FontAwesomeIcon
              icon={faLocationArrow}
              className="spacer"
            />
            Fort Collins, CO
            <span className="subtitle separator">|</span>
            <FontAwesomeIcon
              icon={faLink}
              className="spacer"
            />
            <a href="https://www.kaufmanhall.com/total-benchmark-solution">Total Benchmark Solution, LLC.</a>
          </td>
        </tr>
        <tr>
          <th width="25%">
            <span className="title is-6">BIT Systems</span>
            <br />
            <span className="subtitle is-6 job-date">May 2015 - Aug 2015</span>
          </th>
          <td>
            <span className="title is-6">Software Engineering Intern, R&D</span>
            <br />
            <span className="subtitle is-6 job-skills">Android, Java, MySQL, HTML/CSS/JavaScript</span>
            <br /><br />
            <span>BIT Systems is a sensor development and signal processing company primarily working with the Intelligence Community & Department of Defense. I was assigned to the R&D Division where my primary tasks involved Android & web development.</span>
            <br /><br />
            <FontAwesomeIcon
              icon={faLocationArrow}
              className="spacer"
            />
            Aurora, CO
            <span className="subtitle separator">|</span>
            <FontAwesomeIcon
              icon={faLink}
              className="spacer"
            />
            <a href="http://www.caci.com/bit-systems/">BIT Systems</a>
          </td>
        </tr>
        <tr>
          <th width="25%">
            <span className="title is-6">ClickFox</span>
            <br />
            <span className="subtitle is-6 job-date">May 2014 - Aug 2014</span>
          </th>
          <td>
            <span className="title is-6">Software Engineering Intern</span>
            <br />
            <span className="subtitle is-6 job-skills">Java, Maven, Hadoop, PostgreSQL, Greenplum, Bash</span>
            <br /><br />
            <span>ClickFox is a software company specializing in big data analytics. They perform complex analysis of "journeys", or the end-to-end experiences of users through a given system. This data is then utilized to improve enterprise services and business operations.</span>
            <br /><br />
            <FontAwesomeIcon
              icon={faLocationArrow}
              className="spacer"
            />
            Denver, CO
            <span className="subtitle separator">|</span>
            <FontAwesomeIcon
              icon={faLink}
              className="spacer"
            />
            <a href="https://www.clickfox.com/">ClickFox</a>
          </td>
        </tr>
      </tbody>
      </table>
    </Layout>
  );
};
