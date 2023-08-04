function onButtonAppears() {
    // Get the button element
    const popupContainer = document.querySelector("ytmusic-popup-container");
    const ytPaperDialog = popupContainer.querySelector('tp-yt-paper-dialog');
    const button = popupContainer.querySelector('button[aria-label="Cancel"]');
    document.querySelector("#nav-bar-background").style.backgroundColor = 'white';
    if (button) {
      button.click();
    }  
    else {
      document.querySelector("#nav-bar-background").style.backgroundColor = 'red';
      }
  }



function skipPopUp() {
    const observer = new MutationObserver((mutationsList) => {
        for (const mutation of mutationsList) {
          if (mutation.type === 'childList') {
            const ytPaperDialog = popupContainer.querySelector('tp-yt-paper-dialog');
            //const display = window.getComputedStyle(ytPaperDialog).getPropertyValue('display');
            if (ytPaperDialog) {
                //observer.disconnect();
                onButtonAppears();
            }
            else {
              document.querySelector("#nav-bar-background").style.backgroundColor = 'blue';
            }
          }
        }
      });
      const popupContainer = document.querySelector("ytmusic-popup-container");
      observer.observe(popupContainer, { childList: true });
}



module.exports = skipPopUp;