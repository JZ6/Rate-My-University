## Group Members
### Please follow the format-> Student 1: Name of student (Student ID)
- Student 1: Lucy Lu (1002295349)
- Student 2: Charles Vong (1002430960)
- Student 3: Jay (YuJie) Zuo (1002530077)
- Student 4: Jenny (Yi Jia) Zhang (1000729134) 

## Project Description:
Using the [Universities List API](https://github.com/Hipo/university-domains-list) to create a website that provide a platform for students to rate courses in their respective universities.

We intend on creating a web application for students from universities around the world to rate and review courses in their universities. The API is our source for the list of universities, and also provides domains and web pages for each of the universities.

Our application is currently deployed in the following URL:
https://dry-cliffs-90706.herokuapp.com/

## API-Features:

The API we created extends the behaviour of our external universities API by adding the ability to rate courses within the university. Users will be able add, update, and delete reviews in any universities provided they are a known logged user. We mainly use the third party API only to pull the list of universities from Canada and the US.

Our main page has only two purposes, that is to allow a user to find a university by typing in the country of their university (autofill available), then selecting from a list of universities that belong to that country. The country of the university is sent to our own API, where it then returns the list of universities belonging to that country, the frontend then displays them in a list of buttons beneath the "get University button". When you click on any of the universities, it will bring you to the next page. 

The second purpose of our main page is to allow users to sign up and log in, this will become useful in the second page. Users can perform a simple sign in, where our API will check within our database of existing users if the user already exists or not. If it exists, it will send a response saying that the user already exists, otherwise they are sent back to the main page. After they have completed their sign in, they can then proceed to log in. If they attempt to log in with an invalid username and password, our API  will be redirect back to an unchanged main page. Otherwise, our API will create a session with their username and password, and they are redirected to the main page, only this time their username will be displayed on the banner of the website, as well as the option to logout. If the user presses the logout button, our API will destroy their session, and they will be redirected to the original main page.

Our second page is where most of the user interaction takes place. Here, users can see past course reviews made by other users. Each course is listed with an aggregate average score from 1-5. When the user clicks on a course name, reviews pertaining to that certain course name appear on the right, with the username of the user who made that review, a rating from 1-5, as well as comments made by the user who submitted the review regarding their overall thoughts on the course. If the users are logged in, they can freely add their own reviews as well. Users can go to the bottom of the page, where they can choose/add their own course, pick a rating, and write comments before pressing the submit button. Our API will then log the review in our database, and will refresh the page, displaying the newly made review alongside the other reviews.

Users can also edit and delete their own reviews. This option will only be available on reviews made by the user himself, they will be unable to edit and delete other people's reviews. Deleting a review is easy, the user only has to press the DELETE button next to a review they want to delete, and our API will remove that review from our database, and refresh the page to reflect the changes made. If the user presses the EDIT button, they will be redirected to another page, where they can edit their review. After they finish the review, they press the SUBMIT button, and our API will update the requested review, and redirect them to the review page, displaying the newly edited review.
## ADMIN MESSAGING DISCLAIMER

We have implemented the /api/messages endpoint so that using GET works without the content header of application/json and with it. However, for the demo, we would prefer if you perform the request with the content header just in case.

## End-User:
This website is intended for currently enrolled university students to give feedback on the experiences they had with certain courses. The currently enrolled students and students who had already finished a course will be able to write down reviews regarding their experiences pertaining to that course, while potential students looking to take that course in the future can make an educated decision as to whether that course will be beneficial to their learning career in university.
