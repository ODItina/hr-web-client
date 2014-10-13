/**
 * Created by Dominic on 16-Sep-2014.
 */
'use strict';

module.exports = function(grunt){

    var watchFiles = {
        serverViews: ['server/views/**/*.*'],
        serverJS: ['gruntfile.js', 'server.js', 'server/**/*.js'],
        clientViews: ['public/modules/**/views/**/*.html'],
        clientJS: ['public/js/*.js', 'public/modules/**/*.js'],
        clientCSS: ['public/modules/**/*.css'],
        mochaTests: ['app/tests/**/*.js']
    };
//    Project configuration
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jshint:{
            files:watchFiles.serverJS.concat(watchFiles.clientJS),
            options: {
                jshintrc: true
            }
        },

        watch:{
            serverViews: {
                files: ['<%=  jshint.files %>'],
                tasks: ['jshint'],
                options: {
                    livereload: true
                }
            },
            clientViews: {
                files: watchFiles.clientViews,
                options: {
                    livereload: true
                }
            },
            clientCSS: {
                files: watchFiles.clientCSS,
                options: {
                    livereload: true
                }
            }
        },

        nodemon: {
            dev: {
                script: './server.js',
                options: {
                    nodeArgs: ['--debug'],
                    ext: 'js,html',
                    watch: watchFiles.clientJS.concat(watchFiles.serverJS)
                }
            }
        },

        concurrent: {
            default: ['nodemon', 'watch'],
            debug: ['nodemon', 'watch'],
            options: {
                logConcurrentOutput: true
            }
        }
    });
//    Check package.json and load the dependencies
    require('load-grunt-tasks')(grunt);

    grunt.option('force', true);


    grunt.registerTask('default', ['jshint', 'concurrent:default']);
    grunt.registerTask('debug', ['jshint',  'concurrent:debug']);

};