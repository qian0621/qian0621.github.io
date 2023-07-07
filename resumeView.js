function extendIframeToBottom() {
    var iframe = document.getElementById("resumeViewer");
    var windowHeight = window.innerHeight;
    var iframeHeight = iframe.getBoundingClientRect().top - document.getElementsByTagName("header")[0].getBoundingClientRect().top;
    iframe.height = windowHeight - iframeHeight + "px";
}
  
window.addEventListener("load", extendIframeToBottom);
window.addEventListener("resize", extendIframeToBottom);