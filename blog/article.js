const articles = {
  "article-1": {
    imageLink : "https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg",
    title: "Starting and Growing a Career in Web Design",
    content: `
      <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis blandit dui, nec bibendum orci. Suspendisse potenti. Nunc quis sapien ut nibh feugiat mattis. Morbi interdum imperdiet tellus eu commodo. Aliquam mattis ante quis lacus rhoncus, et porttitor quam molestie. Aliquam tincidunt pellentesque quam sit amet posuere. Integer sollicitudin purus a aliquam hendrerit. Sed nec nulla vitae sem mollis viverra non et ante. Aliquam eget nisi lacinia, consectetur ligula ut, gravida tortor. Aenean a odio rutrum, pharetra eros ut, venenatis urna. Vestibulum placerat ligula mauris, sed auctor tellus ornare ac. Nullam commodo pretium elit, eget ultricies risus pellentesque et. Praesent bibendum, ligula ac dignissim semper, felis eros convallis enim, vitae rutrum elit ligula eget felis. Sed ut placerat nisi. </p> 
      `,
  },
};

const urlParams = new URLSearchParams(window.location.search);
const articleParam = urlParams.get("article");

console.log(articleParam);

function loadArticle() {
  const article = articles[articleParam] || {
    title: "404 Not Found",
    content:
      "<h2>404 Not Found</h2><p>The page you requested does not exist.</p>",
  };
  document.title = article.title;
  document.getElementById('content_banner').src = article.imageLink;

  document.getElementById('content_title').innerText = article.title;
  document.getElementById('content_body').innerHTML = article.content;

}

loadArticle();
