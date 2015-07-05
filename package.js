Package.describe({
  name: 'ag2s:meteor-pg',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'A Wrapper for NPM module "pg"',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/galler-alexander/meteor-pg',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Npm.depends({
  'pg': '4.4.0'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.addFiles('meteor-pg.js', 'server');
  api.export('pg', 'server');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('ag2s:meteor-pg');
  api.addFiles('meteor-pg-tests.js');
});
