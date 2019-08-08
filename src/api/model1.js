import axios from 'axios'
export default {
  aaaa () {
    return axios.post('/api/deptInfo/getList', {
      name: '',
      page: 1,
      size: 10
    }).then((d) => {
      return d.data.data
    })
  }
}
