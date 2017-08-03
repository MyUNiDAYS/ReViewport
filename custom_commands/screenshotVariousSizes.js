exports.command = function (browser, url, label) {
    // Make sure a URL has been passed
    if (!url || typeof url !== 'string' || url.length < 5) {
      console.log('No URL was specified');
      return this;
    }

    var url = url,
        save_directory = 'screenshots',
        viewport_widths = [240, 320, 340, 576, 603, 640, 768, 800, 960, 1024, 1280, 1400, 1600, 1920];
        viewport_heights = [320, 568, 640, 486, 603, 480, 450, 600, 768, 800, 1000, 1095, 1200];

    browser.url(url).waitForElementVisible('body', 1000);
    
    viewport_heights.forEach(function(height){
      viewport_widths.forEach(function(width){
        browser
          .resizeWindow(width, height, function(){
            console.log("Screenshotting size: " + width + 'x' + height);
          })
          .saveScreenshot(save_directory + '/' 
                  + (browser.globals.env ? browser.globals.env + '/' : '') 
                  + (label ? label : '')  
                  + '_' + width + 'x' + height 
                  + '.png')
          //e.g. screenshots/chrome/mysite_640x480.png
      })
    });
      
    return this;
};