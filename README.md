
# Client side for telegram bot

This is a project that includes a frontend written on React and a backend written on Node.

**Purpose of the service:**
- accept the advertisement data (purchase or sale of goods) from the client and place them in the Telegram channel
- check the text content for the content of prohibited words
- check photo content for the content of prohibited topics
- take money for placing an ad in the channel (not implemented)
- support color mode from telegram design


## Demo
- [telegram bot](https://t.me/dev_test_july_bot)
- [telegram test channel](https://t.me/dev_test_july_bot)
- [video - dark mode](https://youtu.be/kcEEew8EkH4)


## Screenshots from channel

![App Screenshot](https://i.ibb.co/KwqTfXF/2023-08-03-23-44-25.png)

![App Screenshot](https://i.ibb.co/SrchJDH/2023-08-03-23-45-39.png)

## Installation

My project runs on two servers:
- the first for development and tests [GitHub](https://smisyuk4.github.io/sales-telegram-bot-react/)
- the second for production [Firebase](https://prod-telegram-bot.firebaseapp.com/)

1. To run the project on GitHub, you need to add variables. But first you need to create a project on Firebase and take the keys

- ![App Screenshot](https://i.ibb.co/7yfJ3VQ/2023-08-09-23-48-39.png)



- You also need to check the boxes in the settings

- ![App Screenshot](https://i.ibb.co/JBkC4Cf/2023-06-09-00-44-13.png)

- ![App Screenshot](https://i.ibb.co/DgMGQ64/2023-06-09-00-46-16.png)

- ![App Screenshot](https://i.ibb.co/xhqXLnQ/2023-06-09-00-46-51.png)

- ![App Screenshot](https://i.ibb.co/KV20NLN/2023-06-09-01-07-39.png)

- ![App Screenshot](https://i.ibb.co/Nxs9qgC/2023-08-09-23-36-30.png)

- ![App Screenshot](https://i.ibb.co/5W8Qqzn/2023-08-09-23-39-26.png)

```bash
######## firebase
VITE_API_KEY=********
VITE_AUTH_DOMAIN=********
VITE_PROJECT_ID=********
VITE_STORAGE_BUCKET=********
VITE_MESSAGING_SENDER_ID=********
VITE_APP_ID=********
VITE_MEASUREMENT_ID=********

####### test dev - gh page
VITE_BOT_NAME=******** 
VITE_CHANNEL_NAME=********
VITE_COLLECTION=testUsers
VITE_PATH_TO_SERVER=********
```

**The site address must be specified in the code itself for build in GitHub pages**
- ![App Screenshot](https://i.ibb.co/P1ssj9S/image.png)


- Also, for the administrator's side, you need to add authorization from Firebase. The keys remain the same. You only need to activate and create one admin
- ![App Screenshot](https://i.ibb.co/R0m5yNb/2023-08-10-00-03-42.png)


2. To deploy on the [Firebse](https://firebase.google.com/), you need to create in vsCode file `.env` with secret keys:
```bash
######## firebase
VITE_API_KEY=********
VITE_AUTH_DOMAIN=********
VITE_PROJECT_ID=********
VITE_STORAGE_BUCKET=********
VITE_MESSAGING_SENDER_ID=********
VITE_APP_ID=********
VITE_MEASUREMENT_ID=********

####### prod dev - firebase
VITE_BOT_NAME=******** 
VITE_CHANNEL_NAME=********
VITE_COLLECTION=testUsers
VITE_PATH_TO_SERVER=********
```

- Now necessary to remove the address of the site that was previously from github
- ![App Screenshot](https://i.ibb.co/GJpP3RT/2023-08-10-00-13-04.png)

- [Install](https://firebase.google.com/docs/cli?authuser=0&hl=ru#install_the_firebase_cli) Firebase manager to PC
- `npm install -g firebase-tools`
- `firebase login`
- `firebase projects:list`
- `firebase login:ci`
- `firebase deploy --token ********`
- `firebase init`
- **choose options:**
 
  - Hosting: Configure files for Firebase Hosting and (optionally) set up GitHub Action deploys
  - Use an existing project
  - What do you want to use as your public directory? **public**
  - Configure as a single-page app (rewrite all urls to /index.html)? **Yes**
  - Set up automatic builds and deploys with GitHub? **No**

- **if need re-auth:**
- `firebase login --reauth`

- **to package.json add script:**
- `"deploy": "firebase deploy"`
- **for build:**
- `npm run build`
- **for deploy to Firebse:**
- `npm run deploy`
## Documentation and articles

- [Get started with Firebase Hosting](https://firebase.google.com/docs/hosting/quickstart?hl=ru&authuser=0)
- [Deploy your app to firebase — in seconds!](https://medium.com/google-developer-experts/deploy-your-app-to-firebase-in-seconds-b3a9a37dff47)
- [How to create react vite app and deploy to firebase](https://www.youtube.com/watch?v=HlMXBc3yG1k&ab_channel=DeveloperSuzit)
- [How to change Firebase user login identity from command line (CLI)?](https://stackoverflow.com/questions/33916448/how-to-change-firebase-user-login-identity-from-command-line-cli)
- [Initializing Web Apps](https://core.telegram.org/bots/webapps#initializing-web-apps)
- [Web Apps for Bots](https://core.telegram.org/bots/webapps#webappinitdata)
- [Theme Params telegram bot](https://core.telegram.org/bots/webapps#themeparams)
- [style input button](https://stackoverflow.com/questions/572768/styling-an-input-type-file-button)
- [react-loader](https://mhnpd.github.io/react-loader-spinner/docs/components/mutating-dots/)
- [firebase - The query requires an index](https://stackoverflow.com/questions/48698564/uncaught-in-promise-error-the-query-requires-an-index)
