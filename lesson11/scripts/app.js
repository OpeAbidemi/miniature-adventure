// Selecting the necessary elements
const create_btn = document.querySelector("#create_btn");
const backdrop = document.querySelector("#backdrop");
const post_list = document.querySelector("#post_list");
const post_form = document.querySelector("#post-form");
const modal = document.querySelector(".modal");

// Represent each post
class Post {
  author = "";
  caption = "";
  datePosted = new Date();

  constructor(author, caption) {
    this.author = author;
    this.caption = caption;
  }
}

// List of the all the posts
const listOfPosts = [];

// Opens the modal
create_btn.addEventListener("click", () => {
  modal.style.display = "block";
});

// Closes the modal
backdrop.addEventListener("click", () => {
  modal.style.display = "none";
});

// Creates a new post
function createPost(author, caption) {
  const post = new Post(author, caption);
  // Closes the modal
  modal.style.display = "none";

  // Adds the post to the list
  listOfPosts.push(post);

  // Refresh the post list
  renderPost();
}

// Adds all the post to the post list container
function renderPost() {
  post_list.innerHTML = ""; // Empty the whole list

  // Loops thru the list of post
  listOfPosts.forEach((post) => {
    // Create a parent el
    const parent = document.createElement("div");
    parent.classList.add("post");

    // for the author too
    const authorEl = document.createElement("p");
    authorEl.classList.add("post_author");

    // for the caption too
    const captionEl = document.createElement("p");

    // for the date too
    const dateEl = document.createElement("p");
    dateEl.classList.add("post_date");

    // Set their values for each post
    authorEl.innerHTML = post.author;
    captionEl.innerHTML = post.caption;
    dateEl.innerHTML = post.datePosted;

    // add the elems to the parent elem
    parent.append(authorEl, captionEl, dateEl);

    // add parent element to the post list
    post_list.appendChild(parent);
  });
}

// Refresh the list on page load
renderPost();

// Runs when we submit the form
post_form.addEventListener("submit", (evt) => {
  evt.preventDefault(); // Prevent the form from reloading the page

  // Get the author and caption from the form
  const author = post_form.author.value;
  const caption = post_form.caption.value;

  // Create a new post based on the values entered
  createPost(author, caption);
  evt.target.reset(); // Resets the form
});
