import { builder } from "src/builder";

import { SignalGridWhere } from "./where";

export const SignalGridWhereRelationList = builder.inputRef<any>("SignalGridWhereRelationList").implement({
  fields: (t) => ({
    some: t.field({ type: SignalGridWhere, required: false }),
    every: t.field({ type: SignalGridWhere, required: false }),
    none: t.field({ type: SignalGridWhere, required: false }),
  }),
});
