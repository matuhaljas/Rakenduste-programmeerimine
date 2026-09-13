function displayProfile (user) {
    const name = user.name ?? "Anonymous";
    const age = user.age ?? "No age"
    const location = user.address.city ?? "No location"

    console.log("Name: " + name);
    console.log("Age: " + age);
    console.log("Location: " + location);
}

displayProfile({
    name: "Marcus",
    age: 21,
    address: {
        city: "Tallinn"
    }
});

displayProfile({
    name: "Jessika",
    address: {
        city: "Keila"
    }
});