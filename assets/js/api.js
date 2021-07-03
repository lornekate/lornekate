let api = (function(){

    /**
     * So..... This is a little awkard.... 
     * Please forgive me security gods... I didnt want to do this...
     */

    let module = {};

    if(!localStorage.getItem('validated')){
        localStorage.setItem('validated', 'false');
    }
    if(!localStorage.getItem('code')){
        localStorage.setItem('code', 'Wedding2022');
    }

    /**
     * For a user accessing the page, check localstorage for validation.
     * If validated, then pass additional tab info to the UI side
     */
    module.checkAuthentication = () => {
        if (localStorage.getItem('validated') === 'false') {
            return {'authenticated' : false, 'data': ""};
        } else {
            return {'authenticated': true, 'data': getNavUpdate()};
        }
    };

    /**
     * Authenticates a user & udpates local storage to reflect this fact for
     * future logins
     */
    module.authenticate = (code) => {
        if(code === localStorage.getItem('code')){
            localStorage.setItem('validated', 'true');
            return {'authenticated' : true, 'data': getNavUpdate(), 'message' : ""};
        } else {
            return {'authenticated': false, 'data': "", 'message': "Wrong password."};
        }
    };

    module.deAuthenticate = () => {
        localStorage.setItem('validated', 'false');
    };  

    function getNavUpdate() {
        return `
            <a class="nav-link dropdown-toggle text-dark" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false" id="toActivate">Wedding</a>
            <ul class="dropdown-menu">
                <li><a class="dropdown-item text-dark" href="/wedding/schedule.html">Event Schedule</a></li>
                <li><a class="dropdown-item text-dark" href="/wedding/transportation.html">Transportation</a></li>
                <li><a class="dropdown-item text-dark" href="/wedding/accommodations.html">Accommodations</a></li>
            </ul>`;
    }

    return module;
})();
