# ReViewport

This is a tool written using Nightwatch.js to screenshot a page in multiple common resolutions for human review.

## Pre-requisites

* Java
* Node.js

## Installation instructions

* Clone/download repo
* Run `setup.cmd` from an Admin cmd prompt ( or `setup.sh` if you're not a Windows user)

## Usage instructions

* Modify the `ratio_check.js` in `tests/` to change the url (change the value of urlundertest)
* Run `nightwatch --env <browser>` from the root of ReViewport

As there is only one test in the entire folder the above command will run that test, all screenshots should be deposited into folders named for their browser in a "screenshots" folder in the root.

### List of browsers:
* Chrome (chrome)
* Firefox (firefox)
* IE11 (ie11)
* MS Edge (edge)

### Edge Caveats
* Edge 14 (shipped with Windows 10 Anniversary Update) works out of the box.
* For Edge 13, download the appropriate driver from [here](https://developer.microsoft.com/en-us/microsoft-edge/tools/webdriver/) before running the setup
* For Edge 15, run the setup, then run `./node_modules/.bin/selenium-standalone install --drivers.edge.version=15063`, then run the setup again. This will be made better by fixing issue [#2](https://github.com/MyUNiDAYS/ReViewport/issues/2)
