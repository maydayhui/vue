<template>
  <div class="cmt-container">
  <h3>发表评论</h3>    
  <hr/>

  <textarea placeholder="输入评论（最多120字）" maxlength="120" v-model="msg"></textarea>
  <mt-button type="primary" size="large" @click="postcomment">发表评论</mt-button>
  <div class="cmt-list">
    <div class="cmt-item" v-for="(item, i ) in comments" :key="i">
      <div class="cmt-title">
        第{{ i + 1 }}楼 &nbsp;&nbsp; 用户:{{ item.user_name }}&nbsp;&nbsp; 发表时间：{{ item.add_time | dataFormat}}
      </div>
      <div class="cmt-body">
         {{ item.content == "undefined" ? "此人很懒 什么都没说": item.content}}
      </div>
     
    </div>
  </div>
  <mt-button type="danger" size="large" plain @click="getMore">加载更多</mt-button>
  </div>
</template>
<script>
 import { Toast } from "mint-ui";
export default {
  data(){
    return {
      pageIndex:1,
      comments: [],
      msg:''
    }
  },
  props:["id"],
  created(){this.getComments()},
  methods:{
    getComments(){
      this.$http.get("api/getcomments/" + this.id + "?pageindex=" + this.pageIndex).then(result=>{
        if(result.body.status == 0){
          this.comments = this.comments.concat(result.body.message)
        }else{
          Toast("获取评论失败")
        }
      })
    },
    getMore(){
    this.pageIndex++;
    this.getComments()

  },
  postcomment(){
    this.$http.post("api/postcomment/" + this.$route.params.id, {
      content: this.msg.trim()
    }).then(result=>{
      console.log(result)
      if(result.body.status == 0){
          var cmt = {
              user_name: "匿名用户",
              add_time: Date.now(),
              content: this.msg.trim()
            };
            this.comments.unshift(cmt);
            this.msg = "";
      }else{
        Toast("添加评论失败")
      }
    })
  }
  },
  
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