## General Description

This is a weather app running on Next.js v13 with TailwindCSS for styling. The purpose of this app is to provide current weather as well as forecast for the requested coordinates.

## Features and Capabilities

- Obtains weather information for requested coordinates by requesting data from the National Weather Service API that can be found at https://api.weather.gov

- Currently provides a 2-day forecast for the requested location, but can be changed. (See Components Section)

- Provides, temperature, description of the current weather conditions, wind speed, humidity, precipitation and dewpoint

## Components

index.js - Main landing page of the app. Contains search form, user input, background styling and functions for data fetching and input parsing

Weather.js - Handles presentation of data received by the NWS API. This is where the format of the weather card is located

Spinner.js - Handles presentation of spinning icon while a request is being made

## Usage

1. Input desired geographic coordinates in the search bar. Note: Coordinates should be in WGS 84 or EPSG 4326 format per https://weather-gov.github.io/api/general-faqs.

2. Click the search button on the right of the search field.

3. You will likely see a very brief spinning icon while the request is being processed.

4. You should see the 2-day forecast returned.

## API Documentation

Additional documentation for the National Weather Service API can be found at: https://www.weather.gov/documentation/services-web-api

## TailwindCSS

Documentation for TailwindCSS can be found at: https://tailwindcss.com/docs/

## Axios

Documentation for Axios can be found at: https://axios-http.com/docs/intro

## Boilerplate Next.JS Markdown

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
