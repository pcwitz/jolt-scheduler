# Jolt-Scheduler

Use Jolt-Scheduler to link an `event` with an `action` with an adjustable time
`interval` between. Both the `event` and the `action` are your choice, only the
`event` must contain:

1. an event `start` date
2. whether it is `recurring`
3. the `interval` of time between `event` and `action`
4. and whether the `action` is `fix`ed `before` or `after` the event `start` date
5. the subsequent `action`

Adjust the `event` properties in `public/settings/events.json`.

This project "mocks-up" the `event` and `action` as other microservices and the
actions are logged to the console.

## Table of Contents

- [Installation](#installation)

## Installation

1. npm install
2. npm start
3. runs on port 3030 (adjust in `bin/run.js` if necessary)
