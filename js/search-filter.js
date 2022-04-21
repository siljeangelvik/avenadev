const events = "https://www.avena.dev/cms/wp-json/wp/v2/tribe_events";

fetch(events)
    .then(response => response.json())
    .then(data => {
        //console.log('Success:', data);
        listEvents(data);
    })
    .catch((error) => {
        console.error('Error:', error);
    });

const output = document.querySelector("#outputPosts");

function listEvents(events) {
    let allEvents = "";
    for (let event of events) {
        console.log(event);
        allEvents +=
            `<section id="posts">
         <!-- date respresents the date of an event or start date off assignments, reports etc. -->
            <div class="date-box">
            <span>${event.date}</span>
            </div>
            <div>
            <h2><a href="post.html?id=${event.id}">
            ${event.title.rendered}
            </a></h2>
            <p>${event.excerpt.rendered}</p>
            </div>
            </section>`;
    }
    output.innerHTML = allEvents;
}

// date object : måned og dag
// radiobutton checkbox,
// filtrer weasel
// legg til checkbox for fargen grå
for (const event of events) {
    console.log(typeof id.name  );
}

