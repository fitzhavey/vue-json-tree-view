const testContext = require.context('../src/components', true, /\.spec\.js/);
testContext.keys().forEach(testContext);