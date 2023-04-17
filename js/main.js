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
  {no: '01', title: 'reviving retro PCs', paragraph: 'What happens when old PCs are given modern upgrades?', img:'img/image-retro-pcs.jpg'},
  {no: '02', title: 'top 10 laptops of 2022', paragraph: 'Our best picks for various needs and budgets.', img: 'img/image-top-laptops.jpg'},
  {no: '03', title: 'the growth of gaming', paragraph: 'How the pandemic has sparked fresh opportunities.', img:'img/image-gaming-growth.jpg'}
]

let templateFooter = document.querySelector('#footer-article-data').content;
let footerCards = document.querySelector('#footer-aside-card');

for (let item of footerArticleData) {
  let footerCardItem = templateFooter.cloneNode(true);

  footerCardItem.querySelector('.card-footer-title').textContent = item.title;
  footerCardItem.querySelector('.card-footer-description').textContent = item.paragraph;
  footerCardItem.querySelector('.footer-image').setAttribute('src', item.img);
  footerCardItem.querySelector('.footer-card-counter').textContent = item.no;

  footerCards.appendChild(footerCardItem);
}
