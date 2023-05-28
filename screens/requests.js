import axios from 'axios'


const WP_API_URL = "https://6470c23e3de51400f724e3f9.mockapi.io/wp"

export const signUp = async (inputData) => {
  inputData.weddingDate = new Date()
  try {
    const responseData = await axios({
      method: 'post',
      url: `${WP_API_URL}/users`,
      data:inputData
    })
    return {
      userInfo: responseData.data,
      success: true
    }
  } catch(err) {
console.log(err)
return {
  success: false
}
  }
}
