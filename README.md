### Event driven architecture with RabbitMQ


## setup commands

> cd notifications-api
> yarn
> yarn start


> cd orders-api
> yarn
> yarn start


> cd .. (to root folder)

RUN, to spin up the RabbitMQ server

> docker-compose up

Visit the 2nd port on your docker-compose yaml `15672` file locally to see the UI for rabbitmq `localhost:15672`

rabbitmq login,if you're using the first time
> username - guest &  password - guest

Install `amqplib` for node, to enable connection and messageing to RabbitMQ

> yarn add amqplib

The 1st port on your docker-compose yaml `5672` is the one we will use to connect to RabbitMQ server