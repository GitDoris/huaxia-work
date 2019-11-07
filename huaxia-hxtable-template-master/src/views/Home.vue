<template>
  <div>
    <hx-table ref="hxtableComponent" 
              :tableItems="tableParam" 
              @btn-click="method"
              @selectChange="selectChange" 
              @operate-column-click="columnClick"
              @getSelectionsMore="getSelectionsMore">
      <template slot="toolBtns">
        <el-button
          type="text"
          size="mini"
          @click="toolBtnClick('add')"
          style="margin-right: 10px">新增
        </el-button>
      </template>
      
      <!-- <template slot='allBtns'>
        <el-button size="mini" type="primary" @click="handleDownload">
          导出（前端方式）
        </el-button>
        <el-button size="mini" type="success" @click="exportTable">
          导出（后台接口）
        </el-button>
      </template> -->
       
    </hx-table>
    <!--新增规则-->
    <!-- <dialog-table
      ref="dialogTable"
      :dialogTableParams="dialogTableParam"
      @resetDialog="resetDialog"
      @dialogFormParam="submit"
      @selectChange="dialogSelectChange"
    >
    </dialog-table> -->
  </div>
</template>

<script>
  import HxTable from '@/components/huaxia/HxTable/queryTableCollection'
  // import DialogTable from '@/components/huaxia/HxTable/dialogTable'
  import searchLabel from './json/searchLabel'
  import tableLabel from './json/tableLabel'
  // import addRule from './json/new'
  // import {filterDialogView, filterSelectList} from '@/utils'
  import cloneDeep from 'lodash/cloneDeep'
  // import { exportFrom } from '@/api/table.js'
  import { data } from './json/tabledata.js'

  export default {
    components: {
      HxTable, 
      // DialogTable
    },
    data() {
      return {
        // dialogTableParam: {},
        // addRule: cloneDeep(addRule),
        // viewRule: cloneDeep(addRule),
        tableParam: {
          isShoweds: { // 是否显示集合
            pageIsShow: true, // 分页是否显示
            tableIsShow: 1, // 表格是否显示: 1-显示表格; 0-没有符合搜索条件的单子; 2-队列中没有单子
            isSearch: true, // 搜索框是否显示
            showToolTitle: true,  //是否显示路由中定义的title
            // isRadio:true,     //单选
            tableIsAllChange: true,  //多选
          },
          pageHelpers: {
            pageSizes: [10, 20, 30, 40, 50, 100], // 每页条数下拉选项
            pageSize: 10, // 每页条数
            totalSum: 10, // 表格数据总数
            currentPage: 1 // 默认当前页
          },
          tableLables: cloneDeep(tableLabel),
          tableData: [],
          queryTables: {
            queryParas: cloneDeep(searchLabel),
            param: {
              pageNum: 1,
              pageSize: 10
            }
          }
        },
        handleDownloadCode:[],
        handleDownloadLable:[],
        responseData:data
      }
    },
    created() {
      this.getSearch(this.tableParam.queryTables.param)
    },
    methods: {
      // queryTable中select的变化
      selectChange(value, currLabel) {
        console.log(value, currLabel)
      },
      /* 弹框中的select变化 */
      dialogSelectChange(value, currLabel) {
        console.log(value, currLabel)
      },
      /* 操作栏点击 */
      columnClick(operateType, param) {
        console.log('操作栏点击')
      },
      /* 多选 */
			getSelectionsMore(val) {
				this.selectResult = val;
				console.log(this.selectResult);
			}, 
      method(key, data) {
        switch (key) {
          case 'search': // 搜索事件
            this.getSearch(data)
            break

          case 'reSet': // 检索重置
            this.tableParam.pageHelpers = {
              pageSizes: [10, 20, 30, 40, 50, 100], // 每页条数下拉选项
              pageSize: 10, // 每页条数
              totalSum: 10, // 表格数据总数
              currentPage: 1 // 默认当前页
            }
            this.tableParam.queryTables.param = {
              pageNum: 1,
              pageSize: 10
            }
            this.getSearch(this.tableParam.queryTables.param)
            break

          case 'current_change': // 当前页数修改
            this.tableParam.pageHelpers.currentPage = data
            this.tableParam.queryTables.param.pageNum = this.tableParam.pageHelpers.currentPage
            this.getSearch(this.tableParam.queryTables.param)
            break

          case 'size_change': // 每页数据条数修改
            this.tableParam.pageHelpers.pageSize = data
            this.tableParam.queryTables.param.pageSize = this.tableParam.pageHelpers.pageSize
            this.getSearch(this.tableParam.queryTables.param)
            break
          case 'policyNo':// 点击分案编号
            this.viewRule.title = '查看分案规则'
            this.viewRule.formCells = filterDialogView(this.viewRule.formCells, data)
            this.toolBtnClick('view')
            break
        }
      },
      /* 操作 */
      toolBtnClick(type) {
        this[`${type}Rule`].type = type
        this.dialogTableParam = this[`${type}Rule`]
        this.$refs.dialogTable.dialogFormVisible = true
      },
      resetDialog() {
        this.dialogTableParam = {}
        this.addRule = cloneDeep(addRule)
      },
      /* 弹出框提交 */
      submit(type, params) {
        console.log(type, params)
      },
      /* 根据条件查找 */
      getSearch(param) {
        if (data.code === '0000') {
          if (data.data.tableData.length > 0) {
            const array = data.data.tableData
            this.tableParam.isShoweds.tableIsShow = 1
            this.tableParam.isShoweds.pageIsShow = true
            this.tableParam.tableData = array
            this.tableParam.pageHelpers.totalSum = data.data.total

            // 导出需要的
              for(let i=0;i<this.tableParam.tableLables.length;i++){
                const codeList = this.tableParam.tableLables[i].code
                const lableList = this.tableParam.tableLables[i].lable
                this.handleDownloadCode.push(codeList)
                this.handleDownloadLable.push(lableList)
              }
          } else {
            this.tableParam.isShoweds.tableIsShow = 2
            this.tableParam.isShoweds.pageIsShow = false
          }
        }
      },
      // 导出
      // handleDownload() {
      //     require.ensure([], () => {
      //       const { export_json_to_excel } = require('@/vendor/Export2Excel')
      //       const tHeader = this.handleDownloadLable
      //       const filterVal = this.handleDownloadCode
      //       const list = this.tableParam.tableData
      //       const data = this.formatJson(filterVal, list)
      //       export_json_to_excel(tHeader, data, 'table数据')
      //       this.downloadLoading = false
      //     })
      // },
      // formatJson(filterVal, jsonData) {
      //   return jsonData.map(v => filterVal.map(j => v[j]))
      // },

      // 后台接口导出
      // exportTable(){
      //   exportFrom().then(response=>{
      //     const content = response
      //     const blob = new Blob([content])
      //     const fileName = '导出信息.xlsx'
      //     if ('download' in document.createElement('a')) { // 非IE下载（IE，Safari，Opera不支持a标签的downlod属性）
      //       const elink = document.createElement('a')
      //       elink.download = fileName
      //       elink.style.display = 'none'
      //       elink.href = URL.createObjectURL(blob)    //createObjectURL参数只能是file对象或者Bold对象
      //       document.body.appendChild(elink)
      //       elink.click()
      //       URL.revokeObjectURL(elink.href) // 释放URL 对象
      //       document.body.removeChild(elink)
      //     } else { // IE10+下载
      //       navigator.msSaveBlob(blob, fileName)
      //     } 
      //   })
      // }
    }
  }
</script>

<style scoped>

</style>
