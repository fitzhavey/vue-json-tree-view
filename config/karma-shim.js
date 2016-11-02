const testContext = require.context('../src', true, /\.spec\.js/);
testContext.keys().forEach(testContext);
