/**
 * @type {import('semantic-release').GlobalConfig}
 */

export default {
  branches: [
    'main',
    { name: 'develop', prerelease: 'DEV', channel: 'DEV' },
    { name: 'release', prerelease: 'STG', channel: 'STG' },
  ],
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    '@semantic-release/changelog',
    [
      '@semantic-release/npm',
      {
        npmPublish: false,
      },
    ],
    [
      '@semantic-release/git',
      {
        assets: ['package.json', 'CHANGELOG.md'],
        message: 'chore(ITS-0): release ${nextRelease.version} by HAIBABOT',
      },
    ],
  ],
};
