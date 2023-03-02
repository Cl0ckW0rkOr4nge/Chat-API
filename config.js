const configs = {
    api: {
        port: process.env.PORT || 3000,
        host: process.env.HOST || 'http://localhost:3000',
        nodeEnv: process.env.NODE_ENV || 'development'
    },
    db: {
        development: {
            //? Aqui deberan estar las configuraciones para la conexion con Sequelize
            dialect: 'postgres', // tipo de DB con la que nos vamos a conectar
            host: 'localhost',
            port: 5432,
            username: 'postgres',
            password: 'root',
            database: 'chat-db',
            define: {
                timestamps: true,
                underscored: true,
                underscoredAll: true,
            }
        },
        production: {
            //? Aqui deberan estar las configuraciones para la conexion con Sequelize
            dialect: 'postgres', // tipo de DB con la que nos vamos a conectar
            host: 'localhost',
            port: 5432,
            username: 'postgres',
            password: 'root',
            database: 'chat-db',
            define: {
                timestamps: true,
                underscored: true,
                underscoredAll: true,
            },
            dialectOptions: {
                ssl: {
                    require: true,
                    rejectUnauthorized: false
                }
            }
        },
        test: {
            //? Aqui deberan estar las configuraciones para la conexion con Sequelize
            dialect: 'postgres', // tipo de DB con la que nos vamos a conectar
            host: 'localhost',
            port: 5432,
            username: 'postgres',
            password: 'root',
            database: 'chat-db',
            define: {
                timestamps: true,
                underscored: true,
                underscoredAll: true,
            }
        }
    }
}

module.exports = configs 