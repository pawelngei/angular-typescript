module.exports = function (grunt) {
  grunt.loadNpmTasks('grunt-typescript');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    typescript: {
      base: {
        src: ['app/**/*.ts'],
        dest: 'dest/', /* concatenation also possible */
        options: {
          module: 'amd', /* or commonjs */
          target: 'es5' /* http://caniuse.com/#search=es5 */
        }
      }
    },
    watch: {
      typeScript: {
        files: 'app/**/*.ts',
        tasks: ['typescript']
      }
    }
  });
  grunt.registerTask('default', ['typescript', 'watch']);
}
