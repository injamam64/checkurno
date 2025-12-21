// Student data stored directly in code
const students = {
    "rahul das": "101",
    "suman roy": "12",
    "amit saha": "103",
    "priya sen": "104",
    "md injamam": "105",
    "md imran": "01",
};

function findRoll() {
    let name = document.getElementById("studentName").value.toLowerCase().trim();
    let result = document.getElementById("result");

    if (students[name]) {
        result.innerHTML = "Your Roll Number is: " + students[name];
        result.style.color = "green";
    } else {
        result.innerHTML = "Name not found!";
        result.style.color = "red";
    }
}
