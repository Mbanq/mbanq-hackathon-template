<template>
  <div>
    <b-row class="text-center">
      <b-col>
        <h1>Welcome to the Mbanq challenge</h1>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <img alt="F10 Hackathon: Singapore" style="width: 500px;" src="../assets/hackathon.png">
      </b-col>
      <b-col>
        <form @submit.prevent="login">
          <b-form-group
            id="username-group"
            label="Username:"
            label-for="username"
            description="Please provide your username"
          >
            <b-form-input
              id="username"
              v-model="credentials.username"
              type="text"
              required
              placeholder="Enter username"
            ></b-form-input>
          </b-form-group>

          <b-form-group
            id="password"
            label="Your password:"
            label-for="password"
            description="Please provide your username"
          >
            <b-form-input
              id="password"
              v-model="credentials.password"
              required
              placeholder="Enter your password"
            ></b-form-input>
          </b-form-group>

          <b-button type="reset" variant="danger">Reset</b-button>
          &nbsp;
          <b-button type="submit" variant="primary">Submit</b-button>
        </form>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: 'PublicView',
  data () {
    return {
      credentials: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    async login (evt) {
      try {
        await this.$mbanq.auth(this.credentials)
        this.$localStorage.authenticated = true
      } catch (error) {
        return console.log(error)
      }
    }
  }
}
</script>

<style>
</style>
