import * as report from "multiple-cucumber-html-reporter";

report.generate({
  jsonDir: "./cypress/cucumber-json/",
  reportPath: "./public/",
  metadata: {
    browser: { name: "chrome", version: "latest" },
    device: "Local test machine",
    platform: { name: "windows", version: "11" },
  },
});
