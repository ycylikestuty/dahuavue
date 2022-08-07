<template>
  <div>
    <el-form ref="form" :rules="rules" :model="form" class="login-box">
      <h3 class="login-title">欢迎登录</h3>
      <el-form-item label="账号" prop="name">
        <el-input type="text" placeholder="请输入用户名" v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" placeholder="请输入密码" v-model="form.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "Vedio",    // 暴露此页面组件 Login
  data() {
    return {
      form: {
        name: "",
        password: ""
      },
      rules: {
        name: [{ required: true, message: "请输入用户名", trigger: "blur" }],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }]
      }
    };
  },
  methods: {
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
  }
};
</script>

<style lang="scss" scoped>
.login-box {
  width: 350px;
  margin: 120px auto;
  border: 1px solid #dcdef6;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 30px #dcdef6;
}

.login-title {
  text-align: center;
}
</style>

