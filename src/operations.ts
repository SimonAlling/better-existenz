import { ALWAYS } from "userscripter/lib/environment";
import { Operation, operation } from "userscripter/lib/operations";

import SELECTOR from "~src/selectors";

const OPERATIONS: ReadonlyArray<Operation<any>> = [
    operation({
        description: "remove default CSS",
        condition: ALWAYS,
        action: () => {
            for (const link of Array.from(document.querySelectorAll(SELECTOR.stylesheetLink))) {
                link.remove();
            }
        },
    }),
];

export default OPERATIONS;
