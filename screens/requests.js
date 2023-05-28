import axios from 'axios'


const WP_API_URL = "https://6470c23e3de51400f724e3f9.mockapi.io/wp"

export const signUp = (inputData) => {
  inputData.weddingDate = new Date()
    axios({
        method: 'post',
        url: `${WP_API_URL}/users`,
        data:inputData
      }).then((response) => {
        if(response.data) {
          return {
            success: true
          }
        }
      });
}