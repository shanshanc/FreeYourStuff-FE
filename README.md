
# Free Your Stuff

## Idea 
A __mobile-first__ platform designed to help facilitate the culture of __giving away__ your unused/unwanted items away to people who need them more then you!

<br>
<center>
<img src="https://res.cloudinary.com/dh9xnvxbz/image/upload/v1535125076/LogoBigo2.png" alt="logo of app" width="300" height="300" >
</center>
<br>

## Motivation
A common practice in the city of Tubingen, Germany, was that people would leave their unwanted items in the street with a sign saying __"For Free"__. I appreciated the idea, and the recycling culture, however also noticed some problems such as: 
* Only immediate passes by would be able to take them
* Things would be left out for multiple days
* Also in bad weather
* Some people would leave undesirable stuff (trash)

There are platforms that try to help, however they are poorly designed, often requiring long descriptions to be able to past an app, and __hard to navigate__

This app is currently able to __solve all these problems__ by: 
* One click uploading 
* geoloaction of items dropped
* photo recognition enabling *smart tagging*

plus many more features to come!

## Screenshots
<br>
<center>
<img src="https://res.cloudinary.com/dh9xnvxbz/image/upload/v1535129728/mobis2.png" alt="screen shots of app" width="700" height="380" >
</center>
<br>


## Getting Started

### Prerequisites
* Node 
* Npm
* MongoDb
*  Cloudinary
* Google Api Key
* __Free Your Stuff__ back-end


### Installing

1. Clone both the __Free Your Stuff__ front-end and the __Free Your Stuff__ back-end 
2. In the command line, for both repos, enter:
```
npm install
```
#### on the front end
3. Add in your Google Api Key
4. Add in your Cloudinary Account
### on the back end
5. Create a __.env__ file - following the __.env.example__

## To start 

#### on the front end
```
npm start
```
#### on the back end
```
npm run dev
```

## Next Steps
As previously mentioned I have a huge list of features that I am planning to implement including: 
* Tests!
* login/ authentication & user accounts
* weather recognition (if weather is bad, don't leave things out!)
* user messages
* ability to gift things person to person
* messages between users
* etc etc

## Tech Stack

* [React](https://reactjs.org/) - The frontend framework used
* [Koa](https://koajs.com/) - The backend framework used
* [MongoDb](https://www.mongodb.com) - The database used
* [Cloudinary](https://cloudinary.com) - The photo-storage database
* [Google Api's](https://console.cloud.google.com) - Api's for Maps and Photo-Recognition 
## Contributing

Contributions Welcome!

This is an on-going project and external input and ideas will be gladly recieved!


## License

This project is licensed under the MIT License, take it, have fun.

