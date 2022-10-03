const express = require('express')
const router = express.Router()


router.get('/' ,(req, res) => {
    res.write('Hey!');
    res.end()
})

router.get('/callback' ,(req, res) => {

    //check if code exists
    let token =  $axios.get('/api/authenticate',{
        params: {
          client_id: 'OUYWUC4AHY4VSFCWA0EB055U3V4A01WYGRSAZ0MXLS0JKCUA',
          client_secret: 'DK3KXOIRRPM3CGGXUYHEDTPVJDDNPDGDE0GYHUBWRCPNQLAG',
          grant_type: 'authorization_code',
          redirect_uri: 'http://localhost:3000/api/swarm/callback',
          code: req.query.code,
          v: '20220910'
        }
    });
    res.write('Hey!');
    res.end()
})

module.exports = router
