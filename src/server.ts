import http from 'http'
import { Express } from './libs/Express'

const express = new Express()
const serverHttp = http.createServer(express.app)
serverHttp.listen(express.port, () => {
  console.info('START', `Express Server listen: ${express.port}`)
})

process.on('beforeExit', () => {
  console.info('STOPED', `Express Server finalized!!!`)
})
