const testContext = require.context('.', true, /\.spec\.js/);
testContext.keys().forEach(testContext);