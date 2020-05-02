---
title: Updates On Web App
categories:
  - development
  - miscellaneous updates
tags:
  - software engineering
  - software
  - development
  - web apps
  - javascript
  - vue.js
  - node.js
  - blogging
  - buefy
  - nuxt.js
date: 2018-12-28 02:52:04
---
I ended up taking a break from this project for a while to focus on work and other projects. As of right now, I am in the middle of designing the architecture for the blogging framework I will use for this website.

The plan is to store each blog post as an individual file on an S3 bucket. The files will be organized into folders by their date, and the website will be making calls to the S3 bucket to get information for rendering the pages.

There will be a companion microservice that acts as an "admin console" which will allow me to log in and write new blog posts, as if I was contributing to a blogging platform. Further details will be provided both here and on the [Static Void publication](https://medium.com/static-void-academy) on Medium.

The latest changes I've made to this site includeupdates to some information as well as a transition from a single-page application (SPA) to a universal application framework called [Nuxt.js](https://nuxtjs.org/). Everything has been reverted to static routing because although the experience may be nicer, there are serious downsides to downloading a massive JavaScript file and having the browser do all the processing/rendering. This is especially true for slow connections and for mobile devices with limited battery.

In addition, with static pages, it's easier to do SEO and custom tagging for individual blog posts and pages. As of right now, all of the posts are still coded directly into the Vue template despite Nuxt.js rendering it all to HTML. So this is still rather painful, but it will have to do until the functionality for a blogging framework is finished.

Stay tuned, and thanks again for dropping by! 
