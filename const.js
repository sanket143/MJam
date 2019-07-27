const electron = require("electron");
const jsmediatags = require("jsmediatags");
const path = require("path");
const fs = require("fs");
const HOME = process.env.HOME
const dest = `${HOME}/Music`;

const getAlbumArt = function(tags){
    const picture = tags.tags.picture;
    let base64String = "";
    for(var i = 0; i < picture.data.length; i++){
        base64String += String.fromCharCode(picture.data[i]);
    }
    const imageURI = "data:" + picture.format + ";base64," + window.btoa(base64String);
    let image = electron.nativeImage.createFromDataURL(imageURI);
    return imageURI;
}