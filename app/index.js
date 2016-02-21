var generators = require('yeoman-generator');
var mkdirp = require('mkdirp');

module.exports = generators.Base.extend({
  prompting: function () {
    var done = this.async();
    this.prompt({
      name: 'directory',
      type: 'confirm',
      message: 'Did you make a directory first?',
    }, function (response) {
      if (response.directory) {
        mkdirp("src/main/java");
        mkdirp("src/test/java");
        this.copy("_Greeter.java", "src/main/java/Greeter.java");
        this.copy("_HelloWorld.java", "src/main/java/HelloWorld.java");
        this.copy("_GreeterTest.java", "src/test/java/GreeterTest.java");
        this.copy("_build.gradle", "build.gradle");
        this.spawnCommand('gradle', ['build', 'test', 'run']);
      } else {
        this.log('please create a directory for your project first and cd into it.')
      }
      done();
    }.bind(this))
  }
});
