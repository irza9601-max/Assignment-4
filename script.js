function checkGrade() {

    let percentage = document.getElementById("percentage").value;
    let result = document.getElementById("result");

    // Empty Validation
    if (percentage === "") {
        result.innerHTML = "⚠️ Please enter your percentage";
        result.style.background = "#ff9800";
        return;
    }

    percentage = Number(percentage);

    // Invalid Number
    if (percentage < 0 || percentage > 100) {
        result.innerHTML = "❌ Invalid Number";
        result.style.background = "#e53935";
    }

    // A+
    else if (percentage >= 90) {
        result.innerHTML = "🏆 Grade: A+";
        result.style.background = "#2ecc71";
    }

    // A
    else if (percentage >= 80) {
        result.innerHTML = "🌟 Grade: A";
        result.style.background = "#27ae60";
    }

    // B
    else if (percentage >= 70) {
        result.innerHTML = "😊 Grade: B";
        result.style.background = "#3498db";
    }

    // C
    else if (percentage >= 60) {
        result.innerHTML = "👍 Grade: C";
        result.style.background = "#f39c12";
    }

    // D
    else if (percentage >= 40) {
        result.innerHTML = "🙂 Grade: D";
        result.style.background = "#9b59b6";
    }

    // Fail
    else {
        result.innerHTML = "❌ Grade: Fail";
        result.style.background = "#e74c3c";
    }
}