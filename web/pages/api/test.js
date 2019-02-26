import axios from 'axios';
// export function fetchData(){
//   return axios.get(`/`)
//     .then((res) => {
//       console.log('res',res);
//       return { title: res.data.title }
//     })
// }

export let fetchData =  {
  asyncData ({ params }) {
    return axios.get(`/api/`)
    .then((res) => {
      return res;
    })
  }
}