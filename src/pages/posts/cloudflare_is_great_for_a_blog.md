---
title: 'Cloudflare Pages is great for static sites!'
author: 'Mark'
layout: ../../layouts/PostLayout.astro
tags: Tech, Web, Hosting
teaser: Cloudflare has an amazing offering to host your static site globally and it costs nothing!
---

# Cloudflare Pages is great for static sites!

I only recently noticed Cloudflares developer platform and beeing an acutaly hosting provider of some sort.
In my head I associated them always with DDOS prevention and similar services.
They will not give you rent you a VPS or a physical machine. They are straight up focused on static sites and a serverless ecosystem.
From what I could tell a very good product stack.
Today I would like to tell you about their Pages offering and why I think you should use it too for your static site.

## Pages is by far the cheapest
Cloudflare pages even on a free plan does not come with bandwith limitations. Hosting a static site globally(!!!) on other
services will probably also not cost you much or nothing. However usually, like in the case of Vercel, will have a total bandwith
limit. On the contrary the limit is so high that you will never hit it in most cases with a simple static site. My blog beeing hosted
on Vercel would probalby still not cost me anything.
Still limits apply at some point and the free tier of Cloudflare Pages (and other products) is very generous!

## Github integration
CI/CD is also super easy. Just configure which repo of yours should be monitored for changes and deployed from. Shortly after
your website should be deployed and accessable with great speed from around the world. Afterwards just push new changes and they
will be deployed very fast.

## Domain and SSL
Getting a domain and linking it to your project is a breeze. DNS propagation was also very fast. All in all a very good
experience. I paid about 10 bucks for the domain under which my blog and portfolio site are hosted.

## Astro
I used Astro as a static site builder for this blog and it paired very very well with Cloudflare Pages. Even serverless SSR
would be easily possible with the Cloudflare Adapter for Astro. A real joy to work with both tool in combination!
Previous to Cloudflare I hosted this blog and my portfolio on Railway (a fantastic PaaS for anything but static sites) and the
cost and performance was not even close to what you get on Cloudflare. But Cloudflares offering is optimised for exaclty this use
case: Leverage Cloudflares gigantic CDN and serverless functions around the world. Railway is great but not for static sites IMO.

## Conclusion
I was blown away by how much Cloudflare offers on their developer platform. The free tier is super super generous and as far as I can tell
much broader in limits than any other CDN/Serverless provider I know of. I have to admit though that I am not much of a serverless developer. Usually I code Python in a Django monolith.
So take that with a grain of salt. Anyway, read through their products and their docs maybe it is also the right
platform for your next project. I am already thinking about if I have any projects in mind that would benefit  from the serverless model.

Cheers!
