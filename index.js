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

async function main() {
  try {
    const post1 = await createPost("Post 1");
    const post2 = await createPost("Post 2");
    const lastTime = await updateLastUserActivityTime();

    console.log(`post 1: ${post1.title} created at: ${lastTime}`);
    console.log(`post 2: ${post2.title} created at: ${lastTime}`);

    const updatedPost = await deletePost([post1, post2]);
    console.log(updatedPost);
  } catch (error) {
    console.error("Error:", error);
  }
}

main();
