<template>
  <div class="cmt-container">
  <h3>发表评论</h3>    
  <hr/>

  <textarea placeholder="输入评论（最多120字）" maxlength="120"></textarea>
  <mt-button type="primary" size="large">发表评论</mt-button>
  <div class="cmt-list">
    <div class="cmt-item">
      <div class="cmt-title">
        第1楼 &nbsp;&nbsp; 用户:匿名&nbsp;&nbsp; 发表时间：2020-01-01 05:05:05
      </div>
      <div class="cmt-body">
         天下之大 无奇不有
      </div>
     
    </div>
  </div>
  <mt-button type="danger" size="large">加载更多</mt-button>
  </div>
</template>
<script>
 import { Toast } from "mint-ui";
export default {
  data(){
    return {
      pageIndex:1,
      comments: []
    }
  },
  props:["id"],
  created(){this.getComments()},
  methods:{
    getComments(){
      this.$http.get("api/getcomments/" + this.id + "?pageindex=" + this.pageIndex).then(result=>{
        if(result.body.status == 0){
          this.comments = result.body.message
        }else{
          Toast("获取评论失败")
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .cmt-container {
  h3 {
    font-size: 18px;
  }
  textarea {
    font-size: 14px;
    height: 85px;
    margin: 0;
  }

  .cmt-list {
    margin: 5px 0;
    .cmt-item {
      font-size: 13px;
      .cmt-title {
        line-height: 30px;
        background-color: #ccc;
      }
      .cmt-body {
        line-height: 35px;
        text-indent: 2em;
      }
    }
  }
}
</style>