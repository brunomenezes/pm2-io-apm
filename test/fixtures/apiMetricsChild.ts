import SpecUtils from './utils'

const pmx = require(__dirname + '/../../src/index.js')

pmx.init({metrics:  {v8: true}})

// should not fail but display a warning
pmx.metrics()
pmx.metrics({})

const allMetrics = pmx.metrics(
  [
    {
      name: 'metricHistogram',
      type: 'histogram',
      id: 'metric/custom'
    },
    {
      name: 'metric with spaces',
      type: 'histogram',
      id: 'metric/custom'
    },
    {
      name: 'metric wi!th special chars % ///',
      type: 'histogram',
      id: 'metric/custom'
    },
    {
      name: 'metricFailure',
      type: 'notExist'
    }
  ]
)

allMetrics.metricHistogram.update(10)
