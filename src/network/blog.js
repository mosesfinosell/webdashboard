import axios from "axios";

const blogRequest = axios.create({
  baseURL: "https://dev.finosell.link/api/v2",
});

export async function blogPage() {
  const data = await blogRequest.get("/blog");

  // alert("data loaded 1")
  return data.data;
}

export async function singleBlogPage(id) {
  const data = await blogRequest.get(`/blog/${id}`);

  // alert("data loaded 1")
  const body = data.data.data.post;
  try {
    let json = JSON.parse(body.body);

    let reOrdered = reBlogOrderArray(json);
    body.body = reOrdered;
  } catch (err) {
    body.body = [{ key: 0, type: "unstyled", text: body.body }];
  }
  return data.data;
}

function reBlogOrderArray(arr) {
  let baseArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].type === "unstyled") {
      baseArray.push(arr[i]);
    } else if (arr[i].type === "unordered-list-item") {
      if (i === 0 || arr[i - 1].type !== "unordered-list-item") {
        baseArray.push([arr[i]]);
      } else {
        baseArray[baseArray.length - 1].push(arr[i]);
      }
    } else if (arr[i].type === "ordered-list-item") {
      if (i === 0 || arr[i - 1].type !== "ordered-list-item") {
        baseArray.push([arr[i]]);
      } else {
        baseArray[baseArray.length - 1].push(arr[i]);
      }
    }
  }
  return baseArray;
}
