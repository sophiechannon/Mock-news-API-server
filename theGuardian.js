const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors())

let fakeFeed = {
  "response": {
    "status": "ok",
    "userTier": "developer",
    "total": 2358262,
    "startIndex": 1,
    "pageSize": 10,
    "currentPage": 1,
    "pages": 235827,
    "orderBy": "newest",
    "results": [
      {
        "id": "football/live/2022/jul/08/spain-v-finland-womens-euro-2022-live",
        "type": "liveblog",
        "sectionId": "football",
        "sectionName": "Football",
        "webPublicationDate": "2022-07-08T15:50:45Z",
        "webTitle": "Spain v Finland: Women’s Euro 2022 – live!",
        "webUrl": "https://www.theguardian.com/football/live/2022/jul/08/spain-v-finland-womens-euro-2022-live",
        "apiUrl": "https://content.guardianapis.com/football/live/2022/jul/08/spain-v-finland-womens-euro-2022-live",
        "isHosted": false,
        "pillarId": "pillar/sport",
        "pillarName": "Sport"
      },
      {
        "id": "sport/live/2022/jul/08/wimbledon-2022-men-singles-semi-final-novak-djokovic-v-cameron-norrie-live",
        "type": "liveblog",
        "sectionId": "sport",
        "sectionName": "Sport",
        "webPublicationDate": "2022-07-08T15:50:05Z",
        "webTitle": "Wimbledon 2022 men’s singles semi-final: Novak Djokovic v Cameron Norrie – live!",
        "webUrl": "https://www.theguardian.com/sport/live/2022/jul/08/wimbledon-2022-men-singles-semi-final-novak-djokovic-v-cameron-norrie-live",
        "apiUrl": "https://content.guardianapis.com/sport/live/2022/jul/08/wimbledon-2022-men-singles-semi-final-novak-djokovic-v-cameron-norrie-live",
        "isHosted": false,
        "pillarId": "pillar/sport",
        "pillarName": "Sport"
      },
      {
        "id": "world/live/2022/jul/08/russia-ukraine-war-live-news-putin-dares-west-to-defeat-russia-on-battlefield-ukraine-will-not-be-broken-zelenskiy-says",
        "type": "liveblog",
        "sectionId": "world",
        "sectionName": "World news",
        "webPublicationDate": "2022-07-08T15:48:23Z",
        "webTitle": "Russia-Ukraine war: Kremlin warns it is using only ‘small portion’ of potential; fears of Sievierodonetsk humanitarian disaster – live",
        "webUrl": "https://www.theguardian.com/world/live/2022/jul/08/russia-ukraine-war-live-news-putin-dares-west-to-defeat-russia-on-battlefield-ukraine-will-not-be-broken-zelenskiy-says",
        "apiUrl": "https://content.guardianapis.com/world/live/2022/jul/08/russia-ukraine-war-live-news-putin-dares-west-to-defeat-russia-on-battlefield-ukraine-will-not-be-broken-zelenskiy-says",
        "isHosted": false,
        "pillarId": "pillar/news",
        "pillarName": "News"
      },
      {
        "id": "sport/live/2022/jul/08/tour-de-france-2022-stage-seven-to-la-planche-des-belles-filles-live",
        "type": "liveblog",
        "sectionId": "sport",
        "sectionName": "Sport",
        "webPublicationDate": "2022-07-08T15:46:38Z",
        "webTitle": "Tour de France: Tadej Pogacar wins stage seven to La Super Planche des Belles Filles – as it happened",
        "webUrl": "https://www.theguardian.com/sport/live/2022/jul/08/tour-de-france-2022-stage-seven-to-la-planche-des-belles-filles-live",
        "apiUrl": "https://content.guardianapis.com/sport/live/2022/jul/08/tour-de-france-2022-stage-seven-to-la-planche-des-belles-filles-live",
        "isHosted": false,
        "pillarId": "pillar/sport",
        "pillarName": "Sport"
      },
      {
        "id": "sport/2022/jul/08/pogacar-pounces-to-win-stage-seven-to-la-super-planche-des-belles-filles",
        "type": "article",
        "sectionId": "sport",
        "sectionName": "Sport",
        "webPublicationDate": "2022-07-08T15:45:07Z",
        "webTitle": "Pogacar pounces to win stage seven to La Super Planche des Belles Filles",
        "webUrl": "https://www.theguardian.com/sport/2022/jul/08/pogacar-pounces-to-win-stage-seven-to-la-super-planche-des-belles-filles",
        "apiUrl": "https://content.guardianapis.com/sport/2022/jul/08/pogacar-pounces-to-win-stage-seven-to-la-super-planche-des-belles-filles",
        "isHosted": false,
        "pillarId": "pillar/sport",
        "pillarName": "Sport"
      },
      {
        "id": "politics/live/2022/jul/08/boris-johnson-resigns-conservatives-next-leader-uk-politics-live-latest",
        "type": "liveblog",
        "sectionId": "politics",
        "sectionName": "Politics",
        "webPublicationDate": "2022-07-08T15:37:51Z",
        "webTitle": "Rishi Sunak launches bid to replace Boris Johnson as Conservative leader – live ",
        "webUrl": "https://www.theguardian.com/politics/live/2022/jul/08/boris-johnson-resigns-conservatives-next-leader-uk-politics-live-latest",
        "apiUrl": "https://content.guardianapis.com/politics/live/2022/jul/08/boris-johnson-resigns-conservatives-next-leader-uk-politics-live-latest",
        "isHosted": false,
        "pillarId": "pillar/news",
        "pillarName": "News"
      },
      {
        "id": "uk-news/2022/jul/08/mark-rowley-appointed-new-commissioner-of-the-metropolitan-police",
        "type": "article",
        "sectionId": "uk-news",
        "sectionName": "UK news",
        "webPublicationDate": "2022-07-08T15:35:34Z",
        "webTitle": "Mark Rowley appointed new commissioner of Met police",
        "webUrl": "https://www.theguardian.com/uk-news/2022/jul/08/mark-rowley-appointed-new-commissioner-of-the-metropolitan-police",
        "apiUrl": "https://content.guardianapis.com/uk-news/2022/jul/08/mark-rowley-appointed-new-commissioner-of-the-metropolitan-police",
        "isHosted": false,
        "pillarId": "pillar/news",
        "pillarName": "News"
      },
      {
        "id": "us-news/live/2022/jul/08/biden-abortion-executive-order-access-us-politics-latest-news",
        "type": "liveblog",
        "sectionId": "us-news",
        "sectionName": "US news",
        "webPublicationDate": "2022-07-08T15:28:50Z",
        "webTitle": "Biden to sign executive order to protect abortion access for millions in US – live",
        "webUrl": "https://www.theguardian.com/us-news/live/2022/jul/08/biden-abortion-executive-order-access-us-politics-latest-news",
        "apiUrl": "https://content.guardianapis.com/us-news/live/2022/jul/08/biden-abortion-executive-order-access-us-politics-latest-news",
        "isHosted": false,
        "pillarId": "pillar/news",
        "pillarName": "News"
      },
      {
        "id": "commentisfree/2022/jul/08/boris-johnson-lies-brexit-exit",
        "type": "article",
        "sectionId": "commentisfree",
        "sectionName": "Opinion",
        "webPublicationDate": "2022-07-08T15:27:07Z",
        "webTitle": "Everything tainted by Johnson’s lies needs to be undone. That includes his Brexit | Jonathan Freedland",
        "webUrl": "https://www.theguardian.com/commentisfree/2022/jul/08/boris-johnson-lies-brexit-exit",
        "apiUrl": "https://content.guardianapis.com/commentisfree/2022/jul/08/boris-johnson-lies-brexit-exit",
        "isHosted": false,
        "pillarId": "pillar/opinion",
        "pillarName": "Opinion"
      },
      {
        "id": "artanddesign/2022/jul/08/the-johnsons-downing-street-refurb-a-lurid-hellscape-lined-with-gilded-tat",
        "type": "article",
        "sectionId": "artanddesign",
        "sectionName": "Art and design",
        "webPublicationDate": "2022-07-08T15:22:34Z",
        "webTitle": "‘Trump-like madness!’– our critic’s verdict on Boris Johnson’s £200,000 No 11 refurb",
        "webUrl": "https://www.theguardian.com/artanddesign/2022/jul/08/the-johnsons-downing-street-refurb-a-lurid-hellscape-lined-with-gilded-tat",
        "apiUrl": "https://content.guardianapis.com/artanddesign/2022/jul/08/the-johnsons-downing-street-refurb-a-lurid-hellscape-lined-with-gilded-tat",
        "isHosted": false,
        "pillarId": "pillar/arts",
        "pillarName": "Arts"
      }
    ]
  }
}


app.use(express.json());

app.get('/news', (_req, res) => {
  res.send(JSON.stringify(fakeFeed));
});

app.listen(PORT);