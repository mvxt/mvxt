'use client'
import { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowRight,
  faLink,
  faLocationArrow
} from '@fortawesome/free-solid-svg-icons';

export default function Resume() {
  const jobs = [
    {
      title: 'FireHydrant',
      date: 'Feb 2022 - Present',
      positions: [
        'Sr. Solutions Engineer (2022)',
        'Lead Solutions Engineer (2023)'
      ],
      skills: 'Sales, DevOps, Observability/Monitoring Tools, Incident Management, Terraform, JavaScript',
      description: 'FireHydrant is an alerting and incident management platform that streamlines incident response. We provide a cohesive platform that ties together all your integrations and reduces stress from ring to retro.',
      location: 'Denver, CO',
      href: 'https://firehydrant.com/'
    },
    {
      title: 'Twilio',
      date: 'Jun 2021 - Jan 2022',
      positions: [
        'Solutions Engineer, Growth (2021)',
      ],
      skills: 'Sales, Node.js & JavaScript, Twilio Platform',
      description: 'Twilio is cloud communications as a service. We deliver layers of software and APIs on top of telecom networks to help other software companies build the future of communications.',
      location: 'Denver, CO',
      href: 'https://www.twilio.com/'
    },
    {
      title: 'CircleCI',
      date: 'Mar 2019 - May 2021',
      positions: [
        'Solutions Engineer (2019)',
        'Sr. Solutions Engineer (2020)'
      ],
      skills: 'CI/CD, DevOps, Sales, Node.js & JavaScript, Go, Bash, Various Tools',
      description: 'CircleCI is a Continuous Integration tool that empowers developers to push better code, faster. Our work involves reducing build times and speeding up the commit-to-deploy times for development teams everywhere.',
      location: 'Denver, CO',
      href: 'https://circleci.com/'
    },
    {
      title: 'Data Ductus, Inc.',
      date: 'Jun 2016 - Mar 2019',
      positions: [
        'Jr. Software Engineer (2016)',
        'Software Engineer (2017)'
      ],
      skills: 'Java, Python, Bash, XML/XSLT, JavaScript/NodeJS, Project Management, DevOps',
      description: 'Data Ductus, Inc. is a software consultancy specializing in NFV/SDN solutions and IoT systems development. Our work involves automating enterprise telecom and provider networks as well as developing IoT solutions for a rapidly evolving, connected world.',
      location: 'Longmont, CO',
      href: 'https://www.dataductus.com/'
    },
    {
      title: 'Total Benchmark Solution, LLC.',
      date: 'Nov 2015 - Apr 2016',
      positions: [
        'Software Development Intern'
      ],
      skills: 'PHP, MySQL, HTML/Javascript',
      description: 'Total Benchmark Solution, LLC. (acquired by Kaufman Hall) is a company specializing in health care analytics software. We develop a comprehensive solution which ingests large numbers of records from public health institutions to visualize trends and data.',
      location: 'Fort Collins, CO',
      href: 'https://www.kaufmanhall.com/total-benchmark-solution'
    },
    {
      title: 'BIT Systems',
      date: 'May 2015 - Aug 2015',
      positions: [
        'Software Engineering Intern, R&D'
      ],
      skills: 'Android, Java, MySQL, HTML/CSS/JavaScript',
      description: 'BIT Systems is a sensor development and signal processing company primarily working with the Intelligence Community & Department of Defense. I was assigned to the R&D Division where my primary tasks involved Android & web development.',
      location: 'Aurora, CO',
      href: 'http://www.caci.com/bit-systems/'
    },
    {
      title: 'ClickFox',
      date: 'May 2014 - Aug 2014',
      positions: [
        'Software Engineering Intern'
      ],
      skills: 'Java, Maven, Hadoop, PostgreSQL, Greenplum, Bash',
      description: 'ClickFox is a software company specializing in big data analytics. They perform complex analysis of "journeys", or the end-to-end experiences of users through a given system. This data is then utilized to improve enterprise services and business operations.',
      location: 'Denver, CO',
      href: 'https://www.clickfox.com/'
    }
  ];

  const renderJobs = (job) => {
    return (
      <tr key={job.title} className="text-left border-b-2 last:border-b-0">
        <th width="25%" className="align-top py-4">
          <span className="font-base text-base">{job.title}</span>
          <br />
          <span className="font-base text-sm job-date">{job.date}</span>
        </th>
        <td className="py-4">
          <span className="font-bold">
            {job.positions[0]}
            {job.positions.map((position, index) => {
              if (index !== 0) {
                return (
                  <Fragment key={position}>
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      style={{ margin: "0 5px" }}
                    />
                    {position}
                  </Fragment>
                );
              }
            })}
          </span>
          <br />
          <span className="text-sm job-skills">{job.skills}</span>
          <br /><br />
          <span>{job.description}</span>
          <br /><br />
          <span className="text-sm">
            <FontAwesomeIcon
              icon={faLocationArrow}
              className="spacer"
            />
            {job.location}
            <span className="separator">|</span>
            <FontAwesomeIcon
              icon={faLink}
              className="spacer"
            />
            <a target="_blank" href={job.href}>{job.title}</a>
          </span>
        </td>
      </tr>
    );
  }

  return (
    <Fragment>
      <p>
        Here is a summary of my professional (technical) experience. For more details and a complete history, visit <a href="https://www.linkedin.com/in/michaelthanh/">my LinkedIn</a> or reach out to me.
      </p>
      <table className="table-auto">
        <tbody>
          {jobs.map(renderJobs)}
        </tbody>
      </table>
    </Fragment>
  );
}
