document.querySelector(".cta").addEventListener("click", function() {
    document.getElementById("Services").scrollIntoView({ behavior: "smooth" });
});

document.querySelector(".contact-btn").addEventListener("click", function() {
    window.location.href = "mailto:chinurag@gmail.com?subject=Interested%20in%20Your%20Services&body=Hello,%0D%0A%0D%0AI%20visited%20your%20page%20and%20I%20am%20interested%20in%20discussing%20further%20about%20the%20design.%0D%0A%0D%0AThank%20you!";
});
document.querySelector(".contact-btn2").addEventListener("click", function() {
    window.location.href = "mailto:chinurag@gmail.com?subject=Interested%20in%20Your%20Services&body=Hello,%0D%0A%0D%0AI%20visited%20your%20page%20and%20I%20am%20interested%20in%20discussing%20further%20about%20the%20design.%0D%0A%0D%0AThank%20you!";
});



const reviews = [
    { name: "Aman Verma", text: "Exceptional service and quality! Highly recommended.", img: "https://randomuser.me/api/portraits/men/1.jpg" },
    { name: "Priya Sharma", text: "Loved the professionalism and creativity!", img: "https://randomuser.me/api/portraits/women/2.jpg" },
    { name: "Rahul Mehta", text: "They exceeded my expectations! Fantastic work.", img: "https://randomuser.me/api/portraits/men/3.jpg" },
    { name: "Simran Kaur", text: "Absolutely loved working with them. Five stars!", img: "https://randomuser.me/api/portraits/women/4.jpg" },
    { name: "Vikram Singh", text: "Brilliant execution and timely delivery. Highly satisfied!", img: "https://randomuser.me/api/portraits/men/5.jpg" }
];

const mobileReviews = document.getElementById("mobileReviews");

reviews.forEach(review => {
    const reviewEntry = document.createElement("div");
    reviewEntry.classList.add("review-entry");
    reviewEntry.innerHTML = `
        <img src="${review.img}" alt="${review.name}" class="review-img">
        <div>
            <p class="review-name">${review.name}</p>
            <p class="review-text">${review.text}</p>
        </div>
    `;
    mobileReviews.appendChild(reviewEntry);
});