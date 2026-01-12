function main(x) {
  console.log(x);
  throw new Error("Main throws. This is not on the pr branch");
  return x;
}

main("hello world");

main("hello mom");
// Just some addition to trigger CI again
