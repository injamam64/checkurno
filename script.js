// 🔐 CHANGE THIS: paste your Apps Script URL
const API_URL = "https://script.google.com/macros/s/AKfycbzdq-SUr1HhN4j1CU5qQ3vopfZgKh8xjuDK8WlZy5O7XmsgLMYsHqTbovp0CgvwX2mZfQ/exec";

// Login + Search
async function findDOB() {
    const name = document.getElementById("nameInput").value.trim();
    const password = document.getElementById("passwordInput").value;
    const result = document.getElementById("result");

    if (name === "" || password === "") {
        result.innerHTML = "Please enter name and password";
        result.style.color = "red";
        return;
    }

    result.innerHTML = "Searching...";
    result.style.color = "black";

    try {
        const response = await fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: name,
                password: password
            })
        });

        const data = await response.json();

        if (data.status === "success") {
            result.innerHTML = `Date of Birth: ${data.dob}`;
            result.style.color = "green";
        } else if (data.status === "notfound") {
            result.innerHTML = "Name not found";
            result.style.color = "red";
        } else {
            result.innerHTML = "Incorrect password";
            result.style.color = "red";
        }

    } catch (err) {
        result.innerHTML = "Server error. Try again.";
        result.style.color = "red";
    }
}
