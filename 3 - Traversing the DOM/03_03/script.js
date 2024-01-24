// Using 'closest'
let newsContent = document.getElementById('newsContent');
let closestArticle = newsContent.closest('.article');
console.log('Closest article element:', closestArticle);

// Using 'contains'
let mainContent = document.getElementById('mainContent');
let isNewsInsideMain = mainContent.contains(newsContent);
console.log('Is news content inside main:', isNewsInsideMain);

