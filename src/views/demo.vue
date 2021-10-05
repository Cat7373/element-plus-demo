<template>
  <el-button type="primary">test btn</el-button>

  <el-table :data="tableList" v-loading="loading">
    <el-table-column prop="fidle1" label="fidle1"></el-table-column>
    <el-table-column prop="fidle2" label="fidle2"></el-table-column>
    <el-table-column prop="fidle3" label="fidle3"></el-table-column>
  </el-table>
</template>

<script>
export default {
  data() {
    return {
      loading: true,
      tableList: [{
        fidle1: 'r1f1',
        fidle2: 'r1f2',
        fidle3: 'r1f3',
      }, {
        fidle1: 'r2f1',
        fidle2: 'r2f2',
        fidle3: 'r2f3',
      }, {
        fidle1: 'r3f1',
        fidle2: 'r3f2',
        fidle3: 'r3f3',
      }],
    }
  },
}
</script>
