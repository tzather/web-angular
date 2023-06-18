// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function (config) {
  config.set({
    basePath: "",
    frameworks: ["jasmine", "@angular-devkit/build-angular"],
    plugins: [
      require("@angular-devkit/build-angular/plugins/karma"),
      require("karma-chrome-launcher"),
      require("karma-coverage"),
      require("karma-jasmine-html-reporter"),
      require("karma-jasmine"),
    ],
    files: ["src/assets/lib/d3.7.7.0.js", "src/assets/lib/plotly-2.20.0.min.js"],
    client: { clearContext: false }, // leave Jasmine Spec Runner output visible in browser
    jasmineHtmlReporter: { suppressAll: true }, // removes the duplicated traces
    coverageReporter: {
      dir: require("path").join(__dirname, "./tmp"),
      subdir: ".",
      reporters: [
        // { type: "text-summary" }, // display summary in terminal
        { type: "html", subdir: "html-coverage" }, // generate html files, useful for local dev drill down
      ],
    },
    reporters: ["progress", "kjhtml"],
    browsers: [
      // "Chrome",
      "ChromeHeadlessNoSandbox",
    ],
    customLaunchers: {
      ChromeHeadlessNoSandbox: {
        base: "ChromeHeadless",
        flags: ["--no-sandbox"],
      },
    },
    restartOnFileChange: true,
  });
};
