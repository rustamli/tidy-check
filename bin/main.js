#!/usr/bin/env node

var path = require('path'),
    exec = require('child_process').exec;

console.log('=== tidy-check 1.0.0 ===');

var filename = process.argv[2],
    absFilename = path.join(process.cwd(), '/' + filename),
    tidyCmd = 'tidy --doctype html5 --output-html yes --char-encoding utf8 --newline lf --clean no --indent auto --tidy-mark no --wrap 0 --write-back no ';

exec(tidyCmd + absFilename, function (error, stdout, stderr) {
    if (stderr) {
        console.log(stderr.split('line ').join(filename + ':line '));
    }
    console.log('tidy-check done.');
});




