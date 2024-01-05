
$('.placement-silder').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 8000,
    pauseOnHover: false,
    cssEase: 'linear',

    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});


//login form validation
let loginPage = document.querySelector("#loginpage");
console.log(loginPage)

function loginForm() {
    let email = document.querySelector("#email").value;
    let emilMsg = document.querySelector("#emaill");

    if (email === "") {

        emilMsg.innerHTML = "*this filled is required";
        alert("this blank")
    }

}
