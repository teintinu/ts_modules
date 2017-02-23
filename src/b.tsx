import { fn_c } from './c';

import React from "inferno";

export function fn_b() {
    return <div>b{fn_c()} </div>;
}

