# mbanq-hackathon-template

This <a href="https://vuejs.org" target="_blank">Vue.js</a> based template should help you to get started working with <a href="https://api-docs.cloud.mbanq.com" target="_blank">Mbanq API</a>.

This template uses the <a href="https://github.com/Mbanq/mbanq-api-client" target="_blank">mbanq-api-client</a> a `js` package we created for this hackathon. It gives you an easy way to use Mbanq API.

In order to use this template with your own core banking instance you have to
initialize the `Mbanq API Client` with your:
- `tenantId`
- `clientId`
- `clientSecret`

## How do I start?
- Clone the repo
- Run `npm install` (or `npm i`)
- Head over to <a href="https://labs.mbanq.io/hackathon" target="_blank">https://labs.mbanq.io/hackathon</a> and follow the steps to create your Core Banking Instance and the App for the API access
- Open `.env` in your favorite text editor and add your:
  - `tenantId`
  - `clientId`
  - `clientSecret`
- Start the frontend App with `npm start`
- Use following credentials to login:
  - `username`: *web1*, `password`: *password*
  - `username`: *web2*, `password`: *password*
## How do I start?

# Please note
> It only gives you a limited set of functionality - you can use it to get
sstarted. If you feel that you need more functionality, you can always fall back to the Mbanq API.

If you would like to use the <a href="https://github.com/Mbanq/mbanq-api-client" target="_blank">mbanq-api-client</a> in your own frontend project
you can install it with `npm`:

```
npm i -S Mbanq/mbanq-api-client
```

# Report a problem
Whenever you experience a problem with this template or the <a href="https://github.com/Mbanq/mbanq-api-client" target="_blank">mbanq-api-client</a>

<a href="https://github.com/Mbanq/mbanq-hackathon-template/issues/new" target="_blank">Create an Issue</a>
