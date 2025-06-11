const username = "TON_UTILISATEUR_GITHUB"; // remplace par ton nom d'utilisateur GitHub

fetch(`https://api.github.com/users/${username}/repos`)
  .then(response => response.json())
  .then(repos => {
    const container = document.getElementById('repos');
    repos.forEach(repo => {
      const div = document.createElement('div');
      div.className = 'repo';
      div.innerHTML = `<strong>${repo.name}</strong><p>${repo.description || 'Aucune description'}</p><a href="${repo.html_url}" target="_blank">Voir le repo</a>`;
      container.appendChild(div);
    });
  });
