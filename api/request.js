async function getPosts() {
  const Url = "https://dummyapi.io/data/v1/post?limit=10";

  const response = await fetch(Url, {
    method: "GET",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      "app-id": "613a5d41492a4a6678b09910",
    },
  });
  return response.json();
}

export default getPosts;
