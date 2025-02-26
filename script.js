// Show the image when the mouse enters the section and hide it when the mouse leaves
document.querySelector(".legislature").addEventListener("mouseenter", function() {
    document.getElementById("legislature-image").style.display = "block"; // Show the image
});

document.querySelector(".legislature").addEventListener("mouseleave", function() {
    document.getElementById("legislature-image").style.display = "none"; // Hide the image
});

document.querySelector(".judiciary").addEventListener("mouseenter", function() {
    document.getElementById("judiciary-image").style.display = "block"; // Show the image
});

document.querySelector(".judiciary").addEventListener("mouseleave", function() {
    document.getElementById("judiciary-image").style.display = "none"; // Hide the image
});

document.querySelector(".executive").addEventListener("mouseenter", function() {
    document.getElementById("executive-image").style.display = "block"; // Show the image
});

document.querySelector(".executive").addEventListener("mouseleave", function() {
    document.getElementById("executive-image").style.display = "none"; // Hide the image
});
function submitFeedback() {
    // Get the feedback text
    const feedbackText = document.getElementById("feedbackText").value;
    
    // Check if the feedback is not empty
    if (feedbackText.trim() !== "") {
        // Show the submission message
        document.getElementById("submittedMessage").classList.remove("hidden");
        document.getElementById("submittedMessage").innerText = "Your response is submitted.";
        
        // Clear the feedback text
        document.getElementById("feedbackText").value = "";
        
        // Optionally, hide the message after a few seconds
        setTimeout(() => {
            document.getElementById("submittedMessage").classList.add("hidden");
        }, 3000);
    } else {
        // If the feedback is empty, show a prompt
        document.getElementById("submittedMessage").classList.remove("hidden");
        document.getElementById("submittedMessage").innerText = "Please provide feedback before submitting.";
        
        // Hide the message after a few seconds
        setTimeout(() => {
            document.getElementById("submittedMessage").classList.add("hidden");
        }, 3000);
    }
}
// Array of event objects with images and details
const events = [
    {
        title: "Republic Day",
        date: "January 26",
        description: "Republic Day marks the day when the Constitution of India came into effect, making India a republic.",
        imageUrl: "https://tse1.mm.bing.net/th?id=OIP.onuaLTwqR6pKTaZRdDFN1QHaEK&pid=Api&P=0&h=180"
    },
    {
        title: "Constitution Day",
        date: "November 26",
        description: "Constitution Day honors the adoption of the Indian Constitution and Dr. B.R. Ambedkar's contribution.",
        imageUrl: "https://3.bp.blogspot.com/-5u09mPkCPxo/WDk7br1R1AI/AAAAAAACVRM/ken2_5ea0Mco9uTE6roDbYALpOVYcsfBwCLcB/s1600/1.jpg"
    },
    {
        title: "Law Day",
        date: "May 1",
        description: "Law Day promotes legal awareness among citizens and the importance of law in society.",
        imageUrl: "https://img.freepik.com/premium-photo/national-law-day-greetings-india-celebrating-constitution_1262027-32779.jpg?ga=GA1.1.1724164625.1731605405&semt=ais_hybrid"
    },
    {
        title: "National Voters' Day",
        date: "January 25",
        description: "National Voters' Day encourages young people to participate in elections, a fundamental democratic right.",
        imageUrl: "https://english.cdn.zeenews.com/sites/default/files/styles/zm_700x400/public/2023/01/25/1145411-national-voters-day.jpg"
    },
    {
        title: "Judiciary Day",
        date: "Various Dates",
        description: "Highlights the judiciary’s role in protecting citizens' rights and interpreting the Constitution.",
        imageUrl: "https://tse1.mm.bing.net/th?id=OIP.OzNsQtO93Xc5tz5GtTsYKAHaEL&pid=Api&P=0&h=180"
    },
    {
        title: "Independence Day",
        date: "August 15",
        description: "Marks India's freedom from colonial rule, leading to the adoption of the Constitution.",
        imageUrl: "https://tse1.mm.bing.net/th?id=OIP.3MI8AJNy7nC1qvuYxyVCkQHaEo&pid=Api&P=0&h=180"
    },
    
];

// Function to display events on the page
function displayEvents() {
    const container = document.getElementById('events-container');
    events.forEach(event => {
        const eventCard = document.createElement('div');
        eventCard.classList.add('event-card');

        eventCard.innerHTML = `
            <img src="${event.imageUrl}" alt="${event.title}">
            <div class="event-title">${event.title}</div>
            <div class="event-date">${event.date}</div>
            <button class="view-more-btn" onclick="toggleDescription(this)">View More</button>
            <div class="event-description">${event.description}</div>
        `;

        container.appendChild(eventCard);
    });
}

// Function to toggle event description visibility
function toggleDescription(button) {
    const description = button.nextElementSibling;
    description.style.display = description.style.display === 'none' ? 'block' : 'none';
    button.textContent = description.style.display === 'block' ? 'View Less' : 'View More';
}

// Call function to display events
displayEvents();