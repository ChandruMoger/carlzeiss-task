# React Application

## Setup

Follow these steps to setup the app:

1. `npm install` – install dependencies
3. `npm start` – serve the app at [http://localhost:3000/](http://localhost:3000/) (it automatically opens the app in your default browser)

# Note

To deploy in github pages initial route name changed to repository name.
If you want to try this codebase in your local, please after `npm start` please navigate to `http://localhost:3000/carlzeiss-task/`

# Task

 1. Create a react application using CRA with react version 16.x satisfying the following criteria:
a. Use https://jsonplaceholder.typicode.com/users to fetch user details
b. Use https://jsonplaceholder.typicode.com/posts to fetch user blog posts
c. Create a login screen and let user login using the email id and username as password retrieved
from 1st API call. (Be Sure to add basic validations for email field)
d. Once the user is logged in display two links in home page:
i) To display the list of all the users (users page)
ii) To display the list of all the blog post by all users (blogs page)
e. There should be an option to filter the users based on names (in users page).
f. There should be an option to filter the blogs by author name and title (in blogs page).
g. Once clicked on a particular blog post then open the blog with an option to go back to previous
page.
h. Your application should have following urls:
i) /login
ii) /home (to display the user list and blog post menu)
iii) /users
iv) /blogs
v) /blogs/<blogId> (Here blogId is dynamic and will change based on the clicked blog)
i. Implement user logout functionality.