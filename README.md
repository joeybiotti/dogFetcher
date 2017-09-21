# __DogFetcher__

## A single page web application to help people find dogs and dogs find homes.

### Front End Capstone Project 
 
In just about every major city, local animal rescues strive to get dogs, cats, and just about anything else with fur into forever homes. Their mission can be hindered by the inability to show off the animals looking for their forever home. Virtually every rescue runs their own website, Facebook page and PetFinder.com profile, but inevitably,  as rescues vie for donations volunteers and local and online presence, finding the right dog ends up being harder than it should be.  DogFinder is one possible solution to this problem. 

___
## __What does DogFetcher do exactly?__

DogFetcher utilizes the Petfinder.com API to randomly generate shelter/rescue dogs available for adoption throughout the United States. Additionally, users are able to show a list of up to 25 shelters/rescue organizations in their local area. For the sake of a demo, the location is set to Nashville, TN.  From the shelter listings, users view the available animals that the rescue has available for adoption. All URLs will currently take the user to Music City Animal Rescue’s shelter listings. This was done for time constraint reasons. And while the focus of this app are dogs, the petfinder.com API does not allow animal types to be filtered when a user view shelter records. But hey, maybe you’ll see a cat you like!
___

### __Prerequisites__
DogFetcher requires the following prerequisites:

1. __[npm](https://www.npmjs.com)__ You’ll need npm to run DogFetcher. To see if you have it installed, open up your terminal and run ``npm --version`` in your terminal. If you don't have it, follow the installation instructions on [npm's](https://www.npmjs.com) website.
2. __[http-server](https://www.npmjs.com/package/http-server)__ If you don't already have an http-server, run ```npm install https-server```. Once you've got that squared away, open up your terminal, enter ``hs`` and start running your local server. In your browser, enter ```localhost:8080``` and the app will now be running. 
___

### __Installing DogFetcher__
1. Fork and Clone this repo to your local machine
2. ```cd``` into your ```lib``` folder and download all dependencies. See ```package.json``` for the complete list. 
3. You'll need a [Petfinder.com](https://www.petfinder.com) API key in order to run the app. Do get one, do the following:
    __i.__ Go to [Petfinder.com's Developer Site] ](https://www.petfinder.com/developers/api-key) and register for an API key.
        __ii.__ Once you've registered the app, make sure you register ```http://localhost:8080/login.html``` as the domain name to prevent CORS errors.
        __iii.__ In the ```app/values/creds``` directory, open the file ```pf-creds.js``` and enter the unique API Key provided to you by Petfinder.com.
4. In order to fully utilize DogFetcher's ability to save dogs to your profile, you'll need to set up a Firebase project. In order to do that, you'll need to:
        __i.__ Visit the [Firebase](https://firebase.google.com) and follow the instructions on setting up a new project. 
        __ii.__ Once youve created a firebase project, head to the console (the url should look something like console.firebase.google.com/project/YOUR_PROJECTNAME) and click on the "Add Firebase To Your Web App" button. 
    __iii.__ Replace the values in the ```app/values/fb-creds.js``` file in this project with the values from firebase.

That's it. You're now good to go. 
___

### __What Technologies Does DogFetcher Use?__

DogFetcher was built using the following:
* [AngularJS](https://angularjs.org/)
* [Sass](http://sass-lang.com/)
* [npm](https://www.npmjs.com/)
* [Grunt](https://gruntjs.com/) 
* [Bootstrap](https://getbootstrap.com)
* [Firebase](https://firebase.google.com/)
___
### __Issues__
If you come across any bugs, feel free to open an issue on [github](https://github.com/joeybiotti/dogFetcher/issues) or send me an [email](mailto:joeybiotti4@gmail.com)