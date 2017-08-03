module.exports = {
	'Ratio Check' : function (browser) {
	    testname = 'ratio_check';
		urlundertest = "https://www.google.com";

		browser
			.url(urlundertest)
			.screenshotVariousSizes(browser, urlundertest, "home")
			.end()
    }
 };