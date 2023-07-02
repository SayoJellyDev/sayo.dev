---
layout: post
title:  "Home Server Dashboard"
date:   2023-01-27 16:00:00 +1000
categories: blog Side Project
background-image: /assets/images/post-images/dashboard/preview.png
excerpt_separator: <!-- excerpt_end -->
---
<!-- excerpt_start -->
I've always had a habit of creating random projects, many never seeing the light of day, but some get a little further. 
This dashboard is one of those projects!
<!-- excerpt_end -->

My home server dashboard. It's basic, but it allows me to navigate to my self-hosted services quickly and, in addition, to turn my home server on and off from anywhere!

## What's it made with, you ask?
Well, HTML and CSS for the front end, using sockets to communicate to a NodeJS server! The server handles tracking of which services are online and provides the front end with that data on request. The front end then converts the data into elements on the screen, creating a tidy dashboard :D.

## But why not use the many other dashboards?
I like having control over my dashboard.
Simply put, I always have trouble styling other dashboards to precisely what I want, so I decided to make my own, with complete control over the HTML and CSS, including the data sent to the front end. 

This control also allows me to make features that would otherwise be difficult to add to other dashboards, like controlling certain aspects of my server. For example, the ability to turn the home server on and off whenever, where ever!

Here are some screenshots!
<div class="library">
    <div class="title">
        <span>Image Collection</span>
    </div>
    <div class="image" markdown="span">
        ![Desktop](/assets/images/post-images/dashboard/desktop.png)
        <span class="description">Desktop format example</span>
    </div>
    <div class="image" markdown="span">
        ![Mobile](/assets/images/post-images/dashboard/mobile.png)
        <span class="description">Mobile format example</span>
    </div>
</div>