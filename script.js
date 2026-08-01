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