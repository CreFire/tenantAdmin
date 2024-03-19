<template>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>租赁管理</span>
      </div>
      <el-table :data="leases" style="width: 100%">
        <el-table-column prop="tenant" label="租客" width="180"></el-table-column>
        <el-table-column prop="leaseTerm" label="租期" width="180"></el-table-column>
        <el-table-column prop="rent" label="月租金" width="100"></el-table-column>
        <el-table-column label="操作" width="180">
          <template slot-scope="scope">
            <el-button size="mini" @click="viewLease(scope.row)">查看详情</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
  </template>
  
  <script>
  export default {
    data() {
      return {
        leases: [
          { tenant: '张三', leaseTerm: '2022-01-01 至 2023-01-01', rent: '3000元' },
          // 更多假数据...
        ]
      };
    },
    methods: {
      viewLease(lease) {
        // 在这里可以打开一个模态框来显示租赁合同的详细信息
        // 例如使用Element UI的Dialog组件
        this.$alert(JSON.stringify(lease, null, 2), '租赁详情', {
          confirmButtonText: '确定',
          callback: action => {
            // 处理回调，例如关闭模态框
          }
        });
      }
    }
  };
  </script>
  