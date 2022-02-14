
const Article = require('./Article');
const Decorator = require('./Decorator');

const articles = Object.freeze([
    new Article('iPhone 11', 982, "USD"),
    new Article('Escapada cap de setmana: London', 450, "GBP"),
    new Article('Nintendo Switch Pro Controller Original', 7990, "JPY")
])

const toEur = Decorator();

for (const article of articles) {
    article.amountInEUR = toEur(article.amount, article.currency);
    console.log(article);
}
