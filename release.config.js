/**
 * @type {import('semantic-release').GlobalConfig}
 */

export default {
  branches: [
    'main',
    { name: 'develop', prerelease: true, channel: 'DEV' },
    { name: 'release', prerelease: true, channel: 'STG' },
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
        message: 'chore(release): ${nextRelease.version} by haibazo-devops-bot',
      },
    ],
  ],
};
