<template>
  <b-container>
    <div id="navigation">
      <b-navbar toggleable="lg" fixed="top" type="light" variant="light">
        <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

        <b-navbar-brand>
          <img src="~@/assets/logo.png" srcset="~@/assets/logo.png 2x, ~@/assets/logo.png 3x" class="align-middle" width="40px;" />
        </b-navbar-brand>

        <b-collapse is-nav id="nav_collapse">

          <b-navbar-nav class="text-uppercase">
            <div v-for="(value, name) in api"
                 :key="name">
              <b-nav-item
                @click="callApi(name)">{{ name }}</b-nav-item>
            </div>
          </b-navbar-nav>
          <b-navbar-nav class="ml-auto">
            <b-button
              size="sm"
              class="my-2 my-sm-0"
              type="submit"
              @click="logout"
            >Logout</b-button>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
    <b-row>
      <b-col v-html="docs[method]">
      </b-col>
      <b-col>
        <pre class="ft-syntax-highlight" data-syntax="html" data-syntax-theme="one-dark">
          <code>
            {{ response }}
          </code>
        </pre>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: 'Navigation',
  data () {
    return {
      api: this.$api,
      method: 'Every menu link is a call to the API',
      response: 'Click on the link in the menu',
      clientId: '',
      docs: {
        user: `<h1>User documentation</h1>
        To get the data for currently logged in user, you have to call following function:
        <strong>this.$api.user()</strong>`,
        clients: `<h1>Clients documentation</h1>
        To get the data for currently logged in user, you have to call following function:
        <strong>this.$api.clients()</strong>`,
        accounts: `<h1>Accounts documentation</h1>
        In order to get the accounts for currently logged in user, you have to call the accounts function with the clientId:
        <strong>this.$api.accounts(clientId)`,
        transferTemplates: `Before you create a transfer you can check which accounts you can send money to, by calling <strong>this.$api.transferTemplates()</strong>`,
        createTransfer: `Once you know the accounts that are eligible for money transfers you can call <strong>this.$api.createTransfer(transfer)</strong>.
        The <strong>transfer</strong> object should contain following information:<br/>
        <code>
        const transfer = {
          fromOfficeId: 1,
          fromClientId: 11,
          fromAccountType: 2,
          fromAccountId: 11,
          toOfficeId: 1,
          toClientId: 12,
          toAccountType: 2,
          toAccountId: 12,
          dateFormat: 'dd MMMM yyyy',
          locale: 'en',
          transferDate: '4 September 2019',
          transferAmount: '1.00',
          transferDescription: 'Subject of the transfer'
        }
        </code>
        `,
        transactions: `savingsAccount transactions: <strong>this.$api.transactions(clientId)</strong>`
      }
    }
  },
  methods: {
    async callApi (method) {
      try {
        this.method = method
        const user = await this.$api.user()
        this.clientId = user.userId

        if (method === 'accounts') {
          this.response = await this.$api.accounts(this.clientId)
          return
        }
        if (method === 'createTransfer') {
          const templates = await this.$api.transferTemplates()

          console.log(templates)
          const { fromAccountOptions, toAccountOptions } = templates
          const transfer = {
            fromOfficeId: fromAccountOptions[0].officeId,
            fromClientId: fromAccountOptions[0].clientId,
            fromAccountType: fromAccountOptions[0].accountType.id,
            fromAccountId: fromAccountOptions[0].accountId,
            toOfficeId: toAccountOptions[0].officeId,
            toClientId: toAccountOptions[0].clientId,
            toAccountType: toAccountOptions[0].accountType.id,
            toAccountId: toAccountOptions[0].accountId,
            dateFormat: 'dd MMMM yyyy',
            locale: 'en',
            transferDate: '4 September 2019',
            transferAmount: '1.00',
            transferDescription: 'Subject of the transfer'
          }
          this.response = await this.$api.createTransfer(transfer)
          return
        }
        if (method === 'transactions') {
          this.response = await this.$api.transactions(this.clientId)
          return
        }
        this.response = await this.$api[method].call()
      } catch (error) {
        return console.log(error)
      }
    },
    logout () {
      window.localStorage.clear()
      this.$localStorage.authenticated = 'false'
    }
  },
  filters: {
    prettify (response) {
      return JSON.stringify(response, null, 4)
    }
  }
}
</script>

<style>
</style>
