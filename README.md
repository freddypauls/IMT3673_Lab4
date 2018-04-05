# Lab 4 

## Web application

Link to the project: https://imt3673-labassignment4.firebaseapp.com

- Worth noting that the notofications work a bit differently in the browser

## The idea
Users of the app can post text messages that are seen by everyone. The app is like a single chat room, that everyone having the app installed, participates in. When the app is in foreground, it works as real-time chat app, ie. messages appear as they happen, and the user can enter new messages. Self-messages should appear in the view, too. When the app is not in the foreground, the background service should periodically check for new messages (time to pull configured by preferences, similar to Lab 2). When new message is available, the Notification should be used, to communicate that to the user. The user can start the foreground activity from the Notification.
