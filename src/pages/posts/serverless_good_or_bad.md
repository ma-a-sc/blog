---
title: 'My new rabbit hole - Serverless Exploration Log 1'
author: 'Mark'
layout: ../../layouts/PostLayout.astro
tags: Tech, Web, Serverless,
teaser: My reasons for diving head first into serverless.
---

# My new rabbit hole - Serverless Exploration Log 1

I have no pratical experience with serverless computing until now. Professionally I work with a Django monolith running on EC2 in containers.
Basically the polar opposite of serverless computing. I have heard alot why serverless is great (e.g. Theo/T3) or why serverless is bad (e.g. the Primagen).
Now I want to use it myself to finally prove my biases wrong or true. This will be a series so stay tuned.

## My Biases and Assumptions

1. Serverless systems are easy to get up to speed with
2. Serverless systems are hard to maintain once exceeding the inital phase
3. Serverless systems have poor observability
4. Serverless systems are fast
5. Serverless systems cost will eventually scale exponentially (especially DBs as they are paid by rows scanned which will not scale liniarly by user)
6. Serverless systems are hard to setup for local development
7. Serverless systems have a problem with vendor lockin
8. Serverless systems can scale to prod on free tiers alone
9. Serverless systems have a hard time with user management

These biases will be addressed in following posts in the series. Lets see how I view serverless systems after working with them for a while.
I want to elaborate on my 9nth bias. Like I mentioned I work with a Django monolith and I have to say the amount of time opening up the interactive
shell on our test or prod systems saved us a lot of time while trying to fix customers or pull data from the system is insane. I have no idea how that
is done on a serverless system.

## Constraints

I have some constraints in mind for this project. I will be using Astro as my meta framework mainly because I have some experience with it and it
was the first meta framework that I liked working with (looking at you NextJS). Astro is great and can be used, as far as I know, as static site builder,
server rendered monolith etc. etc..
The hosting service I will use is Cloudflare. On Cloudflare the offering it solid. Their free tier is generous and has no limit on data transfer which I
already saw as a concern when I looked at the pricing of Vercel. Also Cloudflares pricing just seems a bit more straight forward, they have a gigantic global network
with protection services and domain registration as well.

The next constraint I set for my journey is that I will try not to go outside of the Cloudflare ecosystem. I will try my best to implement
everything on their platform. This seems weird as I have the bias of vendor locking but I will try to migrate away from Cloudflare to check that point.

At the same time I will not use thrid party auth services. I have seen far to many post on why rolling your own auth is hard and bad. I do not agree with that
point as I have rolled my own JWT auth for my own projects multiple times. Lets see how hard that is in a serverless context.

## The goal
I want to build Limon in this exploration. Limon should be an app which makes cooking with friends easier. It is a SaaS app. Hence, the usual stuff must be
build: user login/registration, auth, payment, and integratin with the spoonacular api.

So lets get building and lets see which biases hold true and which turn out to be complete bullshit. I am excited for the journey! Hope you are as well.
