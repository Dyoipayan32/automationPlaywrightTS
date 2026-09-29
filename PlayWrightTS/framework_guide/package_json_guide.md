Defines dependencies and scripts. 
    You can run tests with 
        'npm test' 
        and view reports with 
        'npm run report'   [They are modified scripts as commands.]

Meanwhile package.json looks like,

{
  "name": "playwright-demo",
  "version": "1.0.0",
  "scripts": {
    "test": "playwright test",
    "test:headed": "playwright test --headed",
    "report": "playwright show-report"
  },
  "devDependencies": {
    "@playwright/test": "^1.45.0",
    "typescript": "^5.0.0"
  }
}