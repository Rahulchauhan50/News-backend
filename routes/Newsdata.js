const express = require('express')
const router = express.Router();
const Data = require('../modals/newSchema')

router.get('/:category', async (req, res) => {
  
    const data = await Data.find({ _id:'64cba8394d4e46fcebc2a983' });
   
    const dataToSend = req.params.category;
    switch (dataToSend) {

        case "general": res.json(data[0].india)
            break;
        case "business": res.json(data[0].business)
            break;
        case "sports": res.json(data[0].sports)
            break;
        case "entertainment": res.json(data[0].entertainment)
            break;
        case "health": res.json(data[0].health)
            break;
        case "science": res.json(data[0].science)
            break;
        case "technology": res.json(data[0].technology)
            break;
    }
})

module.exports = router