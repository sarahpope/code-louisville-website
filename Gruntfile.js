module.exports = function(grunt) {

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        // Set dynamic path variables
        project: {
            base: 'content/themes/code-louisville/assets',
            css: '<%= project.base %>/css',
            scss: '<%= project.base %>/scss',
            js: '<%= project.base %>/js'
        },

        // Sass preprocessing and watch/livereload
        sass: {
            dev: {
                src: ['<%= project.scss %>/**/*.scss'],
                dest: '<%= project.css %>/main.css',
            },
        },
        watch: {
            sass: {
                // We watch and compile sass files as normal but don't live reload here
                files: ['<%= project.scss %>/**/*.scss'],
                tasks: ['sass'],
            },
            livereload: {
                // Here we watch the files the sass task will compile to
                // These files are sent to the live reload server after sass compiles to them
                options: { livereload: true },
                files: ['<%= project.css %>/*'],
            }
        }

    });

    // Load multiple grunt tasks using globbing patterns
    require('load-grunt-tasks')(grunt);

    // Notify if error
    grunt.loadNpmTasks('grunt-notify');

    // Run tasks
    grunt.registerTask('default',['watch']);

}