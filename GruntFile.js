/**
 * Created by Administrateur on 13/12/2016.
 */
module.exports = function(grunt){

    grunt.loadNpmTasks('grunt-contrib-copy');

    grunt.initConfig({

        "copy":{
            "dist":{
                "files":[{
                    "expand": true,
                    "cwd": "src",
                    "src": "index.html",
                    "dest": "dist"
                }]
            }
        }
    })


};