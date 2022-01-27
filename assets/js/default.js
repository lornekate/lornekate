(function(){
    "use strict";

    /**
     * moves footer to bottom of page if page too short to fill the page
     * on some random resize
     */
    window.onresize = () => {
        fixFooter();
    };

    /**
     * Need to:
     * 1. add eventlistener to login button
     * 2. check if authenticated
     */
    window.onload = () => {
        fixFooter();

        // check validation w/ api
        // let res = api.checkAuthentication();
        // if validation holds add wedding to the nav
        // if (res.authenticated) {
            // switch login out for logout
            // add eventlistener for logout
            // add wedding tab into nav
            // addLogout(res.data);
        // } else {
            // add eventlistener to the login form
            // document.getElementById("loginForm").addEventListener('submit', loginEventHandler);
        // }
    };

    /**
     * fixes the footer in case it needs to be fixed
     */
    function fixFooter() {
        let footerEl = document.getElementById("footer");
        let viewHeight = window.innerHeight;
        let footerHeight = footerEl.scrollHeight;
        let compare = viewHeight - footerHeight;
        let footerTop =  footerEl.getBoundingClientRect().top;
        if ((compare > footerTop)){
            footerEl.style.marginTop = (compare - footerTop).toString() + "px";
        }
    }

    /**
     * Handles the submit of the login form
     * @param {*} e 
     */
    function loginEventHandler(e) {
        e.preventDefault();
        let code = document.getElementById("login-code").value;
        let res = api.authenticate(code);
        if (res.authenticated === true){
            document.getElementById("loginForm").reset();
            document.getElementById("loginErrorMessage").innerHTML = res.message;
            addLogout(res.data);
        } else {
            document.getElementById("loginForm").reset();
            document.getElementById("loginErrorMessage").innerHTML = res.message;
        }
    }

    /**
     * Handles the click of the logout button.
     * @param {event} e 
     */
    function logoutEventHandler(e) {
        e.preventDefault();
        api.deAuthenticate();
        addLogin();
    }

    /**
     * Adds a logout button instead of the login modal & sets up the event listeners.
     * @param {string} weddingNav 
     */
    function addLogout(weddingNav) {
        // close modal if it is open
        let modalEl = document.getElementById('loginModal');
        if (modalEl.className === "modal fade show"){
            let modal = bootstrap.Modal.getInstance(modalEl);
            modal.toggle();
        }
        // replace login button w/ logout button
        let buttonEl = document.getElementById('login-logout');
        buttonEl.removeAttribute('data-bs-toggle');
        buttonEl.removeAttribute('data-bs-target');
        buttonEl.innerHTML = "Logout";
        // add the event listener to the logout
        document.getElementById('login-logout').addEventListener('click', logoutEventHandler);
        // add weddingNav to the navbar
        let navbar = document.getElementById('navbarNav').firstElementChild;
        let weddingEl = document.createElement('li');
        weddingEl.id = 'wedding';
        weddingEl.className = "nav-item dropdown";
        weddingEl.innerHTML = weddingNav;
        navbar.appendChild(weddingEl);
        if (window.location.pathname.startsWith("/wedding/", 0)){
            document.getElementById('toActivate').className += " active";
        }
    }

    /**
     * Replaces the logout button w/ the login modal & adds an eventlistener to login again.
     * If wedding tab currently present, removes it from the navbar. 
     */
    function addLogin() {
        // replace logout w/ login button
        let buttonEl = document.getElementById('login-logout');
        buttonEl.setAttribute('data-bs-toggle', "modal");
        buttonEl.setAttribute('data-bs-target', "#loginModal");
        buttonEl.innerHTML = "Login";
        // remove the event listener on the button
        buttonEl.removeEventListener('click', logoutEventHandler);
        // remove wedding from navbar
        document.getElementById('wedding').remove();
    }

})();