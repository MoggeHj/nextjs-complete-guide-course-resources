//All functions must have names named GET; POST; PUT; DELETE...

const GET = (request) => {
  console.log(request);
  return new Response("GET");
};

const POST = (request) => {
  console.log(request);
  return new Response("Post");
};

export { GET, POST };
