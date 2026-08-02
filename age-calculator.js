function calculateAge() {

const dob = document.getElementById("dob").value;

if (!dob) {
    alert("Select Date of Birth");
    return;
}

const birth = new Date(dob);
const today = new Date();

let years = today.getFullYear() - birth.getFullYear();
let months = today.getMonth() - birth.getMonth();
let days = today.getDate() - birth.getDate();

if (days < 0) {
    months--;
    days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
}

if (months < 0) {
    years--;
    months += 12;
}

document.getElementById("years").textContent = years;
document.getElementById("months").textContent = months;
document.getElementById("days").textContent = days;

let next = new Date(today.getFullYear(), birth.getMonth(), birth.getDate());

if (next < today) {
    next.setFullYear(today.getFullYear() + 1);
}

let diff = Math.ceil((next - today) / (1000 * 60 * 60 * 24));

document.getElementById("nextBirthday").textContent =
diff + " Days";

}