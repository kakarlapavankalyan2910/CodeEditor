function runCode() {
    // Get the code from the editor
    const code = document.getElementById("code-editor").value;

    // Get the selected programming language
    const language = document.getElementById("language-selector").value;

    // Clear previous output
    document.getElementById("output").textContent = "";

    // Mock output (In real case, you'd send it to a backend service for execution)
    let output = "";

    if (code.trim() === "") {
        output = "Please enter some code.";
    } else {
        output = `Language: ${language}\nCode:\n${code}\n\n(Result would be displayed here if execution was available.)`;
    }

    // Display the output
    document.getElementById("output").textContent = output;
}
