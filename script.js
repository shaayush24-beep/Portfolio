const video = document.querySelector(".bg-video");
const homeSection = document.querySelector("#home");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            video.play().catch(error => {
                console.log("Autoplay prevented:", error);
            });
        } else {
            video.pause();
        }
    });
}, {
    threshold: 0.5
});

observer.observe(homeSection);

