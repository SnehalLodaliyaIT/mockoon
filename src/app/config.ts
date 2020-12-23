import { environment } from 'src/environments/environment';

const appVersion = require('../../package.json').version;
const docsURL = 'https://mockoon.com/docs/latest/';

export const Config = {
  appVersion,
  feedbackLink: 'https://github.com/mockoon/mockoon/discussions',
  githubLatestReleaseUrl:
    'https://api.github.com/repos/mockoon/mockoon/releases/latest',
  githubTagReleaseUrl: 'https://github.com/mockoon/mockoon/releases/tag/v',
  githubAPITagReleaseUrl:
    'https://api.github.com/repos/mockoon/mockoon/releases/tags/v',
  githubBinaryDownloadUrl:
    'https://github.com/mockoon/mockoon/releases/download/',
  docs: {
    templating: docsURL + 'templating/',
    proxy: docsURL + 'proxy-mode/',
    cors: docsURL + 'cors/',
    https: docsURL + 'https/',
    headers: docsURL + 'response-headers/',
    rules: docsURL + 'multiple-responses/'
  },
  maxLogsPerEnvironment: 50,
  firebaseConfig: {
    apiKey: 'AIzaSyBzK63wmsoCAdFktrbpk4oGwJ5HzXT6FrM',
    authDomain: 'mockoon-1def8.firebaseapp.com',
    databaseURL: 'https://mockoon-1def8-default-rtdb.firebaseio.com/',
    projectId: 'mockoon-1def8',
    storageBucket: 'mockoon-1def8.appspot.com',
    messagingSenderId: '1059967704653',
    appId: '1:1059967704653:web:57184e0279a41dd7094604',
    measurementId: environment.firebaseMeasurementId
  }
};
