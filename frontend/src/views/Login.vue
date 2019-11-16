<template lang="html">
  <section class="container h-100">
    <div class="row h-100 justify-content-center align-items-center">
      <div class="col wrapper-box">
        <img class="mx-auto d-block" src="../assets/logo-minddoc.svg"
             alt="Minddoclytics" title="Minddoclytics">
        <p class="wrapper-box__title text-center">Sign in</p>
        <div>
          <form class="form form-newaccount" id="loginForm">
            <div class="form-group">
              <label for="inputUser">E-mail</label>
              <input v-model="username" id="inputUser" type="text"
                     name="username" class="form-control" placeholder="Username" />
            </div>
            <div class="form-group">
              <label for="inputPassword">Password</label>
              <input v-model="password" id="inputPassword" type="password"
                     name="password" class="form-control" placeholder="Password" />
            </div>
            <input type="button" v-on:click="login()" class="btn minddoc-btn" id="submitLogin"
                   value="Login" />
            <transition name="fade">
              <span class="error-block error-message" v-show="error != null">{{ error }}</span>
            </transition>
            <hr>
            <router-link to="/home" class="text-link d-block text-right">No account yet?
            </router-link>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { storeProxy } from "@/store/index";

@Component
export default class Login extends Vue {
  username: string = "";
  password: string = "";
  error: string = "";

  navigate(path: string) {
    this.$router.push(path);
  }

  async login() {
    try {
      const payload = {
        username: this.username,
        password: this.password
      };
      await storeProxy.session.createSessionUser(payload);
      this.navigate("/");
    } catch (err) {
      if (err.response && [404, 401, 500].includes(err.response.status)) {
        this.error = "Invalid Credentials";
        (this.$refs.form as Vue & { reset: () => boolean }).reset();
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/form";
@import "../assets/scss/theme";
.minddoc-btn {
  width: 100%;
}
</style>
