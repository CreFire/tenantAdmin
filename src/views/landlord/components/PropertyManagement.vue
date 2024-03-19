<template>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>房源管理</span>
        <el-button size="small" @click="addProperty">添加房源</el-button>
      </div>
      <el-table :data="properties" style="width: 100%">
        <el-table-column prop="address" label="地址" width="180"></el-table-column>
        <el-table-column prop="type" label="房型" width="100"></el-table-column>
        <el-table-column prop="rent" label="租金" width="100"></el-table-column>
        <el-table-column label="操作" width="180">
          <template slot-scope="scope">
            <el-button size="mini" @click="editProperty(scope.row)">编辑</el-button>
            <el-button size="mini" type="danger" @click="deleteProperty(scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
  </template>
  
  <script>
  export default {
    data() {
      return {
        properties: [
          { address: '上海市浦东新区张江高科技园区', type: '三室一厅', rent: '3000元' },
          // 更多假数据...
        ]
      };
    },
    methods: {
      addProperty() {
        // 添加房源的逻辑
      },
      editProperty(property) {
        // 编辑房源的逻辑
      },
      deleteProperty(property) {
        // 删除房源的逻辑
      }
    }
  };
  </script>
  