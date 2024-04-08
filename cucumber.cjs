module.exports = {
  default: {
    format: ["html:cucumber-report.html"],
    formatOptions: {
      snippetInterface: "async-await",
    },
    import: ["dist/src/*.fixture.js"],
    paths: ["src/*.feature"],
  },
};
