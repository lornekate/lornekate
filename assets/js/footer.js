(function(){
    "use strict";

    /**
     * moves footer to bottom of page if page too short to fill the page
     */
    window.onload = function() {
        let footerEl = document.getElementById("footer");
        let viewHeight = window.innerHeight;
        let footerHeight = footerEl.scrollHeight;
        let compare = viewHeight - footerHeight;
        let footerTop =  footerEl.getBoundingClientRect()["top"];
        if (!(compare <= footerTop)){
            footerEl.style.marginTop = (compare - footerTop).toString() + "px";
        }
    };
})();