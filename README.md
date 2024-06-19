# Jobizz: A Job Search PlatForm (FrontEnd Only)

### Student ID: 11207924

Various components were used for this projects and they include:
- Login component: The purpose of this component is to enable the user login in. The component takes a few props including userName, email, setEmail, setUserName which are used to get and set the them when text input is changed to  enable user input to be passed to the home screen component and onPress which defines what should happen when the login button is clicked. This component also gives the user sign in options besides the sign in with username and email. 

- SearchFrame: This component does not take in any props. It contains the search bar and the filter icon.

- Featured jobs: The purpose of this component is to make it easy to include multiple available jobs. This component takes a number of props which are  mostly the descriptions of the jobs being displayed and they include; background image, company logo, company name, job title, pay and location. this component is most likely to be called into a horizontal scroll view tag

- Popular jobs: This component is similar to the featured jobs component and take in the same props with the exception of the background image prop . This only diffence between the two is their appearance and layout. Also this component's props can be rendered using a flat list or can be called as many times as required in a scroll view

### Screenshots of Application
![Login page](Jobizz/images/rn-4%20shot%201.PNG)

![Login page with user input](Jobizz/images/rn-4%20shot%202.PNG)

![Home page](Jobizz/images/rn-4%20shot%203.PNG)