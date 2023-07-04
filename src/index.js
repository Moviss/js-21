// GET

fetch("https://jsonplaceholder.typicode.com/posts")
  .then(response => response.json())
  .then(post => document.body.innerHTML = `<pre>${JSON.stringify(post, null, 2)}</pre>`)
  .catch(error => console.error(error));

// const postId = 2;
// //
// fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
// .then(response => response.json())
// .then(post => document.body.innerHTML = `<pre>${JSON.stringify(post, null, 2)}</pre>`)
// .catch(error => console.error(error));


// POST

// const newPost = {
//   userId: 1,
//   title: "Mój post!!!!",
//   body: "Mój wspaniały post a tu jego treść"
// };
//
// const options = {
//   method: "POST",
//   body: JSON.stringify(newPost),
//   headers: {
//     "Content-Type": "application/json; charset=UTF-8"
//   },
// };
//
// fetch(`https://jsonplaceholder.typicode.com/posts`, options)
// .then(response => response.json())
// .then(post => document.body.innerHTML = `<pre>${JSON.stringify(post, null, 2)}</pre>`)
// .catch(error => console.error(error));


// PATCH / PUT

// const postToUpdate = {
//   id: 1,
//   title: "Mój post!!!!",
// };
//
// const options = {
//   method: "PATCH",
//   body: JSON.stringify(postToUpdate),
//   headers: {
//     "Content-Type": "application/json; charset=UTF-8"
//   },
// };
//
// fetch(`https://jsonplaceholder.typicode.com/posts/${postToUpdate.id}`, options)
// .then(response => response.json())
// .then(post => document.body.innerHTML = `<pre>${JSON.stringify(post, null, 2)}</pre>`)
// .catch(error => console.error(error));


// DELETE

// const postIdToDelete = 1;
//
// fetch(`https://jsonplaceholder.typicode.com/posts/${postIdToDelete}`, {
//   method: "DELETE"
// })
// .then(post => document.body.innerHTML = `Post deleted!`)
// .catch(error => console.error(error));
