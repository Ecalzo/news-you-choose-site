# News You Choose

Website for the news you choose project

News You Choose is a proof-of-concept web app built around a Machine Learning model for sentiment analysis of news articles.

![homepage](/readme_images/news_you_choose_screenshot.png)

## Table of Contents

- [Model](#model)
- [Development](#development)
- [Contributors](#contributors)

## Model

The codebase for exploratory notebooks, final model implementation and web scraper can be found in the [notnews/news-ai-choose](https://github.com/notnews/news-ai-choose) repository.

## Features

News You Choose is a full-stack application with some cool features:

1. [News Feed](https://news-you-choose-site.vercel.app/) - a curated collection of news articles, with the option to sort by sentiment and date
2. [Query](https://news-you-choose-site.vercel.app/query) - a direct route to the model to predict the sentiment of any body of text
3. [Stats](https://news-you-choose-site.vercel.app/stats) - live statistics on the sentiment of recent articles and recent voting trends
4. [About](https://news-you-choose-site.vercel.app/about) - detailed About page describing the moving parts that make up this site!

There is further elaboration on features (and gifs!) in the [slides for this project.](https://docs.google.com/presentation/d/1kJAXIrAp3trrJl32FkHzUV_cTcFotkUAixQRSQrRrss/edit?usp=sharing).

## Development

Requires Node.js

Copy the example env file and fill it out with your database credentials.

```shell
$ cp .env.local.example .env.local
# fill out the file w/ credentials
$ npm install
$ npm run dev
```

## Contributors

The News You Choose project team is part of the [Not News](https://github.com/notnews) group, consisting of:

- [Evan Calzolaio](https://github.com/Ecalzo) aka `Ecalzo`
- [Padmanabhan Pillai](https://github.com/pnabhans) aka `pnabhans`
- [Theodore Leung](https://github.com/theojl6) aka `theojl6`
