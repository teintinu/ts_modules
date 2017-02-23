import { fn_a } from './src/a';
import React from "inferno";
import createElement from 'inferno-create-element';

debugger
(React as any).createElement = createElement
React.render(fn_a(), document.getElementById('app'));