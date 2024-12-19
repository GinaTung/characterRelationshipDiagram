<template>

  123
</template>
<script setup>
import axios from 'axios';

const getData = () => {
  axios.get('https://randomuser.me/api/')
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err);// 錯誤捕捉是有經過封裝的，所以要寫下方語法才會呈現正確回應內容
      console.log(err.response);// response語法是固定使用
    });
};
getData();
</script>
