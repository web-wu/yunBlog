<template>
    <div id="containner">
        <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>发表文章</el-breadcrumb-item>
        </el-breadcrumb>
        <el-alert title="默认设置内容的第一张图片为文章的缩略图" type="success" show-icon :closable="false" center></el-alert>
        <el-form ref="articleForm" :model="articleDate" label-position="top">
            <el-form-item label="标题:">
                <el-input v-model="articleDate.title" placeholder="请输入标题"></el-input>
            </el-form-item>
            <el-form-item label="作者:">
                <el-input v-model="articleDate.author" placeholder="请输入作者"></el-input>
            </el-form-item>
            <el-form-item label="标签:">
                <el-checkbox-group v-model="articleDate.tag">
                    <el-checkbox :label="v" border size="mini" v-for="(v, i) in tagList" :key="i"></el-checkbox>
                </el-checkbox-group>
            </el-form-item>
            <el-form-item label="关键字:">
                <el-input v-model="articleDate.keyword" placeholder="请输入文章关键字"></el-input>
            </el-form-item>
            <el-form-item label="描述:">
                <el-input v-model="articleDate.describe" placeholder="请输入文章描述"></el-input>
            </el-form-item>
            <el-form-item label="内容:">
                <quill-editor v-model="articleDate.content" :options="editorOption" ref="quillEditor"></quill-editor>
                <el-upload
                    id="chatu_upload"
                    name="img"
                    action="http://127.0.0.1/admin/uploadImg"
                    list-type="picture"
                    :on-success="handleUploadSuccess"
                    >
                    <el-button size="small" type="primary" id="chatu_btn">点击上传</el-button>
                </el-upload>
                <input type="text" hidden name="thumb" value="editorOption.thumb">
            </el-form-item>
            <el-button type="primary" @click="addArticle">确认添加</el-button>
        </el-form>
    </div>
</template>

<script>
const toolbarOptions = [
  ['bold', 'italic', 'underline', 'strike'], // toggled buttons
  ['blockquote', 'code-block'],

  [{ header: 1 }, { header: 2 }], // custom button values
  [{ list: 'ordered' }, { list: 'bullet' }],
  [{ script: 'sub' }, { script: 'super' }], // superscript/subscript
  [{ indent: '-1' }, { indent: '+1' }], // outdent/indent
  [{ direction: 'rtl' }], // text direction

  [{ size: ['small', false, 'large', 'huge'] }], // custom dropdown
  [{ header: [1, 2, 3, 4, 5, 6, false] }],

  [{ color: [] }, { background: [] }], // dropdown with defaults from theme
  [{ font: [] }],
  [{ align: [] }],
  ['link', 'image', 'video'],
  ['clean'] // remove formatting button
]
export default {
  data () {
    return {
    // 配置富文本图片调用element-ui图片上传组件按钮  上传图片
      editorOption: {
        modules: {
          toolbar: {
            container: toolbarOptions, // 工具栏
            handlers: {
              image: function (value) {
                if (value) {
                  document.getElementById('chatu_btn').click()
                } else {
                  this.quill.format('image', false)
                }
              }
            }
          }
        }
      },
      articleDate: {
        title: '',
        author: '',
        content: '',
        tag: [],
        status: '1',
        keyword: '',
        describe: '',
        thumb: ''
      },
      tagList: ['vueRouter', 'vue', 'javascript', 'ajax', 'nodejs', 'mySql', 'mongoDB', 'vuex', 'react', 'jQuery', 'php', '登录/注册']
    }
  },
  methods: {
    async addArticle () {
      if (this.articleDate.content.length === 0) return this.$message.error('请输入文章内容!')
      const { data } = await this.$http.post('/admin/addArticle', this.articleDate)
      if (data.msg !== 200) return this.$messags.error('添加文章失败!')
      this.$message.success('添加文章成功!')
      this.$router.push('/articleList')
    },
    handleUploadSuccess (res) {
      console.log(res)
      // 获取富文本组件实例
      const quill = this.$refs.QuillEditor.quill
      // 如果上传成功
      if (res) {
        // 获取光标所在位置
        const length = quill.getSelection().index
        // 插入图片，res为服务器返回的图片链接地址
        quill.insertEmbed(length, 'image', res)
        // 调整光标到最后
        quill.setSelection(length + 1)
      } else {
        // 提示信息，需引入Message
        this.$message.error('图片插入失败')
      }
    }
  }
}
</script>

<style lang="less" scoped>
#containner{
    overflow: hidden;
    width: 11.979167rem;
    margin: 0 auto;
}
.el-breadcrumb{
    margin-bottom: 0.208333rem;
    margin-top: 0.208333rem;
}
.el-alert{
    margin-bottom: 0.15625rem;
}
button{
    margin-bottom: 0.520833rem;
}
#chatu_upload{
    display: none;
}
</style>
