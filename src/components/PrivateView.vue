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
      docs: {
        user: `<h1>User documentation</h1>
        To get the data for currently logged in user, you have to call following function:
        <strong>this.$api.user()</strong>`,
        clients: `<h1>Clients documentation</h1>
        To get the data for currently logged in user, you have to call following function:
        <strong>this.$api.clients()</strong>`,
        accounts: `<h1>Accounts documentation</h1>
        In order to get the accounts for currently logged in user, you have to call the accounts function with the clientId:
        <strong>this.$api.accounts(11)`,
        transfer: 'Transfer documentation'
      }
    }
  },
  methods: {
    async callApi (method) {
      this.method = method
      if (method === 'accounts') {
        this.response = await this.$api.accounts(11)
        return
      }
      this.response = await this.$api[method].call()
    },
    logout () {
      window.localStorage.clear()
      this.$localStorage.authenticated = false
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
