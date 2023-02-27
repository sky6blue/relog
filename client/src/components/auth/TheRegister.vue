<script lang="ts" setup>

import {reactive, ref} from "vue";
import {FormInstance, FormRules} from "element-plus";
import {AuthRegisterModel, AuthService} from "../../services/auth.service";

const model = reactive<AuthRegisterModel>({
  username: '',
  email: '',
  password: ''
});

const rules: FormRules = {
  username: [
    {
      required: true,
      type: 'string'
    }
  ],
  email: [
    {
      required: true,
      type: 'email',
      trigger: 'submit',
    }
  ],
  password: [
    {
      required: true,
      type: 'string',
    }
  ]
};

const regForm = ref<FormInstance | null>(null);

async function validateForm(): Promise<boolean> {
  const form = regForm.value;
  if (form) {
    const isValid = await form.validate();
    return isValid
  }
  return false;
}

async function submitHandler() {
  if (await validateForm()) {
    AuthService
  }
}

</script>

<template>
  <el-form ref="regForm" :model="model" :rules="rules" label-width="auto">
    <el-form-item label="Логин" prop="username">
      <el-input v-model="model.username" />
    </el-form-item>
    <el-form-item label="Email" prop="email">
      <el-input v-model="model.email" />
    </el-form-item>
    <el-form-item label="Пароль" prop="password">
      <el-input v-model="model.password" show-password type="password" />
    </el-form-item>
    <el-form-item>
      <div>
        <el-button @click="submitHandler">Сохранить</el-button>
      </div>
    </el-form-item>
  </el-form>
</template>

<style scoped>

</style>