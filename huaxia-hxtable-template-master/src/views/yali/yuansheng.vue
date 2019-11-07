<template>
  <div>
    <el-table
      border
      :data="tableParam.tableData"
      style="width: 100%"
    >
      <el-table-column
        type="index"
        label="编号"
        width="30"
        fixed
      > </el-table-column>
      <el-table-column
        prop="caseNo"
        label="案件编号"
        width="230"
        fixed
      > </el-table-column>
      <el-table-column
        prop="customerName"
        label="客户姓名"
        fixed
      > </el-table-column>
      <el-table-column
        prop="overdueSumBalance"
        label="逾期总额"
        width="100"
      > </el-table-column>
      <el-table-column
        prop="overdueDays"
        label="逾期天数"
      > </el-table-column>
      <el-table-column
        prop="promiseRepayDay"
        label="承诺日期"
      > </el-table-column>
      <el-table-column
        prop="followUpTime"
        label="跟进日期"
      > </el-table-column>
      <el-table-column
        prop="contractNo"
        label="合同编号"
        width="230"
      > </el-table-column>
      <el-table-column
        prop="putoutSum"
        label="到账金额"
        width="120"
      > </el-table-column>
      <el-table-column
        prop="normalBalance"
        label="剩余本金"
        width="100"
      > </el-table-column>
      <el-table-column
        prop="overdueBalance"
        label="逾期本金"
        width="100"
      > </el-table-column>
      <el-table-column
        prop="overdueSum"
        label="逾期次数"
      > </el-table-column>
      <el-table-column
        prop="overdueMaxDays"
        label="最长逾期天数"
        width="120"
      > </el-table-column>
      <el-table-column
        prop="previousOverdueDays"
        label="上次逾期天数"
        width="120"
      > </el-table-column>
      <el-table-column
        prop="alreadyPayTerm"
        label="已还期数"
      > </el-table-column>
      <el-table-column
        prop="repayDate"
        label="还款日"
      > </el-table-column>
      <el-table-column
        prop="signCustomer"
        label="签约客服"
      > </el-table-column>
      <el-table-column
        prop="userName"
        label="催收员"
      > </el-table-column>
      <el-table-column
        prop="previousReminderName"
        label="上一个还款提醒催收员"
        width="220"
      > </el-table-column>
      <el-table-column
        prop="followUpComment"
        label="催收备注"
      > </el-table-column>
      <el-table-column
        prop="businessTypeName"
        label="产品类型"
        width="120"
      > </el-table-column>
      <el-table-column
        prop="actionCode"
        label="行动代码"
      > </el-table-column>
      <el-table-column
        prop="processStatus"
        label="处理状态"
      > </el-table-column>
      <el-table-column
        prop="importMan"
        label="导入人"
      > </el-table-column>
      <el-table-column
        prop="importTime"
        label="导入日期"
        width="120"
      > </el-table-column>
    </el-table>
  </div>
</template>

<script>
import addRule from './json/new'
import { filterDialogView, filterSelectList } from '@/utils'
import { exportFrom } from '@/api/table.js'
// import { data } from './json/tabledata.js'
import { getTableData } from '@/api/getTable.js'

export default {
  data() {
    return {
      renderData:{},
      tableParam: {
        tableData: [],
        queryTables: {
          param: {
            pageNum: 1,
            pageSize: 10
          }
        }
      }

    }
  },
  created() {
    this.getSearch(this.tableParam.queryTables.param)
  },
  methods: {


    /* 根据条件查找 */
    getSearch(param) {
      //this.getSearch(this.tableParam.queryTables.param)
      getTableData(param).then(response => {
        if (response.code === '0000') {
          if (response.data.tabledata.length > 0) {
            const array = response.data.tabledata
            console.log(response.data.tabledata);
            // this.tableParam.tableData =array;
            this.renderData = array
            this.pagationData()
          } else {
            console.log(111);

          }
        }
      })
    },
    /* 递归减速 */
    pagationData() {
    if (this.renderData.length >= 40) {
      let arr = this.renderData.splice(0, 40);
      this.tableParam.tableData = [...this.tableParam.tableData, ...arr];
      console.log(arr);      
      setTimeout(() => {
        this.pagationData();
      }, 300);
    } else {
      this.tableParam.tableData = this.tableParam.tableData.concat(this.renderData);
    }
  }

  }
}
</script>

<style scoped>
</style>
