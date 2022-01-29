# MiniTravels


https://user-images.githubusercontent.com/85858695/145779318-db5f2322-a60c-444c-8149-8acf748365f6.mp4



## INTRODUCTION


Until a person breaks from the dull routine, physically and mentally, he cannot find satisfaction; travelling helps us to achieve this break and rejuvenates us. At a new place, one is curious to know and eager to gather information. He/she gets thrills and surprises that keep his interests alive. Travelling is absorbing, educative and refreshing for the mind and the body.
The travel industry, therefore, refers to the numerous aspects of the wider service industry which cater for the needs and desires of those who have travelled from one part of the world to another. Some of the wider sectors in travelling industry are: Transportation, Accommodation, Food & Beverage, Entertainment, Financial services, Travel agents etc
The travel & tourism industry continues to grow at a rate that is faster than world GDP. Worldwide overnight tourist arrivals now exceed 1.2 billion, an increase of nearly 25% over the past five years. Over that same time period, the total annual economic impact of travel has grown to $7.2tn. Growth has been fuelled by new destinations, technology, improved transport networks, and a growing middle class in emerging markets.
In the project, we also attempt to make a travel website, providing booking functionality to users

## SCOPE


Tourism management is a multidisciplinary field that includes all activities related to the tourism and hospitality industries. It itself comprises a number of different sectors such as transportation, hospitality, accommodation, trip planning, entertainment etc.
In this project, we work with 3 prominent areas in tourism industry. In the project, we have included Hotels, to provide accommodation for tourists, car rentals to provide ease of travel (renting cars), and trips to provide an overall package.  The website provides different options to user to choose from. The user can search for required service, and also sort according to different parameters. After finding the relevant service/package, user can view more details about the required package/service, fill details and book the item.

## PURPOSE


The purpose of the project is to make a convenient, user-friendly website that provides an all-in-one booking functionality for hotels, car rentals and trips. We also aim to provide a variety of options for the user, and also make it easy to search for a required package, and sort according to their needs as well as making the trips affordable by providing discounts, and coupons wherever applicable. The project has a lot of future scope where we can try to incorporate machine learning to help user recommendations, as well as dynamic pricing

## DESCRIPTION OF MODULES:


We have used a lot of functions in the project. Some of the main modules/functions implemented in the project:


### A.LOGIN


Functions present in auth.js:
#### 1.	signup()
Signup function is used for registering a new user, The method used for authentication is traditional email password. The values are taken/retrieved from signup form(modal) and password and email are set in Users table in firestore
#### 2.	login()
Providing authentication to user by checking email and password entered. 
#### 3.	logout() 
Logs the user out.
#### 4.	modify()
When user logs out or logs in, It does the required change in display. As, when user logs in, the screen shows user name and logout button. And when user is logged out, shows login and register button.


### B. MAIN PAGES (HOTELS, CAR RENTALS, TRIPS)


Slightly different functions used in all pages, some of the major ones shown:
#### 1.	readall()
Reads all the records of a particular collection (Trips ,Car rentals ,Hotels),retrieves from database and passes to getinfo for printing the desired information.
#### 2.	search()
It takes /retrieves value from search form and passes to search_res(). Searches for a particular record in the collection and retrieves related results, Passes to getinfo for printing results. (Note: search_res retrieves records, and it is called within search)
#### 3.	getinfo(), getinfo1(),getinfo2()
These functions are related to printing/displaying the data provided to them by other functions. The formatting of different elements is also done within these functions.(As in html, css styling)
#### 4.	del_ele()
Before displaying new results on screen, the older elements have to be deleted. This is done through del_ele.
#### 5.	Searching, Filtering, Sorting functions:
In all three main pages, a number of functions are used for searching and filtering. These functions are used to filter according to a desired criterion. They are called on click of the element in dropdown, and retrieve records according to a criterion of these functions:


A few of the functions:
##### 1.	ascsortprice()
sorts in ascending order according to price.
##### 2.	range3_5_seats()
searching cars where seats in between 3 to 5
##### 3.	nights_3to7()
Trips where nights are between 3 to 7 etc
For different filtering, different functions are implemented.

### C.BOOKING RELATED


Booking: This function, gets called on clicking the book button in the search page. The id of the element getting searched Is passed to the function, and it opens a detailed view of the object getting searched for. For example, when user sees multiple results and clicks on book button of a particular hotel, car or trip, the in detail booking page is shown. This function receives id of an element, and passes to getinfo2
#### 1.	getinfo2()
Function used for displaying details of the booking page. Similar to getinfo functions, but shows additional details.
#### 2.	cart()
Related to adding function to cart.it stores the value in local storage.
#### 3.	c_ cart()
Adding required product added to cart to database(firestore) and store it related to user’s email id.
#### 4.	c_getinfo()
Function used to print details In the cart page.
These are some of the main functions. There are also some functions called within these functions. The names of the modules slightly differ from page to page and some modules specific to certain webpages.
These give a gist of the basic functionality related to login, booking, searching. Apart from these, the display of the page is done in CSS with appropriate headers and footers, about us page, contact page where we can store feedback from our users (in our database - firestore) and accordingly reply to their queries later.  
