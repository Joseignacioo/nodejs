const {envs} = require('./config/env')
const {startServer} = require('./server/server')

const main = () => {
    startServer({
        port: envs.PORT,
        public_path: envs.PUBLIC_PATH
    })
}
// funcion agnostica autoconvocada (la ejecutamos con parentesis)
// agnostica no tiene nombre
( async () => {
    main()
})()

