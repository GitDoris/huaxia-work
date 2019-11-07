/* 查询条件 */
export default [
  {'column': 'contractNo', 'type': 'equals', 'lable': '合同编号'},
  {'column': 'customerName', 'type': 'equals', 'lable': '客户姓名'},
  {
    'column': 'policyName',
    'type': 'equals',
    'lable': '策略名称'
  },
  {
    'column': 'businessCategory',
    'type': 'select', 'lable': '产品线',
    'options': [
      {"value": "2001", "label": "P2P产品"},
      {"value": "2003", "label": "消费分期"},
      {"value": "2004", "label": "车贷类产品"},
      {"value": "2005", "label": "纯线类产品"},
    ]
  },
  {
    'column': 'businessType',
    'type': 'select',
    'lable': '产品类型',
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
    'type': 'select',
    'lable': '适用阶段',
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
    'lable': '还款日',
    'children': [
      {
        'column': 'repayDateCondition',
        'lable': '请选择',
        'type': 'select',
        'options': [
          {"value": "<", "label": "<"},
          {"value": "<=", "label": "<="},
          {"value": "=", "label": "="},
          {"value": ">", "label": ">"},
          {"value": ">=", "label": ">="},
        ]
      },
      {
        'column': 'repayDate',
        'lable': '还款日',
        'type': 'equals'
      },
    ]
  },
]

