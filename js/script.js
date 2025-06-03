'use-strict';

document.addEventListener("DOMContentLoaded", () => {
  fetch("file.json")
    .then(response => response.json())
    .then(students => {
      const container = document.getElementById("students");

      students.forEach((s) => {
        const bitWebsiteScore = s.projects.find(p => p.name === "bit-website")?.score[0] ?? "-";
        const bit1Scores = s.projects.find(p => p.name === "bit-1")?.score ?? [];
        const bit1Average = bit1Scores.length
          ? (bit1Scores.reduce((a, b) => a + b, 0) / bit1Scores.length).toFixed(2)
          : "-";

        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
          <img src="https://github.com/${s.usernameGithub}.png" alt="Foto de ${s.student}">
          <h3>${s.student}</h3>
          <p><strong>Bit Website:</strong> ${bitWebsiteScore}</p>
          <p><strong>Bit 1 (prom.):</strong> ${bit1Average}</p>
          <a href="https://github.com/${s.usernameGithub}" class="github-link" target="_blank">GitHub</a>
        `;

        container.appendChild(card);
      });
    })
    .catch(error => console.error("Error cargando el JSON:", error));
});