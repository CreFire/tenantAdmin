<template>
  <div class="login-container">
    <el-form @submit.native.prevent="handleLogin">
      <el-form-item>
        <el-input v-model="loginForm.username" placeholder="Username"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input type="password" v-model="loginForm.password" placeholder="Password"></el-input>
      </el-form-item>
      <el-button type="primary" @click="handleLogin">Login</el-button>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loginForm: {
        username: '',
        password: ''
      }
    };
  },
  methods: {
    handleLogin() {
      // 调用后端登录API
      this.$axios.post('/api/login', this.loginForm).then(response => {
        const { data } = response;
        if (data.success) {
          // 存储用户信息和角色
          this.$store.commit('SET_USER', data.user);
          // 根据角色重定向到不同的管理页面
          if (data.user.user_type === 'tenant') {
            this.$router.push('/tenant/dashboard');
          } else if (data.user.user_type === 'landlord') {
            this.$router.push('/landlord/dashboard');
          }
        } else {
          this.$message.error(data.message);
        }
      }).catch(error => {
        console.error('Login error:', error);
      });
    }
  }
};
</script>
