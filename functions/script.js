fetch("https://rss2json.com/api.json?rss_url=https://www.mwananchi.co.tz/rss")
  .then(res => res.json())
  .then(data => {
    let output = "";
    data.items.slice(0, 5).forEach(article => {
      output += `
        <div class="news">
          <h3>${item.title}</h3>
          <p>${item.description}</p>
          <a href="${item.url}" target="_blank">Read more</a>
        </div>
      `;
    });
    document.getElementById("news").innerHTML = output;
  })
  .catch(err => console.error(err));