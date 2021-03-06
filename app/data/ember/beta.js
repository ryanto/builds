export default {
  projectName: "Ember",
  baseFileName: 'ember',
  projectFilter: [ /ember\./, /ember-template-compiler/ ],
  projectRepo: 'emberjs/ember.js',
  lastRelease: "2.12.0-beta.2",
  futureVersion: "2.12.0-beta.3",
  finalVersion: '2.12.0',
  channel: "beta",
  cycleEstimatedFinishDate: '2017-03-06',
  date: "2017-02-16",
  nextDate: "2017-02-23",
  changelogPath: "CHANGELOG.md",
  enableTestURL: true,
  debugFileName: ".debug.js",
  ignoreFiles: ['ember.js'],
  installWithEmberCLI: '# Install Ember %s:\nbower install --save ember#v%s\n# Or, install the latest build of this channel which may include unreleased incremental changes:\nbower install --save ember#beta'
};
