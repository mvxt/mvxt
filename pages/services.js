import React from 'react';
import Layout from '../components/layout';
import { InlineWidget } from "react-calendly";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faComments,
  faIdCard,
  faUserMd,
  faWindowRestore
} from '@fortawesome/free-solid-svg-icons';

export default function Hire() {

  let services = [
    {
      title: "Speech Coaching",
      description: "Need someone to watch your presentation and coach you? I work as a Sales Engineer; we do sales presentations and demos, and we effectively answer ad-hoc questions and improvise on-call. Book a Discovery call with me first so I understand your needs, and we'll come up with a tailored plan just for you.",
      icon: faComments
    },
    {
      title: "Résumé Review & Editing",
      description: "I am a professional with years of experience on both sides of the table. I know exactly what recruiters are looking for, so let me help you get hired!",
      icon: faIdCard
    },
    {
      title: "Website Development",
      description: "If you're looking for a custom website, I've got extensive experience developing both simple landing pages and more complex applications with a cloud back-end. Book a Discovery call and let's talk about your needs.",
      icon: faWindowRestore
    },
    {
      title: "Other",
      description: "I'm generally skilled with most computer & IT-related tasks. Need an admin assistant? I can help. Need to do anything spreadsheet or data related? I'm your guy. Schedule a Discovery call today, and we'll see if it's a good fit.",
      icon: faUserMd
    }
  ];

  const renderServices = (service) => {
    return (
      <li className="hire-list" key={service.title}>
        <FontAwesomeIcon
          icon={service.icon}
          style={{ margin: "0 5px 0 0" }}
        />
        <b>{service.title}</b> - {service.description}
      </li>
    );
  };

  return (
    <Layout title="Hire Me">
      <p>
        I'm available for hire on part-time jobs and contract gigs. My hours are evenings and weekends, and I offer the following services:
      </p>
      <ul>
        {services.map(renderServices)}
      </ul>
      <InlineWidget
        style={{ overflow: "hidden" }}
        url="https://calendly.com/mvxt?hide_landing_page_details=1&primary_color=660000"
      />
    </Layout>
  );
};
