DEMO PLAYLIST
https://youtube.com/playlist?list=PLHZYcg_jTrbQL3pIvlVyykLOWr1DpxQhd

--Readme document for Johnahton Valles, vallesja@uci.edu, 88843608--

1. How many assignment points do you believe you completed (replace the *'s with your numbers)?

25/25
- 10/10 Created a functional web app
- 5/5 The ability to control the web app with basic gestures (1pt per gesture)
- 4/4 The ability to control the web app with at least two custom gestures
- 2/2 Following good principles of UI design
- 2/2 Creating a compelling app and application of gestures
- 2/2 A readme and demo video which explains how these features were implemented and their design rationale

2. How long, in hours, did it take you to complete this assignment?
25 hours



3. What online resources did you consult when completing this assignment? (list specific URLs)
https://angular.io/
https://www.typescriptlang.org/
https://angular.io/tutorial
https://www.youtube.com/watch?v=3dHNOWTI7H8
https://javascript.info/
https://developer.spotify.com/documentation/web-api/
https://developer.spotify.com/console/
https://getbootstrap.com/docs/5.0/getting-started/introduction/
https://victordibia.com/handtrack.js/#/



4. What classmates or other individuals did you consult as part of this assignment? What did you discuss?
N/A


5. Is there anything special we need to know in order to run your code?
install web server dependencies: npm install
install client dependencies: npm install
start the web server: npm start in webserver directory.
start the client: ng serve --open in client directory


--Aim for no more than two sentences for each of the following questions.--


6. Did you design your app with a particular type of user in mind? If so, whom?
The application is intended to be used by individuals that cannot use a traditional pointing 
device like a mouse. The majority of the functionality within the Spotify Browser app can be triggered
using gestures.


7. Describe the two custom gestures you created.
One open hand & one hand closed: this gesture is used to trigger a click on the currently active carousel card (albums/artists), and navigates to the new page.
One pointing hand & one hand closed: this gesture is used to navigate back to the home page from any other page.


8. How does your app implement or follow principles of good UI design?
- Redesigned the Spotify Browser UI
- Information is now broken up into cards that stack on smaller screens and render as columns on wider screens.
- The hand tracker is visible at all times so that the user has a way of referencing the suported gestures on a page and also the currently detected gesture.
- Added descriptive text to all UI buttons.
- List of supported gestures updates as user navigates pages.
- Hand tracker is able to trigger clicks on the majority of interactive elements.
