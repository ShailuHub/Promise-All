function updateLastUserActivityTime() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const lastTime = new Date();
      resolve(lastTime);
    }, 1000);
  });
}

function createPost(text) {
  return new Promise((resolve, reject) => {
    const newPost = {
      title: text,
      createdAt: new Date(),
    };
    resolve(newPost);
  });
}

function deletePost(posts) {
  return new Promise((resolve, reject) => {
    posts.pop();
    const updatedPost = posts;
    resolve(updatedPost);
  });
}

const post1 = createPost("Post 1");
const post2 = createPost("post 2");

const lastTime = updateLastUserActivityTime();

const obj = Promise.all([post1, post2, lastTime]);
obj.then((result) => {
  const [post1, post2, lastTime] = result;
  console.log(`post 1: ${post1.title} created at: ${lastTime}`);
  console.log(`post 2: ${post2.title} created at: ${lastTime}`);
  const updatedPost = deletePost([post1, post2]);
  updatedPost.then((res) => {
    console.log(res);
  });
});
