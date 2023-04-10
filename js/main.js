"use strict"

let asideNewsArticle = [
  {title: 'hydrogen vs electric cars', paragraph: 'will hydrogen-fueled cars ever catch up to EVs?'},
  {title: 'the downsides of AI artistry', paragraph: 'what are the possible adverse effects of on-demand AI image generation?'},
  {title: 'is VC funding drying up?', paragraph: 'private funding by VC firms is down 50% YOY. we take a look at what that means.'}
];

let template = document.querySelector('#aside-news-articles').content;
let asideCards = document.querySelector('#aside-news-articles-card');

for (let item of asideNewsArticle) {
  let asideCard = template.cloneNode(true);

  asideCard.querySelector('.card-aside-news-article-title').textContent = item.title;
  asideCard.querySelector('.card-aside-news-article-para').textContent = item.paragraph;

  asideCards.appendChild(asideCard);
}


let footerArticleData = [
  {title: 'reviving retro PCs', paragraph: 'what happens when old PCs are given modern upgrades?'},
  {title: 'top 10 laptops of 2022', paragraph: 'our best picks for various needs and budgets.'},
  {title: 'the growth of gaming', paragraph: 'how the pandemic has sparked fresh opportunities.'}
]

let templateFooter = document.querySelector('#footer-article-data').content;
let footerCards = document.querySelector('#footer-aside-card');

for (let item of footerArticleData) {
  let footerCardItem = templateFooter.cloneNode(true);

  footerCardItem.querySelector('.card-footer-title').textContent = item.title;
  footerCardItem.querySelector('.card-footer-description').textContent = item.paragraph;

  footerCards.appendChild(footerCardItem);
}
