import axios from 'axios';
export let fetchData =  {
  asyncData ({ params }) {
    return axios.get(`/api/`)
    .then((res) => {
      return res;
    })
  }
}