## 23 And Me Project
#### Deployed at
http://167.99.168.100:3000/

#### Install Guide
##### Requirements
* Node version 6+
* Bower package manager - If installing from Github

##### Zip File install

All libraries should already be installed in the git file. The .env file should also be provided. If not please see the .env section of the guide

If you have Node version 6+ you should be able to start the project by navigating to the root of the project and using the command node server/server.js in the terminal. You should see the following log in the console "App listening on port 9001". Once that log is there you can navigate to http://localhost:9001/ in your browser to see the app.

##### Github install

Clone or fork the github repo at https://github.com/krmorehead/23AndMeProject. Navigate to the rood directory in the terminal and see the .env creation part of the guide.

Run an NPM install. Bower install should automatically run as a post install, but if it does not then please also run a Bower install.

Once all bower and NPM modules have been installed and a .env file has been created you should be ready to start the app.

Navigate to the root directory and run the command node server/server.js. You should see the following log in the console "App listeneing on port <PORT>". PORT is 3000 by default but if you enter a custom PORT then that should be what is logged.

Navigate to http://localhost:<PORT>/ to view the app.

##### .env creation
The .env file is for secret info. A .env file should be added to the root directory of the project.

In this app the only .env properties are the PORT and the BESTSELLER_API_KEY. If you were not provided with a BESTSELLER_API_KEY then please navigate to http://developer.nytimes.com/signup (make sure to select the Books API from the API menu). Once you have a Books api key please add it to the .env in the following format BESTSELLER_API_KEY=<API KEY>, Port can be added in the following format PORT=<PORT>.

#### Technical Discussion

##### Framework choice's

###### Front End
I went with Angular in this case due to the fact that it is the framework I know best. Therefore it was the framework that I could move the quickest with. If I were to make this a long term project then I would instead go with React Native.

React because it has a number of performance advantages over Angular, and because it also enforces a work pattern that maintains greater performance (single directional data flow). With that in mind I did build the app in a way that followed the same style in order to make it easier to convert at a later time. Each piece of the app is broken into a component. Each component is only concerned with managing itself. And functions are passed down from parent components to children components in order to reduce the amount of dependencies between the components.

React native because some of the requirements were for mobile support, which React native supports out of the box. While Ionic could be used with the Angular framework to offer simliar support, react navtive allows for greater re-use of code with less management.

React also has good current library support from the community, and continuing library support.

###### Back End
Node - express was choosen for similar reasons to Angular, it is the framework I know best. That being said Node also scales well since it allows for asych functionality. Python also makes a good server due to multithreading capabilities, and being better with numbers, however without a pressing need to switch server types I would probably stick with Node-Express.

##### Package Management
I went with bower and NPM here because I am more familiar using them with angular and it made for quicker development. However long term I would prefer to use webpack to manage both packages and builds.

##### Weakness and extensions
Because I wanted to deploy the app I decided to make the API call from the back end rather than dealing with a CORS issue. I also tweaked the original API given to return JSON rather than JSONP. I understand that the intent of the JSONP was to circumvent the CORS issue, however it seemed silly to build a server and still have a front end API call to the NY times server.

Mobile support at the moment exists but is weak. It can be used in either orientation, but is much more user friendly in the landscape orientation. Ideally the app layout would be reconsidered for the profile orientation that most users tend to use cell phones in.

Unit testing at the moment isn't too critical because there is very little heavly lifting being done by the code at the moment. However it would still be good to add some unit testing to test the simple setters that currentlly exist as well.
