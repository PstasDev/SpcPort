document.getElementById("lineForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    var textInput = document.getElementById("textInput").value;
    var language = document.getElementById("languageSelect").value;
    var startNumber = parseInt(document.getElementById("startNumber").value);
    startNumber = isNaN(startNumber) ? 1 : startNumber; // Default to 1 if startNumber is null or NaN
    var lines = textInput.split("\n");
    var result = "";
    var count = startNumber;

    for (var i = 0; i < lines.length; i++) {
        if (lines[i].trim() !== "") { // Ignore empty lines
            var line = lines[i].trim();
            if (language === "csharp") {
                result += '<span class="text-teal-500">Console</span>.<span class="text-yellow-500">WriteLine</span>(<span class="text-orange-300">"' + count + '. ' + line + '"</span>);<br>';
            } else if (language === "cpp") {
                result += '<span class="text-teal-500">std</span>::<span class="text-yellow-500">cout</span> &lt;&lt; <span class="text-orange-300">"' + count + '. ' + line + '"</span> &lt;&lt; <span class="text-green-600">std::endl</span>;<br>';
            } else if (language === "python") {
                result += '<span class="text-yellow-500">print</span>(<span class="text-orange-300">"' + count + '. ' + line + '"</span>)<br>';
            }
            count++;
        }
    }

    if (result === "") {
        result = "Érvénytelen bemenet";
    }

    // Set the innerHTML of resultArea to the generated result
    document.getElementById("resultArea").innerHTML = '<code class="language-' + language + '">' + result + '</code>';
});
