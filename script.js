function addNeed() {
    const need = document.getElementById("needInput").value.trim();
    if (need === "") return alert("Please enter a need!");

    const li = document.createElement("li");
    li.textContent = need;
    document.getElementById("needs-list").appendChild(li);

    document.getElementById("needInput").value = "";
}
