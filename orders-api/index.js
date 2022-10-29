const express = require("express")
const amqp = require("amqplib")
const app = express()

const amqpUrl = "amqp://localhost:5672"

const orderData = {
  customerId: 4,
  orderId: 71,
  number: 254791100001,
}

app.get("/", async (req, res) => {
  try {
    // create connection
    const connection = await amqp.connect(amqpUrl)
    // create channel
    const channel = await connection.createChannel()
    // create queque in the channel
    await channel.assertQueue("order.shipped")
    channel.sendToQueue("order.shipped", Buffer.from(JSON.stringify(orderData)))
    res.send("ORDERS API")
  } catch (error) {
    console.log(error)
    // res.json(error)
  }
})

app.listen(8000, () => {
    console.log("ORDERS API listening on port 8000")
})