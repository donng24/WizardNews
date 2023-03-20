const DATABASE_URL="postgres://wizardnews_ifup_user:uG9LhvvY00CrF7VMMLhCdcRkT07zVzra@dpg-cgcb81t269v4icvjk7mg-a.ohio-postgres.render.com/wizardnews_ifup?ssl=true"
const express = require("express");
const app = express();
const morgan = require("morgan");
const postBank = require("./postBank")

app.use(morgan('dev'));

app.get('/home/donng24/Fullstack/PairExercise.Wizard-news-pt1/postBank.js', (req, res) => {
  const id = req.params.id;
  const post = postBank.find(id);
  
  if (!post.id) {
 res.status(404)

const posts = postBank.list();

const html = `<!DOCTYPE html>
<html>
<head>
  <title>Wizard News</title>
  <link rel="stylesheet" href="/style.css" />
</head>
<body>
  <div class="news-list">
    <header><img src="/logo.png"/>Wizard News</header>
    ${posts.map(post => `
      <div class='news-item'>
        <p>
          <span class="news-position">${post.id}. ▲</span>
          ${post.title}
          <small>(by ${post.name})</small>
        </p>
        <small class="news-info">
          ${post.upvotes} upvotes | ${post.date}
        </small>
      </div>`
    ).join('')}
  </div>
</body>
</html>`

res.send(html);
}
else {

}});


const { PORT = 1337 } = process.env;

app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});


