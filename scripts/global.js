const electron = require("electron");
const jsmediatags = require("jsmediatags");
const path = require("path");
const fs = require("fs");
const HOME = process.env.HOME
const dest = `${HOME}/Music`;

// Globally used and available;
let global_args = {
    dest: `${HOME}/Music`,
    nowplaying_src: false,
    artists: [],
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

    nowplaying_frame.song = global_args.computed_tags[file_path];
    title_frame.song = {
        title: nowplaying_frame.song.title,
        artist: nowplaying_frame.song.artist
    }

    global_args.updateRecent(nowplaying_frame.song);

    global_args.nowplaying.play();

    global_args.nowplaying.on("play", function(){
        nowplaying_frame.paused = false;
        global_args.nowplaying_tracker = setInterval(function(){
            nowplaying_frame.completion = 
            global_args.nowplaying.seek() * 1000 / (global_args.nowplaying.duration() * 10);
        }, 100)
    })

    global_args.nowplaying.on("stop", function(){
        nowplaying_frame.completion = 0;
        nowplaying_frame.paused = true;
        clearInterval(global_args.nowplaying_tracker);
    })

    global_args.nowplaying.on("end", function(){
        nowplaying_frame.completion = 0;
        nowplaying_frame.paused = true;
        clearInterval(global_args.nowplaying_tracker);
    })

    global_args.nowplaying.on("seek", function(item){
        console.log(item);
    })
}

// get tags
global_args.getTags = (file_path) => {
    return new Promise((resolve, reject) => {
        if(global_args.computed_tags[file_path]){
            resolve(global_args.computed_tags[file_path]);
        } else {
            jsmediatags.read(file_path, {
                onSuccess: function(tag){
                    tag.tags.picture.data = getAlbumArt(tag);
                    tag.tags.src = file_path;
                    if(global_args.artists[tag.tags.artist]){
                        global_args.artists[tag.tags.artist].push(tag.tags);
                        right_frame.artist_songs[tag.tags.artist].push(tag.tags);
                    } else {
                        global_args.artists[tag.tags.artist] = [tag.tags];
                        right_frame.artist_songs[tag.tags.artist] = [tag.tags];
                        right_frame.artists.push(tag.tags.artist);
                    }
                    global_args.computed_tags[file_path] = tag.tags;
                    resolve(tag.tags);
                }
            });
        }
    });
}

// Get recent.json
global_args.getRecent = () => {
    if(fs.existsSync('.user/recent.json')){
        fs.readFile('.user/recent.json', (err, data) => {
            global_args.recent_songs = JSON.parse(data.toString());
        })
    } else {

    }
}

// Updates recent.json
global_args.updateRecent = (tags) => {
    if(fs.existsSync('.user/recent.json')){
        fs.readFile('.user/recent.json', (err, data) => {
            jsonObj = JSON.parse(data.toString());
            
            tags = (({title, album, artist, picture, src}) => ({title, album, artist, picture, src}))(tags);

            gotcha = -1;
            for(i = 0; i < jsonObj.length; i++){
                if(JSON.stringify(jsonObj[i]) === JSON.stringify(tags)){
                    gotcha = i;
                }
            }
            if(gotcha == -1){
                jsonObj.unshift(tags);
                if(jsonObj.length > 10){
                    jsonObj.pop();
                }
            } else {
                jsonObj.splice(gotcha, 1);
                jsonObj.unshift(tags);
            }

            fs.writeFile(`.user/recent.json`, JSON.stringify(jsonObj), function(err){
                if(err){
                    console.log(err);
                }
            });
        })
    } else {
        fs.mkdir('.user/', { recursive: true }, (err) => {
            if(err){
                console.log(err);
            } else {
                data = (({title, album, artist, picture, src}) => ({title, album, artist, picture, src}))(tags);
                jsonObj = JSON.stringify(data);
                fs.writeFile(`.user/recent.json`, `[${jsonObj}]`, (err) => {
                    if(err){
                        console.log(err);
                    }
                });
            }
        });
    }
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