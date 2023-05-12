/* eslint-disable no-console */
/* eslint-disable camelcase */
// Import dependencies
const express = require('express')
const SwarmAppApi = require('swarmapp-api');

const client_id = '0K3FWRFCJXZW3D4H4FK554XXGPYSEKDQ3GJF2LH2DENPCY3P'; 
const client_secret = 'YKFAFSRJRKBR1RBSGZLTTYALSJDMJSDO441DWPPKTEI5XLAY';

// Create app instance
const app = express()

// Define JSON as return type
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (_req, res) => {
  res.json({ message: 'hello abqaiq' })
})

app.post('/auth/initiate_login', async (req, res) =>{
  console.log(req.body);
  const username = req.body.email;
  const password = req.body.password;
  const client_id = '0K3FWRFCJXZW3D4H4FK554XXGPYSEKDQ3GJF2LH2DENPCY3P'; 
  const client_secret = 'YKFAFSRJRKBR1RBSGZLTTYALSJDMJSDO441DWPPKTEI5XLAY';
  
  const swarmy = new SwarmAppApi();
  
  try {  
      // login to swarm
      const result = await swarmy.initiatemultifactorlogin(username, password, client_id, client_secret);
      console.log('hi')
      console.log(result)
      const flowId = result.response.flowId;
      const user_id = result.response.user.id

      res.json(result.response)

      // if returned user, 
        // Check if exists on our database, if yes open otp box and continue login, return flowId
        // if not, throw an error, 
      // if not returned user, throw an error message
  } catch (error) {
    console.log('bye')
      console.log(error)
      res.status(500).send({ message: 'Something failed!', error: error })

  }

})
app.post('/auth/login', async (req, res) => {
  console.log(req.body);
  const otp = req.body.otp;
  const flowId = req.body.flowId;
  
  const result = await swarmy.completemultifactorlogin(otp, client_id, client_secret);

  // it should return a user object, and a token, update the token in 
    
    res.json(result)
  })

  app.post('/auth/logout', (_req, res) => {
    res.json({ message: 'hello world' })
  })

  app.get('/auth/user', (_req, res) => {
    res.json({ message: 'hello world' })
  })



// login: { url: '/api/auth/login', method: 'post' },
// logout: { url: '/api/auth/logout', method: 'post' },
// user: { url: '/api/auth/user', method: 'get' }


module.exports = {
  path: '/api',
  handler: app,
}