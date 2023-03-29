const { SerenityReporterFor } = require('@serenity-js/core');
const { LocalServer, TempDirectory } = require('@serenity-js/local-server');
const { CodeceptJS } = require('@serenity-js/codeceptjs');

exports.config = {
    tests: './*_test.js',
    helpers: {
        // CodeceptJS helpers configuration
    },

    framework: 'custom',
    frameworkPath: require.resolve('@serenity-js/codeceptjs'),
    serenity: {
        runner: new CodeceptJS(require('codeceptjs')),
        crew: [
            new SerenityReporterFor.CodeceptJS(require('codeceptjs')),
            new ConsoleReporter(),
            new HtmlReporter({
            outputDirectory: './reports/',})
        ],
        actors: {
            // Serenity/JS actor configuration
        },
        server: new LocalServer(new TempDirectory()),
    },
};