const { ArtifactArchiver } = require('@serenity-js/core');
const { ConsoleReporter } = require('@serenity-js/console-reporter');
const { SerenityBDDReporter } = require('@serenity-js/serenity-bdd');

exports.config = {
    crew: [
        ArtifactArchiver.storingArtifactsAt('./target/site/serenity'),
        new ConsoleReporter(),
        new SerenityBDDReporter(),
    ],
    outputDir: './target/site/serenity',
};