---
title: 'A Reflection on my 2022 Capstone Project'
date: '2022-04-17'
---

For the capstone project of my Bachelors of Computer Science, two peers and I were tasked by a start-up out of Kelowna to create a set of web scrapers that would retrieve product data from local stores.  
<br/>   
In this article, we're going to go over my main contribution to the project, the Lightspeed site structure implementation from the beginning. The decisions made, the challenges faced, the methods used, and the end result. I would also recommend you check out the work of my peers [Justin Howson](https://github.com/justin-howson), and [Adan Sierra Calderon](https://github.com/adancalderon), who did invaluable work on this project.  
<br/>  
<br/>  

## Initial Research
When we started this project, we were given a list of sites to research, eight of which were sites that used the [Lightspeed](https://www.lightspeedhq.com/ecommerce/) site structure.  
<br/>  
After doing a brief online course on web-scraping using Node.js, I started doing the laborious and boring task of putting together an HTML webscraper for required data points. During this time I was also doing research to find a more efficient (and less agonizing) way to get the data from the sites. 
<br/>  
<br/>  
<br/>   

## Eureka!
A couple weeks in to the project, my teammate, Adan, pointed out that you could see API calls from websites using the **Network** tab in the Developer Tools. After testing this with the Lightspeed sites, I discovered that for each product being loaded, there was a call to a **.ajax** URL with the same name as that product.  

![alt text](/images/blog-images/capstone-article/cap-blog1.png)  

Lo and behold! Each URL contained all the information and more that we needed on each product including pricing, availability, images, variants, and more! From there, the gears started turning, and I started thinking about a structure that would best suit the client.  
<br/>  
<br/>  
   
## Priorities
Early in the project, our client had told us that speed was not a top priority for them. They would only be running these scrapers every once in a while to update their product library. With this in mind, I set a list of priorities for my scraper which included:

- **- Scalability**
- **- Ease of Use**
- **- Readability**  

These came from the fact that we were working with a small, fast-moving start-up with limited resrouces and programmers. The scraper needed to be easily scalable with minimal effort. The last thing I wanted was for my code to be thrown away in a handful of months because it was too costly or time-consuming to maintain and expand.
<br/>  
<br/>  
<br/>  

## The Structure
With my priorities in mind, I started building the structure of my project. I knew that I had three main things to do:

- -<br/> Get information needed for each website scraped like page URLs, and CSS selectors
- -<br/> Parse through the different pages, scraping all the product URLs and converting them to .ajax
- -<br/> Clean and output that data into a JSON array

I split these tasks up between three files respectively:

- **- site_objects.js**
- **- product_url_scraper.js**
- **- index.js**

`site_objects.js` contains only a list of objects, each one representing a single website. In each object there are 7 properties, 5 required, 2 optional, that represent the URLs for the differnt store pages on the website, and the required CSS selectors to get the product page URLs.