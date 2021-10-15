<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <a class="navbar-brand" href="#">Escola</a>
      <ul class="navbar-nav mr-auto">
          <li class="nav-item" v-for="route in rotas" :key="route.name">
              <router-link class="nav-link" :to="route.path ? route.path : '/'">
                  {{ route.titulo }}
              </router-link>
            </li>
      </ul>
  </nav>
</template>

<script>

export default {
    props:{
        rotas:{
            type: [Object, Array],
            required: false,
            default: []
        }
    }
}
</script>
