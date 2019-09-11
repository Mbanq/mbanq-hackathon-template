<template>
  <div id="app">
    <b-container>
      <Navigation />
      <div id="content">
        <PublicView v-if="!authenticated" />
        <PrivateView v-else />
      </div>
    </b-container>
  </div>
</template>

<script>
// https://vuejs.org/v2/guide/routing.html
import Navigation from '@/components/Navigation.vue'
import PublicView from '@/components/PublicView.vue'
import PrivateView from '@/components/PrivateView.vue'

export default {
  name: 'app',
  components: {
    Navigation,
    PublicView,
    PrivateView
  },
  computed: {
    authenticated () {
      return this.$localStorage.authenticated === 'true'
    }
  },
  created () {
  //  const recipient = {
  //    fullName: 'Bartek Widlak',
  //    from: {
  //      accountNumber: '000000011'
  //    },
  //    to: {
  //      sortCode: '1234567',
  //      accountNumber: '876543210'
  //    },
  //    currency: 'USD',
  //    subject: 'Here is your dirty money, Walter',
  //    amount: 666.66
  //  }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#content {
  padding-top: 100px;
}
</style>
