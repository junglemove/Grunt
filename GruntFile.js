/**
 * Created by Administrateur on 13/12/2016.
 */
module.exports = function(grunt){
        //console.log(arguments); try without grunt in params

    grunt.initConfig({ //initialisation de al target
        default:{
            backup:{},
            build:{},
            serve:{}
        }
    });

    grunt.registerMultiTask('default', function () {
        console.log("OK task completed");
    });


}