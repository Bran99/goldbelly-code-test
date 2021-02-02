# Goldbelly Code Test

This project is created for Goldbelly, utilizing their url shortening API. The app is running on https://goldbelly-test.netlify.app/, however the access token provided is giving a 401 error.  To see the app in action, do the following:

1. Download the repo
2. Create a `.env.local` file in the main directory
3. Within the `.env.local` file, enter `REACT_APP_GB_ACCESS_TOKEN='paste_working_access_token_here'` replacing `paste_working_access_token_here` with a working access token.

To get a shortened url, simply type in the url into the top input. If you want you can provide an optional slug to be used for shortening. Click submit, and your shortened URL will appear on the table below. If at any point you wish to delete the shortened URL, simply click the delete button next to the url.

## Design

For the code test, I decided to use 3 main components:

1. NewUrl which handles the creation of new URLs
2. UrlsList which lists out all the previously created shortened URLs
3. UrlItem which is an individual item in the UrlsList

My initial intuition was to create 3 class based components and manage App level state by passing parameters through props. However, I decided to utilize the context API instead to avoid prop drilling, and to make the app more flexible to change down the road.
