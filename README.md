# BeAHero

TO RUN THE SERVER APP:


From a terminal:
-Go to the starter-kit/server-app directory of the cloned repo.
-Install the dependencies: npm install.
Launch the server application locally or deploy to IBM Cloud:


To run locally:
-Start the application: npm start.
-The server can be accessed at http://localhost:3000.

To deploy to IBM Cloud:
-Log in to your IBM Cloud account using the IBM Cloud CLI: ibmcloud login.
-Target a Cloud Foundry org and space: ibmcloud target --cf.
-Push the app to IBM Cloud: ibmcloud app push.
- go to https://beahero.eu-gb.mybluemix.net/


TO RUN THE MOBILE APP:

-Go to the starter-kit/mobile-app directory.
-Install the dependencies: npm install.
-Go to the ios directory: cd ios.
-Install pod dependencies: pod install.
-Return to the mobile-app directory: cd ../.
-Launch the app in the simulator: npm run ios. You should be running at least iOS 13.0.
(The first time you launch the simulator, you should ensure that you set a Location in the Features menu.)
