let path = require('path');
let ncp = require('ncp').ncp;

const fs = require('fs');

const srcPath = 'build'
const destPath = '../src/main/resources/META-INF/resources/app/build'

fs.mkdir(destPath, {recursive:true}, (err) =>{
    if(err) {
        throw err;
    }

    console.log('Copying files...');

    ncp(srcPath, destPath, function(err){
        if(err) {
            throw err;
        }
        console.log('Copying files completed');
    });
});