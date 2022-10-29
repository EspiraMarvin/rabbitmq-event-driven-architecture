const express = require("express")
const amqp = require("amqplib")

const app = express()

const amqpUrl = "amqp://localhost:5672"

app.get("/", (req, res) => {
  res.send("NOTIFCATIONS API")
})

// consumer channel
async function connect() {
  try {
    const connection = await amqp.connect(amqpUrl)
    const channel = await connection.createChannel()
    await channel.assertQueue("order.shipped")
    channel.consume("order.shipped", (message) => {
      console.log("received message from queue", message.content.toString())
      channel.ack(message)
    })
  } catch (error) {
    console.log(error)
  }
}

connect()

app.listen(8001, () => {
  console.log("Listening on PORT 8001")
})
