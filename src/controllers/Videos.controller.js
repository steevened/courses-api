const VideosService = require('../services/videos.services')

const getAllVideos = async (req, res) => {
  try {
    const result = await VideosService.getAllVideos()
    res.json(result)
  } catch (error) {
    res.status(400).json(error.message)
  }
}

const getVideoById = async (req, res) => {
  const { id } = req.params
  try {
    const result = await VideosService.getVideoById(id)
    res.json(result)
  } catch (error) {
    res.status(400).json(error.message)
  }
}

const createVideo = async (req, res) => {
  const body = req.body
  try {
    const result = VideosService.createVideo(body)
    res.json(result)
  } catch (error) {
    res.status(400).json(error.message)
  }
}

const deleteVideo = async (req, res) => {
  const { id } = req.params
  try {
    const result = VideosService.deleteVideo(id)
    res.end()
  } catch (error) {
    res.status(400).json(error.message)
  }
}

module.exports = { getAllVideos, createVideo, getVideoById, deleteVideo }
