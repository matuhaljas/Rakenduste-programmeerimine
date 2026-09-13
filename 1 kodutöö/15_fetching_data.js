async function getUser() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users/1");

    //Runs in case of 404, 500 etc.
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    const data = await response.json();
    console.log(data);
    
    //Runs in case of !200-299
  } catch (error) {
    console.log("Failed to fetch user:", error.message);
  }
}

getUser();