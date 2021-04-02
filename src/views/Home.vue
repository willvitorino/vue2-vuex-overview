<template>
  <div class="home">
    {{ coinsList }}
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Home',

  data: () => ({
    dados: {}
  }),

  computed: {
    ...mapGetters({
      coinsList: 'getCoinsList'
    })
  },

  mounted () {
    this.getCurrentPrice()
  },

  methods: {
    ...mapActions(['getCurrentPrice'])
  }
}
</script>
