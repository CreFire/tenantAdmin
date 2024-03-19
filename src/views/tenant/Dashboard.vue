<template>
    <div class="tenant-dashboard">
      <!-- 个人信息展示 -->
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>个人信息</span>
        </div>
        <div>
          <p>姓名：{{ tenantInfo.name }}</p>
          <p>联系方式：{{ tenantInfo.contact }}</p>
        </div>
      </el-card>
  
      <!-- 租赁概览 -->
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>租赁概览</span>
        </div>
        <div>
          <p>房源地址：{{ leaseOverview.address }}</p>
          <p>租期：{{ leaseOverview.leaseTerm }}</p>
          <p>月租金：{{ leaseOverview.monthlyRent }}</p>
        </div>
      </el-card>
  
      <!-- 费用管理 -->
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>费用管理</span>
        </div>
        <div>
          <p>房租：{{ feeManagement.rent }} - 下次支付日期：{{ feeManagement.nextRentPaymentDate }}</p>
          <p>水电费：{{ feeManagement.utilities }} - 下次支付日期：{{ feeManagement.nextUtilitiesPaymentDate }}</p>
        </div>
      </el-card>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        tenantInfo: {
          name: '张三',
          contact: '13888888888'
        },
        leaseOverview: {
          address: '上海市浦东新区张江高科技园区',
          leaseTerm: '2022-01-01 至 2023-01-01',
          monthlyRent: '3000元'
        },
        feeManagement: {
          rent: '3000元',
          nextRentPaymentDate: '2023-02-01',
          utilities: '200元',
          nextUtilitiesPaymentDate: '2023-02-05'
        }
      };
    }
  };
  </script>
  
  <style scoped>
  .tenant-dashboard .box-card {
    margin-bottom: 20px;
  }
  </style>
  