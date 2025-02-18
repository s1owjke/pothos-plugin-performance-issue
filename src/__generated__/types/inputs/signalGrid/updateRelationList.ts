import { builder } from "src/builder";

import { SignalGridCreate } from "./create";
import { SignalGridWhereUnique } from "./whereUnique";

export const SignalGridUpdateRelationList = builder.inputRef<any>("SignalGridUpdateRelationList").implement({
  fields: (t) => ({
    connect: t.field({ type: [SignalGridWhereUnique] }),
    set: t.field({ type: [SignalGridWhereUnique] }),
    disconnect: t.field({ type: [SignalGridWhereUnique] }),
    create: t.field({ type: [SignalGridCreate] }),
  }),
});
