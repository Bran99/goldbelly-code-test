# Goldbelly Code Test

This project is created for Goldbelly, utilizing their url shortening API. You can see the app running on https://goldbelly-test.netlify.app/.

To get a shortened url, simply type in the url into the top input. If you want you can provide an optional slug to be used for shortening. Click submit, and your shortened URL will appear on the table below. If at any point you wish to delete the shortened URL, simply click the delete button next to the url.

## Design

For the code test, I decided to use 3 main components:

1. NewUrl which handles the creation of new URLs
2. UrlsList which lists out all the previously created shortened URLs
3. UrlItem which is an individual item in the UrlsList

My initial intuition was to create 3 class based components and manage App level state by passing parameters through props. However, I decided to utilize the context API instead to avoid prop drilling, and to make the app more flexible to change down the road.
