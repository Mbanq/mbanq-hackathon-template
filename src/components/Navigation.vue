<template>
  <div id="navigation">
    <b-navbar toggleable="lg" fixed="top" type="light" variant="light">
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

      <b-navbar-brand>
        <img src="~@/assets/logo.png" srcset="~@/assets/logo.png 2x, ~@/assets/logo.png 3x" class="align-middle" width="40px;" />
      </b-navbar-brand>

      <b-collapse is-nav id="nav_collapse">

        <b-navbar-nav>
          <b-nav-item href="https://github.com/mbanq/mbanq-api-client">API Client</b-nav-item>
          <b-nav-item href="https://api-docs.cloud.mbanq.com" target="_blank">API Documentation</b-nav-item>
        </b-navbar-nav>

      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'Navigation'
}
</script>

<style>
</style>
