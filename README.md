# NUL Automated Tests

A repository of [Playwright](https://playwright.dev/) tests for capturing and running end to end tests for NULib applications

## Getting Started

### Install

Run the following from a terminal window on your machine

```bash
# Clone the repository (only need to do this once)
git clone ADDRESS_HERE

# Change into the repository directory
cd playwright-tests

# Install dependencies
npm install # if you get errors, try `npm install --legacy-peer-deps`
```

### Set up Authenticated User

We'll set up a user that can log in to the application. This user will be used to run tests that require authentication. Create a new file in the root of the repository called `.env` and add the following lines to it:

```bash
AUTH_USER=[VALUE_GOES_HERE]
AUTH_PASSWORD=[VALUE_GOES_HERE]
```

Contact a member of the NULib RDC team for the values to use for `AUTH_USER` and `AUTH_PASSWORD`.

## Run tests

Tests for Digital Collections are located in the `/tests/dc` directory. To run Digital Collections tests:

```bash
npx playwright test tests/dc
```

## Write new tests

Playwright has a code generation tool that can be used to generate tests for a given URL. To use it, run the following command from the root of the repository (this example is for Digital Collections):

```bash
npx playwright codegen dc.library.northwestern.edu
```
