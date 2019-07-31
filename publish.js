// let http = require('http')
// const Rascal = require('rascal')

// const createParcelKey = 'createParcel'
// const queueNamecreateParcel = 'staging.2stage.create.parcels'
// const queueNameDeleteParcel = 'staging.2stage.update.parcels'
// const exchangeName = 'staging.mongoose-repository.caller'

// // configHost = {
// //     connection: {
// //         slashes: true,
// //         protocol: 'amqp',
// //         hostname: '192.168.1.33',
// //         user: 'senditdev',
// //         password: '6J8vpczdrfbhHEcwYNuW',
// //         vhost: `//local`,
// //         port: 5672,
// //         options: {
// //             heartbeat: 5
// //         },
// //         socketOptions: {
// //             timeout: 1000
// //         }
// //     }
// // }

// configHost = {
//     connection: {
//         slashes: true,
//         protocol: 'amqp',
//         hostname: '127.0.0.1',
//         user: 'guest',
//         password: 'guest',
//         vhost: `//staging`,
//         port: 5672,
//         options: {
//             heartbeat: 5
//         },
//         socketOptions: {
//             timeout: 1000
//         }
//     }
// }

// const configRascal = {
//     vhosts: {
//         ['staging']: {
//             ...configHost,
//             exchanges: [exchangeName],
//             queues: {
//                 [queueNamecreateParcel]: {
//                     options: {
//                         durable: true,
//                         arguments: {
//                             'x-message-ttl': 50000000000000,
//                             'x-dead-letter-exchange': `${exchangeName}.create.expired`,
//                             'x-dead-letter-routing-key': 'staging.request_create_is_expired',
//                         }
//                     }
//                 },
//                 [queueNameDeleteParcel]: {
//                     options: {
//                         durable: true,
//                         arguments: {
//                             'x-message-ttl': 50000000000000,
//                             'x-dead-letter-exchange': `${exchangeName}.update.expired`,
//                             'x-dead-letter-routing-key': 'staging.request_update_is_expired',
//                         }
//                     }
//                 }
//             },
//             bindings: [
//                 `${exchangeName}[${createParcelKey}] -> ${queueNamecreateParcel}`
//             ],
//             publications: {
//                 [`${createParcelKey}`]: {
//                     'exchange': [exchangeName],
//                     'routingKey': createParcelKey
//                 }
//             },
//             // subscriptions: {
//             //     [`${createParcelKey}`]: {
//             //         'queue': queueNamecreateParcel
//             //     },
//             //     ['deleteParcel']: {
//             //         'queue': queueNameDeleteParcel
//             //     }
//             // }
//         }
//     }
// }

// async function init() {

//     try {
//         console.log('Subscribe on ', queueNamecreateParcel)
//         const broker = await Rascal.BrokerAsPromised.create(Rascal.withDefaultConfig(configRascal))
//         console.log('###### connect AMQP success ######')
//         // const subscription = await broker.subscribe(createParcelKey);
//         // const subscriptionDel = await broker.subscribe('deleteParcel');

//         // subscription.on('message', function (message, content, ackOrNack) {
//         //     console.log('Reviece msg: ', content);
//         //     ackOrNack();
//         // }).on('error', console.error);

//         // subscriptionDel.on('message', function (message, content, ackOrNack) {
//         //     console.log('Reviece Delete msg: ', content);
//         //     ackOrNack();
//         // }).on('error', console.error);

//           setInterval(async function() {
//             try {
//               const publication = await broker.publish(createParcelKey, new Date().toISOString() + ': hello world');
//               publication.on('error', console.error)
//             } catch(err) {
//               console.error(err);
//             }
//           }, 1000)

//     } catch (error) {
//         console.error(error)
//     }
// }

// init()

