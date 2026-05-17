# Playwright Typescript SDET Framework

Automation framework built using Playwright + Typescript following Page Object Model architecture. 

## Features 
- UI automation 
- Page Object Model (POM)
- Cross browser execution 
    - Chromium
    - Firefox
    - Webkit
- Negative login validation test
- API validation tests
- GitHub Actions CI
- Screenshot retention on failure
- Video retention on failure
- Trace retention on failure
- Reusable test data utilities

## Project Struction

pages/
tests/
utils/
.github/workflows/

## Test Coverage

UI:
- Login
- Cart
- Checkout
- Negative login scenarios

API: 
- Response validation 
- Status validation
- Data structure validation

## Run Test

...bash 
npx playwright test

Run API only: 
npx playwright test tests/api

Open report:
npx playwright show-report

## Parallel Execution 

This framework supports parallel execution using Playwright workers.

Playwright runs tests simultaneously to reduce execution time.

Configuration: 

'''ts 
fullyParallel: true,
workers: process.env.CI ? 1 : undefined, 

'''md id="unwdpm"

## CI

GitHub Actions automatically executes tests on push.