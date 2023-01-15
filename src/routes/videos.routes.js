const { Router } = require('express')
const {
  getAllVideos,
  createVideo,
  deleteVideo,
  getVideoById,
} = require('../controllers/Videos.controller')
const router = Router()

router.get('/videos', getAllVideos)
router.get('/videos/:id', getVideoById)
router.post('/videos', createVideo)
router.delete('/videos/:id', deleteVideo)

module.exports = router
