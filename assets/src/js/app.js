require("../sass/main.sass");

import React from 'react';
import Hello from './components/Hello.react.js'
// import { Hello } from './components/Hello.react.js';

var element = document.getElementById("hello");
console.log(element.dataset.names);
console.log(JSON.parse(element.dataset.names))
React.render(<small><Hello /></small>, element);
