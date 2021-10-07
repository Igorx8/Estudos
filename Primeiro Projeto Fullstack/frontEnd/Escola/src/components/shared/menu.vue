<template>
  <nav>
      <ul>
          <li v-for="route in rotas" :key="route.name">
              <router-link :to="route.path ? route.path : '/'">
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
