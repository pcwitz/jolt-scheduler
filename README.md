# Jolt-Scheduler

Use Jolt-Scheduler to link an `event` and `action` to be executed before or
after an adjustable time `interval`. Both the `event` and the `action` are other
microservices. This project "mocks-up" the `event` and `action` microservices
and the actions are logged to the console.

```sh
Adjust the event properties in public/settings/events.json.
```

The `event` contains:

- an event `name` and corresponding mock microservice to retrieve the event
`start` date.
- the subsequent `action` and corresponding mock microservice to retrieve the
event `start` date.
- the `interval` of time between `event` and `action`
  *  days, hours, minutes, and seconds
  *  whether the `action` is `fix`ed `before` or `after` the event `start` date
- whether the interval is `recurring`

## Table of Contents

- [Installation](#installation)

## Installation

1. npm install
2. npm start
3. runs on port 3030 (adjust in `bin/run.js` if necessary)
