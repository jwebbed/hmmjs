import start from './index.js';

let cb1 = start({
  interval: 500,
  duration: 8000,
  random: false
});

let cb2 = start({
  interval: 1000,
  duration: 3000
});
