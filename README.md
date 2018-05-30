# Jolt-Scheduler

Use Jolt-Scheduler to link an `event` with an `action` with an adjustable time
`interval` between. Both the `event` and the `action` are your choice, only the
`event` must contain an

1. event `date`
2. whether it is `recurring`
3. the subsequent `action`
4. and whether the `action` occurs before or after the event `date`

Adjust the `interval` of the `event` (options: days, hour, minutes, seconds) in
`bin/run.js`

This project "mocks-up" the `event` and `action` as microservices and the actions
are logged in the console.

## Table of Contents

- [Installation](#installation)

## Installation

1. npm start
2. runs on port 3030 (adjust in `bin/run.js` if necessary)
