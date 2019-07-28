const electron = require("electron");
const jsmediatags = require("jsmediatags");
const path = require("path");
const fs = require("fs");
const HOME = process.env.HOME
const dest = `${HOME}/Music`;

let global_args = {
    dest: `${HOME}/Music`,
    nowplaying_src: false,
    computed_tags: {}
}

global_args.getFiles = new Promise((resolve, reject) => {
    fs.readdir(global_args.dest, function(err, files){
        let music_files = [];
        for(let i = 0; i < files.length; i++){
            file = files[i];
            if(path.extname(file) == ".mp3"){
                music_files.push(`${global_args.dest}/${file}`);
            }
        }

        resolve(music_files);
    });
});

global_args.play = (file_path) => {
    if(global_args.nowplaying){
        global_args.nowplaying.stop();
    }

    global_args.nowplaying_src = file_path;
    global_args.nowplaying = new Howl({
        src: [file_path]
    })

    nowplaying_frame.song = global_args[file_path];
    global_args.nowplaying.play();
}

global_args.getTags = (file_path) => {
    return new Promise((resolve, reject) => {
        if(global_args.computed_tags[file_path]){
            resolve(global_args.computed_tags[file_path]);
        } else {
            jsmediatags.read(file_path, {
                onSuccess: function(tag){
                    tag.tags.picture.data = getAlbumArt(tag);
                    tag.tags.src = file_path;
                    global_args[file_path] = tag.tags;
                    resolve(tag.tags);
                }
            });
        }
    });
} 

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