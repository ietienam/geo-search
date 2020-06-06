const fs = require('fs')
fs.writeFileSync('./.env', `API_KEY=${process.env.VUE_APP_KEY}\n`)
