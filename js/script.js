var navbar = ` 
<nav>
    <div class="logo">
        <a href='#'><img src="../img/DHTML.png" alt="DHTML logo"></a>
    </div>
    <div class="navigation">
        <input type="checkbox" class="toggle-menu">
        <div class="hamburger"></div>
        <ul class="menu">
            <li><a href='../index.html'>Home</a></li>
            <li><a href='../components/about.html'>About</a></li>
            <li><a href='../components/services.html'>Services</a></li>
            <li><a href='../components/works.html'>Works</a></li>
            <li><a href='../components/api.html'>API</a></li>
            <li><a href='../components/contact.html'>Conatct</a></li>
        </ul>
    </div>
</nav>`;

// inserting navbar in beginning of body
document.body.insertAdjacentHTML("afterbegin", navbar);

var footer = `
<footer>
<!-- <div>
    <h3>Do you want to discuss with us?</h3> <button>contact
        us</button>
</div> -->

<div class="row">
    <div class="column">
        <p>174 no name street</p>
        <p>slavonski brod, croatia</p>
    </div>
    <div class="column">
        <ul>
            <li><a href="https://www.facebook.com/"
                    target="_blank"><i class="fa fa-facebook"
                        aria-hidden="true"></i></a>
            </li>
            <li>
                <a href="https://www.instagram.com/"
                    target="_blank"><i
                        class="fa fa-instagram"
                        aria-hidden="true"></i></a>
            </li>
            <li>
                <a href="https://twitter.com/twitter"
                    target="_blank"><i class="fa fa-twitter"
                        aria-hidden="true"></i></a>
            </li>
            <li>
                <a href="https://www.linkedin.com/"
                    target="_blank"><i
                        class="fa fa-linkedin"
                        aria-hidden="true"></i></a>
            </li>
        </ul>
        <p>Copyright © 2024 - All Rights Reserved</p>
    </div>
</div>

</footer>
`
// inserting navbar in beginning of body
document.body.insertAdjacentHTML("afterend", footer);



function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}

window.addEventListener("scroll", reveal);



// Show more
const showAll = () => {
    // Finding all elements of a class (creates an array of results)
    let x = document.getElementsByClassName("hide");


    // If it exists, remove it.
    do { x[0].classList.remove("hide"); } while (x.length > 0)

    // Hide button after showing all
    var element = document.getElementById("toHide");
    element.classList.add("hide");
}