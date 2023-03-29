const { configure } = require('@serenity-js/core');
const { SerenityBDDReporter } = require('@serenity-js/serenity-bdd');
const { ConsoleReporter } = require('@serenity-js/console-reporter');
const { mocha } = require('@serenity-js/mocha');

configure({
    // Use Mocha test runner
    
    // Use Console and HTML reporter
    crew: [
        ConsoleReporter.withDefaultColourSupport(),
        new SerenityBDDReporter(),
    ],
    
    // Other configuration options here...
});