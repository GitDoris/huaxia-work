/* 新增催收策略配置 */
export default {
  title: "新增催收策略配置",
  labelWidth: "7em",
  formCells: [
    {
      'column': 'policyNo',
      'lable': '策略编号',
      'type': 'equals',
      'defaultValue': "",
      'rules': [
        {required: true, message: '请输入策略编号', trigger: 'blur'},
      ],
    },
    {
      'column': 'policyName',
      'lable': '策略名称',
      'type': 'equals',
      'rules': [
        {required: true, message: '请输入策略名称', trigger: 'blur'},
      ],
    },
    {
      'column': 'businessCategory',
      'lable': '产品线',
      'type': 'select',
      'rules': [
        {required: true, message: '请选择产品线', trigger: 'change'},
      ],
      'options': [
        {"value": "2001", "label": "P2P产品"},
        {"value": "2003", "label": "消费分期"},
        {"value": "2004", "label": "车贷类产品"},
        {"value": "2005", "label": "纯线类产品"},
      ]
    },
    {
      'column': 'businessType',
      'lable': '产品类型',
      'type': 'select',
      'rules': [
        {required: true, message: '请选择产品类型', trigger: 'change'},
      ],
      'options': [
        {"value": "A001", "label": "精英汇", "parent": "2001"},
        {"value": "A310", "label": "保无忧", "parent": "2001"},
        {"value": "A309", "label": "华优房", "parent": "2001"},
        {"value": "A308", "label": "公社帮", "parent": "2001"},
        {"value": "A307", "label": "群英汇", "parent": "2001"},
        {"value": "A301", "label": "华薪派", "parent": "2001"},
        {"value": "A018", "label": "华优保", "parent": "2001"},
        {"value": "A017", "label": "公积菁", "parent": "2001"},
        {"value": "A016", "label": "华楼宝", "parent": "2001"},
        {"value": "A002", "label": "华楼通", "parent": "2001"},
        {"value": "A003", "label": "社保族", "parent": "2001"},
        {"value": "A004", "label": "保单乐", "parent": "2001"},
        {"value": "A005", "label": "车主帮", "parent": "2001"},
        {"value": "A010", "label": "核算产品", "parent": "2001"},
      ]
    },
    {
      'column': 'applyStage',
      'lable': '适用阶段',
      'type': 'select',
      'rules': [
        {required: true, message: '请选择适用阶段', trigger: 'change'},
      ],
      'options': [
        {"value": "M1", "label": "C-M1"},
        {"value": "M2", "label": "M1-M2"},
        {"value": "M3", "label": "M2-M3"},
        {"value": "M4", "label": "M3-M4"},
        {"value": "M5", "label": "M4-M5"},
        {"value": "M6", "label": "M5-M6"},
        {"value": "M7", "label": "M6-M7"},
        {"value": "M8", "label": "M7-M8"},
        {"value": "RepaymentRemind", "label": "还款提醒"},
      ]
    },
    {
      hidden: false,
      required: true,
      'lable': '逾期天数',
      'children': [
        {
          'column': 'overdueBeginValue',
          'lable': '起始值',
          'type': 'equals',
          'span': 11,
          'defaultValue': "",
          'rules': [
            {required: true, message: '请输入起始值', trigger: 'blur'},
            {pattern: /^[0-9]+?$/, message: '只能输入数字'}
          ],
        },
        {
          'type': 'slot',
          'html': '~',
          'span': 2
        },
        {
          'column': 'overdueEndValue',
          'lable': '结束值',
          'type': 'equals',
          'span': 11,
          'defaultValue': "",
          'rules': [
            {required: true, message: '请输入结束值', trigger: 'blur'},
            {pattern: /^[0-9]+?$/, message: '只能输入数字'}
          ],
        },
      ]
    },
    {
      'column': 'channelNo',
      'lable': '渠道名称',
      'type': 'select',
      'hidden': true,
      'options': []
    },
    {
      'column': 'merchantType',
      'lable': '商户类型',
      'type': 'select',
      'hidden': true,
      'options': []
    },
    {
      'column': 'riskLevel',
      'lable': '风险等级',
      'type': 'select',
      'options': [
        {"value": "L", "label": "低风险"},
        {"value": "M", "label": "中风险"},
        {"value": "H", "label": "高风险"},
      ]
    },

    {
      'column': 'validStartTime',
      'lable': '生效时间',
      'type': 'dateTimePicker',
      'rules': [
        { required: true, message: '请选择生效时间', trigger: 'change' }
      ]
    }
  ]
}
