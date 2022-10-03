<template>
  <section id="login-form" class="form-signin w-100 m-auto">
    <form>
        
        <h1 class="h3 mb-3 fw-normal">Please sign in</h1>
        <small class="small"></small>

        <a href="#" @click="loginSwarm" class="w-100 btn btn-lg btn-primary d-flex align-items-center justify-content-center gap-2"><span>Sign in</span> <div class="swarm-img"></div></a>
    </form>

  </section>
</template>

<script>
export default {
  async asyncData({ route, $axios }) {
  },
  methods: {
    async loginSwarm() {
      console.log('before call');
      await this.$auth.loginWith('foursquare').catch(e => {
          console.log('hello')
      })    
    },
  },

}
</script>

<style>
    .swarm-img{
        aspect-ratio: 1/1;
        height: 34px;
        display: inline-block;
        background: white;
        -webkit-mask: url('@/assets/images/swarm.png') center/contain;
        mask: url('@/assets/images/swarm.png') center/contain;
        -webkit-mask-repeat: no-repeat;
        mask-repeat: no-repeat;
        
    }
body {
  background-color: #f5f5f5;
}

.form-signin {
  max-width: 330px;
  padding: 15px;
}

.form-signin .form-floating:focus-within {
  z-index: 2;
}

.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

.bd-placeholder-img {
        font-size: 1.125rem;
        text-anchor: middle;
        -webkit-user-select: none;
        -moz-user-select: none;
        user-select: none;
      }

      @media (min-width: 768px) {
        .bd-placeholder-img-lg {
          font-size: 3.5rem;
        }
      }

      .b-example-divider {
        height: 3rem;
        background-color: rgba(0, 0, 0, .1);
        border: solid rgba(0, 0, 0, .15);
        border-width: 1px 0;
        box-shadow: inset 0 .5em 1.5em rgba(0, 0, 0, .1), inset 0 .125em .5em rgba(0, 0, 0, .15);
      }

      .b-example-vr {
        flex-shrink: 0;
        width: 1.5rem;
        height: 100vh;
      }

      .bi {
        vertical-align: -.125em;
        fill: currentColor;
      }

      .nav-scroller {
        position: relative;
        z-index: 2;
        height: 2.75rem;
        overflow-y: hidden;
      }

      .nav-scroller .nav {
        display: flex;
        flex-wrap: nowrap;
        padding-bottom: 1rem;
        margin-top: -1px;
        overflow-x: auto;
        text-align: center;
        white-space: nowrap;
        -webkit-overflow-scrolling: touch;
      }
</style>