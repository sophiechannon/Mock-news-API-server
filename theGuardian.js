const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors())

let fakeFeed = {
  "response": {
    "status": "ok",
    "userTier": "developer",
    "total": 2358509,
    "startIndex": 1,
    "pageSize": 10,
    "currentPage": 1,
    "pages": 235851,
    "orderBy": "newest",
    "results": [
      {
        "id": "australia-news/live/2022/jul/10/australia-news-live-more-people-given-access-to-covid-antiviral-treatments-as-nsw-begins-flood-clean-up",
        "type": "liveblog",
        "sectionId": "australia-news",
        "sectionName": "Australia news",
        "webPublicationDate": "2022-07-10T07:17:21Z",
        "webTitle": "Australia news live: Queenslanders urged to wear masks as nation records 13 Covid deaths; NSW flood clean-up under way",
        "webUrl": "https://www.theguardian.com/australia-news/live/2022/jul/10/australia-news-live-more-people-given-access-to-covid-antiviral-treatments-as-nsw-begins-flood-clean-up",
        "apiUrl": "https://content.guardianapis.com/australia-news/live/2022/jul/10/australia-news-live-more-people-given-access-to-covid-antiviral-treatments-as-nsw-begins-flood-clean-up",
        "fields": {
          "thumbnail": "https://media.guim.co.uk/88d052d9259c82ed38625b340da9b563b59f21aa/0_172_2600_1561/500.jpg"
        },
        "isHosted": false,
        "pillarId": "pillar/news",
        "pillarName": "News"
      },
      {
        "id": "lifeandstyle/2022/jul/10/james-wong-on-gardening-the-amazing-waterlily-that-changed-architecture",
        "type": "article",
        "sectionId": "lifeandstyle",
        "sectionName": "Life and style",
        "webPublicationDate": "2022-07-10T07:15:28Z",
        "webTitle": "The waterlily that changed architecture",
        "webUrl": "https://www.theguardian.com/lifeandstyle/2022/jul/10/james-wong-on-gardening-the-amazing-waterlily-that-changed-architecture",
        "apiUrl": "https://content.guardianapis.com/lifeandstyle/2022/jul/10/james-wong-on-gardening-the-amazing-waterlily-that-changed-architecture",
        "fields": {
          "thumbnail": "https://media.guim.co.uk/cae4b74eb0a53f259c5757db0980dc896f2731e9/0_364_5000_3000/500.jpg"
        },
        "isHosted": false,
        "pillarId": "pillar/lifestyle",
        "pillarName": "Lifestyle"
      },
      {
        "id": "sport/2022/jul/10/its-been-a-hell-of-a-ride-john-mcenroe-on-learning-to-lose-and-being-the-rock-star-of-tennis-",
        "type": "article",
        "sectionId": "sport",
        "sectionName": "Sport",
        "webPublicationDate": "2022-07-10T07:00:30Z",
        "webTitle": "‘It’s been a hell of a ride’: John McEnroe on learning to lose and being the rock star of tennis ",
        "webUrl": "https://www.theguardian.com/sport/2022/jul/10/its-been-a-hell-of-a-ride-john-mcenroe-on-learning-to-lose-and-being-the-rock-star-of-tennis-",
        "apiUrl": "https://content.guardianapis.com/sport/2022/jul/10/its-been-a-hell-of-a-ride-john-mcenroe-on-learning-to-lose-and-being-the-rock-star-of-tennis-",
        "fields": {
          "thumbnail": "https://media.guim.co.uk/c905bab2d4e814ea0d55fcc34a47ce7d6c107733/0_1673_4912_2947/500.jpg"
        },
        "isHosted": false,
        "pillarId": "pillar/sport",
        "pillarName": "Sport"
      },
      {
        "id": "culture/ng-interactive/2022/jul/10/simone-lia-how-to-be-a-winner-cartoon",
        "type": "interactive",
        "sectionId": "culture",
        "sectionName": "Culture",
        "webPublicationDate": "2022-07-10T07:00:30Z",
        "webTitle": "Simone Lia: How to be a winner – cartoon",
        "webUrl": "https://www.theguardian.com/culture/ng-interactive/2022/jul/10/simone-lia-how-to-be-a-winner-cartoon",
        "apiUrl": "https://content.guardianapis.com/culture/ng-interactive/2022/jul/10/simone-lia-how-to-be-a-winner-cartoon",
        "fields": {
          "thumbnail": "https://media.guim.co.uk/fccde621e340f5ca4e73b157bddab79fa1e4adf5/23_656_801_481/500.jpg"
        },
        "isHosted": false,
        "pillarId": "pillar/arts",
        "pillarName": "Arts"
      },
      {
        "id": "sport/2022/jul/10/so-long-sue-wimbledon-will-deeply-miss-barkers-iconic-warmth-and-skill",
        "type": "article",
        "sectionId": "sport",
        "sectionName": "Sport",
        "webPublicationDate": "2022-07-10T07:00:30Z",
        "webTitle": "So long, Sue: Wimbledon will deeply miss Barker’s iconic warmth and skill",
        "webUrl": "https://www.theguardian.com/sport/2022/jul/10/so-long-sue-wimbledon-will-deeply-miss-barkers-iconic-warmth-and-skill",
        "apiUrl": "https://content.guardianapis.com/sport/2022/jul/10/so-long-sue-wimbledon-will-deeply-miss-barkers-iconic-warmth-and-skill",
        "fields": {
          "thumbnail": "https://media.guim.co.uk/d497f73f8c245ec63b2ca1adbd3c1838043a2529/0_115_5437_3262/500.jpg"
        },
        "isHosted": false,
        "pillarId": "pillar/sport",
        "pillarName": "Sport"
      },
      {
        "id": "lifeandstyle/2022/jul/10/why-a-good-funeral-can-be-a-life-affirming-occasion",
        "type": "article",
        "sectionId": "lifeandstyle",
        "sectionName": "Life and style",
        "webPublicationDate": "2022-07-10T07:00:30Z",
        "webTitle": "Why a good funeral can be a life-affirming occasion | Eva Wiseman",
        "webUrl": "https://www.theguardian.com/lifeandstyle/2022/jul/10/why-a-good-funeral-can-be-a-life-affirming-occasion",
        "apiUrl": "https://content.guardianapis.com/lifeandstyle/2022/jul/10/why-a-good-funeral-can-be-a-life-affirming-occasion",
        "fields": {
          "thumbnail": "https://media.guim.co.uk/23e184f86ea8ff7cb48589f6453a14380ec8a8a9/0_568_8574_5147/500.jpg"
        },
        "isHosted": false,
        "pillarId": "pillar/lifestyle",
        "pillarName": "Lifestyle"
      },
      {
        "id": "commentisfree/2022/jul/10/brexit-legacy-is-just-the-start-of-incoming-pms-problems-as-cost-of-living-crisis-spirals",
        "type": "article",
        "sectionId": "commentisfree",
        "sectionName": "Opinion",
        "webPublicationDate": "2022-07-10T07:00:29Z",
        "webTitle": "Brexit legacy is just the start of incoming PM’s problems as cost of living crisis spirals",
        "webUrl": "https://www.theguardian.com/commentisfree/2022/jul/10/brexit-legacy-is-just-the-start-of-incoming-pms-problems-as-cost-of-living-crisis-spirals",
        "apiUrl": "https://content.guardianapis.com/commentisfree/2022/jul/10/brexit-legacy-is-just-the-start-of-incoming-pms-problems-as-cost-of-living-crisis-spirals",
        "fields": {
          "thumbnail": "https://media.guim.co.uk/d4e84813e82ae08102a5a2fa49feb556feb128f9/0_129_3878_2327/500.jpg"
        },
        "isHosted": false,
        "pillarId": "pillar/opinion",
        "pillarName": "Opinion"
      },
      {
        "id": "uk-news/2022/jul/10/teachers-and-nurses-ready-to-quit-over-delays-to-pay-rises-union-leaders-warn",
        "type": "article",
        "sectionId": "uk-news",
        "sectionName": "UK news",
        "webPublicationDate": "2022-07-10T07:00:29Z",
        "webTitle": "Teachers and nurses ‘ready to quit’ over delays to pay rises, union leaders warn",
        "webUrl": "https://www.theguardian.com/uk-news/2022/jul/10/teachers-and-nurses-ready-to-quit-over-delays-to-pay-rises-union-leaders-warn",
        "apiUrl": "https://content.guardianapis.com/uk-news/2022/jul/10/teachers-and-nurses-ready-to-quit-over-delays-to-pay-rises-union-leaders-warn",
        "fields": {
          "thumbnail": "https://media.guim.co.uk/fb7b11f88578fe2020dd96c225ed578efddbb93a/0_168_5048_3028/500.jpg"
        },
        "isHosted": false,
        "pillarId": "pillar/news",
        "pillarName": "News"
      },
      {
        "id": "film/2022/jul/10/brian-and-charles-review-a-very-british-robot-story-david-earl-chris-hayward",
        "type": "article",
        "sectionId": "film",
        "sectionName": "Film",
        "webPublicationDate": "2022-07-10T07:00:29Z",
        "webTitle": "Brian and Charles review – a very British robot story",
        "webUrl": "https://www.theguardian.com/film/2022/jul/10/brian-and-charles-review-a-very-british-robot-story-david-earl-chris-hayward",
        "apiUrl": "https://content.guardianapis.com/film/2022/jul/10/brian-and-charles-review-a-very-british-robot-story-david-earl-chris-hayward",
        "fields": {
          "thumbnail": "https://media.guim.co.uk/b5ff59c68ad0812088802cb40c8e9607d4b6c213/311_0_1429_858/500.jpg"
        },
        "isHosted": false,
        "pillarId": "pillar/arts",
        "pillarName": "Arts"
      },
      {
        "id": "football/blog/2022/jul/10/shes-aggressive-hungry-and-resilient-so-england-must-wary-of-ada-hegerberg",
        "type": "article",
        "sectionId": "football",
        "sectionName": "Football",
        "webPublicationDate": "2022-07-10T07:00:29Z",
        "webTitle": "She’s aggressive, hungry and resilient, so England must be wary of Ada Hegerberg | Anita Asante",
        "webUrl": "https://www.theguardian.com/football/blog/2022/jul/10/shes-aggressive-hungry-and-resilient-so-england-must-wary-of-ada-hegerberg",
        "apiUrl": "https://content.guardianapis.com/football/blog/2022/jul/10/shes-aggressive-hungry-and-resilient-so-england-must-wary-of-ada-hegerberg",
        "fields": {
          "thumbnail": "https://media.guim.co.uk/9b230cd6fb1193d7859b2c2590d159ebcfc8fa29/0_39_3872_2324/500.jpg"
        },
        "isHosted": false,
        "pillarId": "pillar/sport",
        "pillarName": "Sport"
      }
    ]
  }
}



app.use(express.json());

app.get('/news', (_req, res) => {
  res.send(JSON.stringify(fakeFeed));
});

app.listen(PORT);