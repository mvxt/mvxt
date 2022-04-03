import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowUpRightFromSquare,
  faIdCard,
  faUserMd,
  faWindowRestore
} from '@fortawesome/free-solid-svg-icons';

import Layout from '../components/layout';

export default function Hire() {
  let testimonials = [
    {
      name: 'Rebecca',
      img: '/img/testimonials/rebecca.png'
    }
  ];

  const renderTestimonial = (testimonial) => {
    return (
      <React.Fragment key={testimonial.name}>
        <button
          className="container px-5 py-2 mx-auto"
          data-bs-toggle="modal"
          data-bs-target={"#modal" + testimonial.name}
        >
          <div className="flex flex-wrap -m-1 md:-m-2">
            <div className="flex flex-wrap w-full">
              <div className="w-full p-1 md:p-2">
                <img
                  alt={"Testimonial from " + testimonial.name}
                  className="block object-cover object-center w-full h-full rounded-lg"
                  src={testimonial.img}
                />
              </div>
            </div>
          </div>
        </button>
        <div
          id={"modal" + testimonial.name}
          tabIndex="-1"
          aria-labelledby={"modalLabel" + testimonial.name}
          aria-hidden="true"
          className="
            modal
            fade
            fixed
            top-0
            left-0
            hidden
            w-full
            h-full
            outline-none
            overflow-x-hidden
            overflow-y-auto
          "
        >
          <div className="modal-dialog modal-dialog-centered modal-xl relative w-full pointer-events-none">
            <div
              className="
                modal-content
                border-none
                shadow-lg
                relative
                flex
                flex-col
                w-full
                pointer-events-auto
                bg-white
                bg-clip-padding
                rounded-md
                outline-none
                text-current
              "
            >
              <div className="
                  modal-header
                  flex
                  flex-shrink-0
                  items-center
                  justify-between
                  p-4
                  rounded-t-md
                "
              >
                <button
                  type="button"
                  className="
                    btn-close
                    box-content
                    w-4
                    h-4
                    p-1
                    text-black
                    border-none
                    rounded-none
                    opacity-50
                    focus:shadow-none
                    focus:outline-none
                    focus:opacity-100
                    hover:text-black
                    hover:opacity-75
                    hover:no-underline
                  "
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body relative p-4">
                <img
                  alt={"Testimonial from " + testimonial.name}
                  className="block object-cover object-center w-full h-full rounded-lg"
                  src={testimonial.img}
                />
              </div>
              <div
                className="
                  modal-footer flex flex-shrink-0 flex-wrap
                  items-center justify-end p-4 rounded-b-md
                "
              >
                <button
                  type="button"
                  className="px-6 py-2.5 font-medium border-2 border-gray-300
                    text-xs leading-tight rounded shadow-md hover:bg-gray-100
                    hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0
                    transition duration-150 ease-in-out
                  "
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  };

  let services = [
    {
      key: "resume",
      title: "Résumé Review",
      description: (
        <React.Fragment>
          <p>I know what recruiters and scanners look for. Once you're in the interview, it's all up to your skills and efforts - but I can at least help you with landing the conversation!</p>
          <p><b>How this works:</b></p>
          <p>
            <ol className="list-decimal ml-8">
              <li>Purchase my <a href="https://vinnythen00b.gumroad.com/l/resume-review">résumé review on Gumroad.</a> The purchase will come with a PDF with detailed instructions on what to do.</li>
              <li>You'll send me an email with the required info along with an attachment of your résumé (make sure you follow instructions exactly).</li>
              <li>Depending on which tier you purchased, I'll get back to you with suggestions/advice within 2 or 7 days.</li>
              <li>You make the changes I suggest.</li>
              <li>You apply with your new résumé and land interviews.</li>
            </ol>
          </p>
          <p>
            <b>Testimonials</b>
          </p>
          {testimonials.map(renderTestimonial)}
          <p className="mt-4">
            Interested? Find out more information by visiting the Gumroad page below.
          </p>
          <p className="text-center">
            <button
              className="rounded-full px-6 py-3 text-white bg-primary hover:bg-red-800"
              onClick={(e) => {
                window.open('https://vinnythen00b.gumroad.com/l/resume-review');
              }}
            >
              <FontAwesomeIcon
                icon={faArrowUpRightFromSquare}
                style={{ margin: "0 5px 0 0" }}
              />
              Résumé Review on Gumroad
            </button>
          </p>
        </React.Fragment>
      ),
      icon: faIdCard
    },
    {
      key: "other",
      title: "Other",
      description: (
        <p>I'm generally skilled with music production and video editing. If you're looking for someone to edit your videos or compose some music for a project, contact me and we'll see if it's a good fit!</p>
      ),
      icon: faUserMd
    }
  ];

  const renderService = (service) => {
    return (
      <div
        key={service.key}
        className="accordion-item bg-white border-t-0 border-l-0 border-r-0"
      >
        <h2
          id={"heading" + service.key}
          className="accordion-header"
          style={{ margin: 0 }}
        >
          <button
            className={(service.key === "resume" ? "" : "collapsed") +
              " accordion-button relative flex items-center w-full px-5 py-4 text-base text-gray-800 text-left bg-white border-0 rounded-none transition focus:outline-none"
            }
            style={{ color: "black" }}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target={"#collapse" + service.key}
            aria-expanded={service.key === "resume"}
            aria-controls={"collapse" + service.key}
          >
            <FontAwesomeIcon
              icon={service.icon}
              style={{ margin: "0 5px 0 0" }}
            />
            <b>{service.title}</b>
          </button>
        </h2>
        <div
          id={"collapse" + service.key}
          className={(service.key === "resume" ? "show" : "") + " accordion-collapse collapse"}
          aria-labelledby={"heading" + service.key}
          data-bs-parent="#servicesAccordion"
        >
          <div className="accordion-body py-4 px-5">
            {service.description}
          </div>
        </div>
      </div>
    );
  };

  return (
    <Layout title="Services">
      <p>
        <b>Need help?</b> See the following areas I offer services.
      </p>
      <div className="accordion accordion-flush mb-10" id="servicesAccordion">
        {services.map(renderService)}
      </div>
    </Layout>
  );
};
