function getData() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Here is your data"), 1000);
  });
}

async function main() {
  const result = await getData();
  console.log(result);
}

main();