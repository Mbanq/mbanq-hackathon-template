# mbanq-hackathon-template

This [Vue.js](https://vuejs.org) based template should help you to get started working with [Mbanq API](https://api-docs.cloud.mbanq.com).

This template uses the [Mbanq API Client](https://github.com/Mbanq/mbanq-api-client) a `js` package we created for this hackathon. It gives you an easy way to use Mbanq API.

In order to use this template with your own core banking instance you have to
initialize the `Mbanq API Client` with your:
- `tenantId`
- `clientId`
- `clientSecret`

## How do I start?
1. Fork the repo
2. Run `npm install` (or `npm i`)
3. Head over to https://labs.mbanq.io/hackathon and follow the steps to create your Core Banking Instance and the App for the API access
4. Open `.env` in your favorite text editor and add your:
  - `tenantId`
  - `clientId`
  - `clientSecret`
5. Start the frontend App with `npm start`
6. Use following credentials to login:
  - `username`: *web1*
  - `password`: *password* or
  - `username`: *web2*
  - `password`: *password*


# Please note
> It only gives you a limited set of functionality - you can use it to get
sstarted. If you feel that you need more functionality, you can always fall back to the Mbanq API.

If you would like to use the `Mbanq API Client` in your own frontend project
you can install it with `npm`:

```
npm i -S Mbanq/mbanq-api-client
```


