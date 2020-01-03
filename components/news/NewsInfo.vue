<template>
  <div>
     {{ info}}
  </div>
</template>
<script>
export default {
  data(){
    return {
      id: this.$route.params.id,
      info:null
    }
  },
  created(){this.getNewsInfo()},
  methods:{
    getNewsInfo(){
      this.$http.get('http://www.liulongbin.top:3005/api/getnew/'+ this.id).then(result=>{
          if(result.body.status == 0){
              this.info = result.body.message
          }else{
            Toast("获取新闻详情失败")
          }
        })
    }
  }

}
</script>

<style  lang="scss" scoped>

</style>