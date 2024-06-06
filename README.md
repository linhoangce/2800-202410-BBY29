# BBY-29

## 1.
# Project Title
# Comp 2800 - BBY29 
# FitUp Mobile App
# App Link - https://fitupapp.onrender.com

## 2. Project Description
Empower your fitness journey with FitUp, a smart AI-driven app, offering personalized tasks, real-time progress updates, and nutrition recommendations to achieve your goals alongside friends, so join FitUp today!

FitUp is designed for users accross different levels of fitness from beginners to advanced and professionals. To motivate users to exercise by assign suitable and achievable tasks that are personalized based on their interests and fitness level.
And to make it more fun, user earn points from completing tasks which they can use to compete with friends or make purchase from the point shop.

FitUp stands out from the competition thanks to AI technologies integrated including Speech Recognition for AI chat, personalized training and diet plans generated by smart AI. Especially, users can use pose detection technology to help correct their forms and postures while working out and receive real-time feedback to enhance their performance, and thus achieve their fitness goals more effectively.

Users can also enjoy better experience using the app thanks to our smart UI design.

List team members and/or short bio's here... 
* Davin Higo
* Yuho Lim
* Declan Joyce
* John Guo
* Linh Hoang
	
## 3. Technologies and Resources Used
List technologies (with version numbers), API's, icons, fonts, images, media or data sources, and other resources that were used.
* HTML, CSS, JavaScript
* Bootstrap 5.0 (Frontend library)
* MongoDB (BAAS - Backend as a Service)
* Cloudinary (BAAS - Backend as a Service)
* Google Speech APIs (BAAS - Backend as a Service)
* Google Maps API (BAAS - Backend as a Service)
* GrodCloud (BAAS - Backend as a Service)
* Node.js (Backend)
* THREE.js (Frontend)
* Blender (Frontend)
* Tensorflor MoveNet (Frontend)

Acknowledgement of free usage for icons:
* main - leaderboard : https://codepen.io/MalunariDev/pen/RweGGxx
* main - icon : https://www.strangeicons.com/

* Exercise source: https://fitnessprogramer.com/exercise/bench-press/?pw=75448

* CSS loading animation: https://css-loaders.com/dots/

## 4. File Contents

```
├── .vs
│  ├── BBY-29
│  │  ├── config
│  │  │  └── applicationhost.config
│  │  ├── FileContentIndex
│  │  │  ├── 4289698b-b92c-42df-9ca9-12259ee516ac.vsidx
│  │  │  ├── 5d0b990f-d8d4-4b08-9da9-b637923eae58.vsidx
│  │  │  └── 95b680c3-3183-424d-94d0-4192e2929250.vsidx
│  │  └── v17
│  │    ├── .wsuo
│  │    └── DocumentLayout.json
│  ├── ProjectSettings.json
│  ├── slnx.sqlite
│  └── VSWorkspaceState.json
├── databaseConnection.js
├── html
│  ├── ai-training-camera-feed.html
│  ├── ai-training-female-body-scan-result.html
│  ├── ai-training-female-body-scan.html
│  ├── ai-training-male-body-scan-result.html
│  ├── ai-training-male-body-scan.html
│  ├── ai-training-questions.html
│  ├── ai-training-recommendation.html
│  ├── ai-training-scan-request.html
│  ├── aichat-loading.html
│  ├── aichat-log.html
│  ├── body-motion-capture.html
│  └── map.html
├── img
│  ├── 04-add.svg
│  ├── 22-user.svg
│  ├── 23-user-group.svg
│  ├── 35-home-general.svg
│  ├── agility.gif
│  ├── ai-assistant-bot.mp4
│  ├── ai-assistant.mp4
│  ├── ai-humannoid.png
│  ├── aibot2.png
│  ├── aibot3.png
│  ├── back-seated-cable.gif
│  ├── body-scan-icon.png
│  ├── body-scan.png
│  ├── body-scan1.png
│  ├── boxing-basic.gif
│  ├── bulking-diet.jpg
│  ├── chatBotImg.png
│  ├── chest-benchpress.gif
│  ├── default-avatar.jpg
│  ├── diet-nutrition.png
│  ├── female-body-scan-result.glb
│  ├── female-body-scan.mp4
│  ├── female.mp4
│  ├── fitup.png
│  ├── friendly-bot.mp4
│  ├── healthy-meal.png
│  ├── jump.mp3
│  ├── Logo.png
│  ├── low-carbs.png
│  ├── male-body-scan-result.glb
│  ├── male-body-scan.mp4
│  ├── male.mp4
│  ├── mario.png
│  ├── moutain-climb.gif
│  ├── reroll.png
│  ├── settings_gear.png
│  ├── shop.png
│  ├── Squat-Tuck-Jump.gif
│  ├── squat.gif
│  ├── text-to-speech-audios
│  │  ├── /blah.mp3             # Audio output from Google Text to Speech API saved on local machine
│  ├── user.png
│  ├── wallpaper-header.png
│  └── workout-paperwall-4.png
├── index.js
├── package-lock.json
├── package.json
├── README.md
├── scripts
│  ├── ai-training-camera-feed.js
│  ├── ai-training-female-body-scan-result.js
│  ├── ai-training-female-body-scan.js
│  ├── ai-training-male-body-scan-result.js
│  ├── ai-training-male-body-scan.js
│  ├── ai-training-questions.js
│  ├── ai-training-recommendation.js
│  ├── ai-training-scan-request.js
│  ├── aichat-loading.js
│  ├── aichat-log.js
│  ├── audio-streaming.js
│  ├── authentication.js
│  ├── body-motion-capture.js
│  ├── dietTasks.js
│  ├── fitTasks.js
│  ├── main.js
│  ├── map.js
│  └── speech-to-text.js
├── styles
│  ├── 404.css
│  ├── ai-training-camera-feed.css
│  ├── ai-training-find-coach.css
│  ├── ai-training-home.css
│  ├── ai-training-questions.css
│  ├── ai-training-recommendation.css
│  ├── ai-training-scan-request.css
│  ├── aichat-config.css
│  ├── aichat-home.css
│  ├── aichat-loading.css
│  ├── aichat-log.css
│  ├── body-motion-capture.css
│  ├── body-scan.css
│  ├── change.css
│  ├── community.css
│  ├── communityPost.css
│  ├── footer.css
│  ├── index.css
│  ├── main.css
│  ├── mainOld.css
│  ├── map.css
│  ├── profile.css
│  ├── style.css
│  └── tasks.css
├── utils.js
└── views
  ├── 403.ejs
  ├── 404.ejs
  ├── admin.ejs
  ├── changeEmail.ejs
  ├── changePassword.ejs
  ├── changeUsername.ejs
  ├── community.ejs
  ├── communityPost.ejs
  ├── dietTasks.ejs
  ├── fitTasks.ejs
  ├── index.ejs
  ├── login.ejs
  ├── main.ejs
  ├── profile.ejs
  ├── rankProgress.ejs
  ├── reset-email.ejs
  ├── reset-password.ejs
  ├── shop.ejs
  ├── signup.ejs
  └── templates
    ├── easteregg.ejs
    ├── end.ejs
    ├── footer.ejs
    ├── header.ejs
    ├── headerOld.ejs
    ├── image.ejs
    ├── item.ejs
    ├── taskFooter.ejs
    └── user.ejs
```

## 5. Complete setup/installion/usage
Our project uses the Iphone 14 Promax screen size for UI design. 

Note: before running the app unsure you have added the proper .env file to the folder.
The .env will require the following variables. 
* GROQ_API_KEY, PORT
* MONGODB_SESSION_SECRET 
* NODE_SESSION_SECRET 
* MONGO_URI
* APP_PASSWORD
* APP_EMAIL
* GOOGLE_API_KEY
* CLOUDINARY_CLOUD_NAME
* CLOUDINARY_API_KEY
* CLOUDINARY_API_SECRET

You may need a google maps api key for the community and communityPost ejs files

To install download the folder then in a terminal navigate to the folder and run the following

npm i
node index.js

Testing Plan: https://docs.google.com/spreadsheets/d/10ylqpRkL9dYpFuuqNc5xzxkXSeOpcru4Y1LLDA1xn7o/edit#gid=394496370

## 6. How to use
To start login/signup from the landing page (if you forgot your password click login and click reset email and fill in you email and follow the instrucitons send to you)
After logging in you can change your info (add profile picture, change username, change email, change password) in the profile, log out, view rank progress

In the main page you can see your tasks and click them to go to the tasks page and reroll tasks if you want to change them or if you completed the task click done and get points

Rerolls are purchasable with in app currency in the shop along with some other things life gift cards, spending points and points are speperate

There is a leaderboard where users can compete for the top 5 to get additional points or rewards

You can also ask questions to an ai chatbot using text or speech to text or get reccomedations for a workout personalized to you after a body scan and you can get coached in proper workout posture by the ai camera

There is also a community page for users to share/see posts

EASTER EGG
In the landing, login, and signup page if you input the konami code Arrow keys [up, up, down, down, left, right, left, right] then [B, A] with no other input in between a mario will jump

## 8. AI Use

We used chatGPT, Groq's Mistral AI, Tensorflow

Groq is used for the integrated ai chatbot
Tensorflow for body tracking
ChatGPT was used to help create some funtions/html (check app.posst('/reset-email')), fix and debug code and give suggestions on solutions to errors

we kept ai simple, it doesnt create data sets and we had limitations with storing the chats and we could not overcome that within the scope of the project
	
## 9. Contact info
declan.daniel.joyce@gmail.com (Declan)
davinhigo@gmail.com (Davin)
johnguoyh@gmail.com (John)
linhoang.ce@gmail.com (Linh)
dbgh7894@gmail.com (Yuho)

## 10. Known Bugs and Limitations
Here are some known bugs:
* Some navigation buttons may not work yet but we still implemented them to represent the concept and enhance UI design.

## 11. Features for Future
What we'd like to build in the future:
* Train the MoveNet model for pose detection so that I can give users real-time feedback on their postures and forms while exercising.
* Tasks generated by AI based on the users' level of fitness and interests.
* Text to Speech - audio streaming of chat and recommendation for users with vision impairment or are working out.