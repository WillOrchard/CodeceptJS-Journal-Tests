const { setHeadlessWhen, setCommonPlugins } = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    Playwright: {
      url: 'http://localhost',
      show: true,
      browser: 'chromium'
    }
  },
  include: {
    I: './steps_file.js',
    functionsPage: "./pages/functions.js"
  },

  mocha: {
    timeout: 10000,
    bail: true,
    reporter: 'mocha-junit-reporter',
    reporterOptions: {
      mochaFile: './output/result.xml',
      reporterEnabled: 'spec, mocha-junit-reporter'
      },
    },

  plugins: {
  
  },

  name: 'Journal',
};
