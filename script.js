const textInput = document.getElementById("textInput");

const wordCount = document.getElementById("wordCount");
const charCount = document.getElementById("charCount");
const charNoSpace = document.getElementById("charNoSpace");
const sentenceCount = document.getElementById("sentenceCount");
const paragraphCount = document.getElementById("paragraphCount");
const readingTime = document.getElementById("readingTime");

const copyBtn = document.getElementById("copyBtn");
const clearBtn = document.getElementById("clearBtn");
const downloadBtn = document.getElementById("downloadBtn");

// Live Counter
textInput.addEventListener("input", updateStats);

function updateStats() {

    const text = textInput.value;

    // Characters
    charCount.textContent = text.length;

    // Characters without spaces
    charNoSpace.textContent = text.replace(/\s/g, "").length;

    // Words
    const words = text.trim() === ""
        ? []
        : text.trim().split(/\s+/);

    wordCount.textContent = words.length;

    // Sentences
    const sentences = text.trim() === ""
        ? []
        : text.split(/[.!?]+/).filter(s => s.trim() !== "");

    sentenceCount.textContent = sentences.length;

    // Paragraphs
    const paragraphs = text.trim() === ""
        ? []
        : text.split(/\n+/).filter(p => p.trim() !== "");

    paragraphCount.textContent = paragraphs.length;

    // Reading Time (200 words/minute)
    const minutes = Math.ceil(words.length / 200);

    readingTime.textContent =
        words.length === 0 ? "0 Min" : minutes + " Min";
}

// Copy Text
copyBtn.addEventListener("click", () => {

    navigator.clipboard.writeText(textInput.value);

    copyBtn.innerHTML = "✅ Copied";

    setTimeout(() => {
        copyBtn.innerHTML = "📋 Copy";
    }, 2000);

});

// Clear Text
clearBtn.addEventListener("click", () => {

    textInput.value = "";

    updateStats();

});

// Download TXT
downloadBtn.addEventListener("click", () => {

    const blob = new Blob(
        [textInput.value],
        { type: "text/plain" }
    );

    const link = document.createElement("a");

    link.href = URL.createObjectURL(blob);

    link.download = "text.txt";

    link.click();

});

// Initialize
updateStats();

const textInput = document.getElementById("textInput");

if (textInput) {

const wordCount = document.getElementById("wordCount");
const charCount = document.getElementById("charCount");
const charNoSpace = document.getElementById("charNoSpace");
const sentenceCount = document.getElementById("sentenceCount");
const paragraphCount = document.getElementById("paragraphCount");
const readingTime = document.getElementById("readingTime");

function updateCounts() {

const text = textInput.value;

charCount.textContent = text.length;

charNoSpace.textContent = text.replace(/\s/g,"").length;

const words = text.trim() === "" ? 0 : text.trim().split(/\s+/).length;
wordCount.textContent = words;

const sentences = text.split(/[.!?]+/).filter(s => s.trim().length > 0).length;
sentenceCount.textContent = sentences;

const paragraphs = text.split(/\n+/).filter(p => p.trim().length > 0).length;
paragraphCount.textContent = paragraphs;

readingTime.textContent = Math.ceil(words / 200) + " Min";
}

textInput.addEventListener("input", updateCounts);

document.getElementById("copyBtn").onclick = () => {
navigator.clipboard.writeText(textInput.value);
alert("Copied!");
};

document.getElementById("clearBtn").onclick = () => {
textInput.value = "";
updateCounts();
};

document.getElementById("downloadBtn").onclick = () => {
const blob = new Blob([textInput.value], {type:"text/plain"});
const link = document.createElement("a");
link.href = URL.createObjectURL(blob);
link.download = "text.txt";
link.click();
};

updateCounts();

}
// ================= PASSWORD GENERATOR =================

function generatePassword() {

let length = parseInt(document.getElementById("length").value);

let chars = "";

if (document.getElementById("uppercase").checked)
chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

if (document.getElementById("lowercase").checked)
chars += "abcdefghijklmnopqrstuvwxyz";

if (document.getElementById("numbers").checked)
chars += "0123456789";

if (document.getElementById("symbols").checked)
chars += "!@#$%^&*()_+-=[]{}|;:,.<>?";

if (chars === "") {
alert("Select at least one option.");
return;
}

let password = "";

for (let i = 0; i < length; i++) {

password += chars.charAt(
Math.floor(Math.random() * chars.length)
);

}

document.getElementById("password").value = password;

}

function copyPassword() {

const pass = document.getElementById("password");

if (pass.value === "") {
alert("Generate password first.");
return;
}

navigator.clipboard.writeText(pass.value);

alert("Password Copied!");

}