import { fn_b } from '../src/b';
import { fn_e } from './e';
import React from "inferno";

export function fn_a() {
    return <div>a{fn_b()}{fn_e()} </div>;
}

