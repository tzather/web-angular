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
      require("karma-jasmine"),
      require("karma-junit-reporter"),
    ],
    files: ["src/assets/lib/d3.7.7.0.js", "src/assets/lib/plotly-2.20.0.min.js"],
    junitReporter: { outputDir: "tmp/junit" },
    coverageReporter: {
      dir: require("path").join(__dirname, "./tmp"),
      subdir: ".",
      reporters: [{ type: "cobertura", subdir: "cobertura" }],
      check: {
        global: {
          statements: 80,
          branches: 80,
          functions: 80,
          lines: 80,
        },
      },
    },
    reporters: ["junit", "coverage"],
    browsers: ["ChromeHeadlessNoSandbox"],
    customLaunchers: {
      ChromeHeadlessNoSandbox: {
        base: "ChromeHeadless",
        flags: ["--no-sandbox"],
      },
    },
    restartOnFileChange: false,
    singleRun: true,
  });
};
