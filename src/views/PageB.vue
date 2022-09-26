<template>
  <div>
    <div>PageB</div>
    <div @click="back">click for back</div>
    <div @click="go('PageA')">click to PageA</div>
  </div>
</template>

<script>
export default {
  components: {},
  methods: {
    back(){
        this.$router.back()
    },
    go(path){
        this.$router.push({path})
    }
  },
  created() {
    console.log('PageB created')
  }
};
</script>

<style>
</style>
