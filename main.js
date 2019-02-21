const electron = require('electron');
const url = require('url');
const path = require('path');

const {app, BrowserWindow} = electron;

let mainWindow;

//Listen for the app to be ready 
app.on("ready", function(){
    //Create new window
    mainWindow = new BrowserWindow({});

    //Once a window is created, then load the html in the browser window
})