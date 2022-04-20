const queryString = window.location.search;
const id = new URLSearchParams(queryString).get('id');
if (!id) {
    window.location = "posts.html";
}

const postUrl = `https://www.avena.dev/cms/wp-json/wp/v2/posts/${id}`;
//const postUrl = `https://www.avena.dev/cms/wp-json/wp/v2/pages/${id}`;
fetch(postUrl)
    .then(response => response.json())
    .then(data => {
        //console.log('Success:', data);
        displayPost(data);
    })
    .catch((error) => {
        console.error('Error:', error);
    });

const output = document.querySelector("#mainPost");

function displayPost(data) {
    console.log(data);
    const title = data.title.rendered;
    //const excerpt = data.excerpt.rendered;
    const excerpt = data.content.rendered;
    const link = data.link;
    getImageURL(data.featured_media);

    output.innerHTML = `
  <h1>${title}</h1>
  ${excerpt}
  <p>&gt; <a href="${link}" target="_blank">Read more @ avena.dev</a></p>
  `;
    document.title = title;
}

function getImageURL(id) {
    fetch(`https://www.avena.dev/cms/wp-json/wp/v2/media/${id}`)
        .then(response => response.json())
        .then(data => {
            //console.log('Success (getImageURL):', data);
            addImage(data.source_url);
        })
        .catch((error) => {
            console.error('Error (getImageURL):', error);
        });
}

function addImage(src) {
    console.log("IMG: " + src);
    if (src) {
        let img = document.createElement("img");
        img.src = src;
        img.alt = "";
        img.width = 640;
        output.prepend(img);
    }
}


/// POSTS

const postsUrl = "https://www.avena.dev/cms/wp-json/wp/v2/posts";
//const postsUrl = "https://www.avena.dev/cms/wp-json/wp/v2/pages";
fetch(postsUrl)
    .then(response => response.json())
    .then(data => {
        //console.log('Success:', data);
        listPosts(data);
    })
    .catch((error) => {
        console.error('Error:', error);
    });

const postsOutput = document.querySelector(".mainPosts");

function listPosts(posts) {
    let allPosts = "";
    for (let post of posts) {
        console.log(post);
        allPosts += `
         <!-- date respresents the date of an event or start date off assignments, reports etc. -->
        <div class="date-box">
            <span>${post.date}</span>
        </div>
        <div>
            <h2><a href="html/post.html?id=${post.id}">
                ${post.title.rendered}
            </a></h2>
            <p>${post.excerpt.rendered}</p>
            </div>`;
    }
    postsOutput.innerHTML = allPosts;
}