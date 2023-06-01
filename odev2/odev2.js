const postList = [
  { title: "Title 1", desc: "Post Desc1" },
  { title: "Title 2", desc: "Post Desc2" },
  { title: "Title 3", desc: "Post Desc3" },
];

function addPost(value) {
  return new Promise((resolve, reject) => {
    if (value) {
      postList.push(value);
      resolve("___\nyeni kitap eklendi\n___");
    } else {
      reject("yeni kitap eklenemedi");
    }
  });
}
function listPost() {
  postList.map((value) => {
    console.log("%s => %s", value.title, value.desc);
  });
}

async function postAddAndList(newPost) {
  try {
    const addStatus = await addPost(newPost);
    console.log(addStatus);
    listPost();
  } catch (err) {
    console.log(err);
  }
}
listPost();
postAddAndList({
  title: "Post 4",
  desc: "Post 4 Detail",
});
