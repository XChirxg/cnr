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
    { 
        name: "Aman Verma", 
        text: "Bro, I wasn’t expecting this level of detail! 🤯 The animations are top-notch, and you really understand branding. Will definitely work with you again! 🔥🔥", 
        img: "https://randomuser.me/api/portraits/men/10.jpg" 
    },
    { 
        name: "Emily Carter", 
        text: "WOW! Just wow! The UI/UX design is so sleek and smooth. You have an incredible eye for aesthetics. My website looks absolutely professional now! 👏👏", 
        img: "https://randomuser.me/api/portraits/women/15.jpg" 
    },
    { 
        name: "Rahul Mehta", 
        text: "Bhai, tumne kamaal kar diya! 💯 Not only was the work high quality, but you also delivered it before the deadline. Truly professional and creative. Hats off! 🎩", 
        img: "https://randomuser.me/api/portraits/men/22.jpg" 
    },
    { 
        name: "Simran Kaur", 
        text: "The animations are so fluid and engaging! ✨ I loved how you captured my brand's essence in the design. Highly recommended! ⭐⭐⭐⭐⭐", 
        img: "https://randomuser.me/api/portraits/women/30.jpg" 
    },
    { 
        name: "Vikram Singh", 
        text: "Ekdum zabardast kaam! 👌 The branding you created has taken my business to another level. Super satisfied! 😃", 
        img: "https://randomuser.me/api/portraits/men/35.jpg" 
    },
    { 
        name: "Sophia Williams", 
        text: "Your work speaks for itself! 🔥 Such a creative mind and attention to detail. My clients LOVE the new website. Can’t wait to collaborate again! 🤩", 
        img: "https://randomuser.me/api/portraits/women/40.jpg" 
    },
    { 
        name: "Kunal Kapoor", 
        text: "Honestly, I was hesitant at first, but after seeing the final design, I was blown away! 🤯 You truly understand what makes a brand stand out. Full marks from me! ✅", 
        img: "https://randomuser.me/api/portraits/men/45.jpg" 
    },
    { 
        name: "Olivia Martinez", 
        text: "So professional yet so friendly! The communication was smooth, and the work was beyond expectations. You’re truly talented. Keep up the great work! 💪✨", 
        img: "https://randomuser.me/api/portraits/women/50.jpg" 
    }
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