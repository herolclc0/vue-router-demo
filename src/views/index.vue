<template>
  <div>
    <div>index</div>
    <div @click="go('pageA')">click to PageA</div>
    <div @click="go('pageB')">click to PageB</div>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  methods: {
    go(path){
        this.$router.push({path})
    }
  },
  created() {
    console.log('index created')
  }
};
</script>

<style>
</style>
