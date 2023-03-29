const { configure } = require('@serenity-js/core');
const { ConsoleReporter, SerenityBDDReporter } = require('@serenity-js/core/reporter');
const { mocha } = require('@serenity-js/mocha');

configure({
    // Use Mocha test runner
    runner: mocha(),
    
    // Use Console and HTML reporter
    crew: [
        ConsoleReporter.withDefaultColourSupport(),
        new SerenityBDDReporter(),
    ],
    
    // Other configuration options here...
});