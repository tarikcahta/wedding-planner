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


export const getUsers = async () => {
  try {
      const responseData = await axios({
        method: 'get',
        url: `${WP_API_URL}/users`,
      })

      return responseData.data
  } catch(err) {
    console.log(err)
    return {
      success:false
    }
  }
}


export const userLogin = async ({userName,userPassword}) => {
const allUsers = await getUsers()


const userByUsername = allUsers.find( user => user.username === userName)


if(userByUsername && userByUsername?.password === userPassword) {
  return {
    success: true,
    message: '',
    userInfo: userByUsername
  }
}

return {
  success: false,
  message: 'Failed!',
  userInfo: null
}
}
