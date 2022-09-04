import axios from 'axios'
const instance=axios.create({
    baseURL:"https://bsbhuvi-food.herokuapp.com/"
})
export default instance