 This sets up test directory, retries, browser projects, and reporting.

 test directory-    testDir: './tests',
 time_out-          timeout: 30 * 1000, // 30 seconds per test
 retries-           retries: 1,         // retry once on failure
 browser-           projects: [
                                    {
                                    name: 'Chromium',
                                    use: { ...devices['Desktop Chrome'] },
                                    }
                               ]

reporting-          reporter: [['html', { outputFolder: 'playwright-report' }]]