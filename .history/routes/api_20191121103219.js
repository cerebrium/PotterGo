const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    let config = {
        headers: {
          Authorization: `Bearer ${this.state.token}`
        }
      }
    axios.get('https://www.potterapi.com/v1/house', ).then(response => {
        res.json(response.data)
    })
})


module.exports = router;