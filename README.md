# COMICCOMPANION

## Project Description
ComicCompanion is a mock portfolio website for a comic artist to display their work where users can come and read the artists comics. This is the front-end for the application.

[Backend API](https://github.com/lizabawa/comic-companion-backend)


## Table of Contents
- [Project Approach](#project-approach)
- [User Stories](#user-stories)
- [Wireframes](#wireframes)
- [Tools and Technologies Used](#tools-and-technologies-used)
- [Hurdles Encountered During Development](#hurdles-encountered-during-development)
- [Notable Features](#notable-features)
- [Resources & Acknowledgements](#resources--acknowledgements)

## Project Approach 
- I used the project management application [Notion](https://www.notion.so/) to keep track of project tasks, important links, and brainstorming ideas
- My approach to this project was to create a bare bone front end first, then the backend, and then connect the two before completing any additional CSS
- Before I began any coding, I planned my front-end out by creating a wireframe and user stories


### User Stories
<details open>
<summary>Landing Page</summary>
<br>
- As a User, I should be able to click on the home or logo and be directed to the home page.
<br>
- As a User, I should be able to click on the “Comics” link in the the navigation and be directed to the comics page.
<br>
- As a User, I should be able to click on the social media icons and be redirected in a new tab to the  associated social media page.
</details>
<details open>
<summary>Comics Page</summary>
<br>
- As a User, I should be able to clicked on the featured comic button and be directed to the featured comic
<br>
- As a User, I should be able to click on an individual comic image or title and be directed to the individual comics page
</details>
<details open>
<summary>Individual Comics Page</summary>
<br>
- As a User, I should be able to click on the carousel left/right image and see the previous/next image
<br>
- As a User, I should be able to click on the back to the carousel top button and be redirected back to the top of the carousel
</details>

### Wireframes
- Landing Page
![Landing Page Wireframe](https://github.com/lizabawa/comic-companion-front/blob/main/src/assets/wireframes/landing-wireframe.png?raw=true)
<br>
- Comic List Page
![Comic List Page Wireframe](https://github.com/lizabawa/comic-companion-front/blob/main/src/assets/wireframes/comic-list-wireframe.png?raw=true)
<br>
- Individual Comic Page
![Individual Comic Page Wireframe](https://github.com/lizabawa/comic-companion-front/blob/main/src/assets/wireframes/indiv-comic-wireframe.png?raw=true)

## Tools and Technologies Used

The following is a list of the tools and technologies that were employed in the development of this project:
 - **[VS Code](https://code.visualstudio.com/):** The code editor of choice, offering robust features for debugging and source code editing.
 - **HTML:** Utilized for creating the basic structure of the web application.
 - **CSS:** Employed for styling the HTML elements and improving the overall user interface.
 - **[Angular](https://angular.io/):** A framework for building dynamic web applications, used to create a scalable and maintainable codebase.
 - **[Bootstrap](https://getbootstrap.com/):** A CSS framework for rapidly developing responsive and mobile-first web layouts.
These tools and technologies were integral in delivering a high-quality, user-friendly application.
- **[GitHub](https://github.com/):** Version control and collaboration platform.
- **[Canva](https://www.canva.com/):** Used for designing the wireframes.


## Hurdles Encountered During Development
- The logic behind the "See More" button was challenging but taking the time to think through the problem and write the steps down enabled me to figure out the solution. I initially had the logic working before I had created the backend, so once I implemented the backend API, I had to refactor the code to pull the data from the backend.
- I encountered various challenges with CSS and sought guidance primarily from reliable resources such as StackOverflow, ChatGPT, and W3 Schools to help me navigate the complexities of the language. Some CSS challenges were getting my navbar items to line up the way I wanted, getting the "page x of y" to display over the comic pages and still be seen clearly, having the carousel arrows be seen so the user knows where to click for previous/next page.
- I had a hurdle with my images (which pulled from the backend) not displaying on the frontend. I noted that the images displayed properly if I used the URL within the frontend assets/images, and pinpointed the issue was from the backend image urls. I ended up using the backend github image url's; however, there was a point during troubleshooting where I had used this url and the issue persisted. Ultimately, I learned that since I had updated the URL in the backend, I had to refresh my localhost in order for the image to display properly on the frontend.

## Notable Features
- See More button will continue to display comic books until there are none left to show, at which point an error will be displayed
- A transparent background behind the carousel arrows that indicate to the user where they can click to go to the previous/next comic page
- Comic page dynamically tells you what page of the comic you are on
- Back to Carousel Top button 

## Resources & Acknowledgements
### General Assembly Instructors
- Suresh Sigera: [GitHub](https://github.com/sureshmelvinsigera)
- Dhrubo Chowdhury: [GitHub](https://github.com/Dhrubo-Chowdhury)
- Leonardo Rodriguez: [GitHub](https://github.com/LRodriguez92)

### Resources
These are the resources that were pivotal in debugging my code.
- [Stackoverflow](https://stackoverflow.com/)
- [ChatGPT](https://chat.openai.com/)
- [W3 Schools](https://www.w3schools.com/)
- [Angular Documentation](https://angular.io/)
- [NG Bootstrap](https://ng-bootstrap.github.io/#/home)
- [Devstackr Youtube Video](https://www.youtube.com/watch?v=185uAxYz1dU)