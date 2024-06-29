const express = require('express')
const ReportController = require('../controllers/ReportController')

const router = express.Router()

router.get('/reports/:matchId?', ReportController.generateReport)

module.exports = router