<template>
  <div>
    <div>PageA</div>
    <div @click="back">click for back</div>
    <div @click="go('PageB')">click to PageB</div>
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
    console.log('PageA created')
  }
};
</script>

<style>
</style>
