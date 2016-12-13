/**
 * Created by Administrateur on 13/12/2016.
 */
module.exports = function(grunt){

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-browserify');

    grunt.initConfig({

        "browserify":{
            "dist":{
                "src":"src/js/index.js",
                "dest":"dist/js/index-browser.js"
            }
        },

        "copy":{
            "dist":{
                "files":[{
                    "expand": true,
                    "cwd": "src",
                    "src": "index.html",
                    "dest": "dist"
                },{
                    "expand": true,
                    "cwd": "src",
                    "src": "js/*.js",
                    "dest": "dist"
                }]
            }
        }
    });






};