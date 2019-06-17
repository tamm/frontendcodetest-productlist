# My response to the AKQA frontend code test
I have built a small demo in Vue, using Vue CLI.

## Install instructions
1. Make sure you have node installed on your system. If you do, skip to step 4
2. If you are on a Mac you can install it using homebrew!
  Open up a terminal and type in:
  `/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`
3. Then run this command to install node:
  `brew install node git`
4. Install Yarn
  `npm install -g yarn`
5. Clone the project to your computer.
  `git clone git@github.com:tamm/frontendcodetest-productlist.git`
6. Navigate into the folder.
  `cd deputyfrontendchallenge`
7. Run the setup.
  `yarn setup`
8. Start the Vue CLI UI, if you want, it's neat.
  `yarn ui`
  Then run the task serve.
8. Or manually start the project.
  `yarn dev`

## Tests
I have produced some basic unit tests with vue-test-utils, using Jest.

You can run the test suites by CLI:
  `yarn test`
OR you can run them in the Vue CLI UI
  By running the task test:unit in the control panel.