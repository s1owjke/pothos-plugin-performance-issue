import { builder } from "src/builder";

import { SignalGridCreate } from "./create";
import { SignalGridWhereUnique } from "./whereUnique";

export const SignalGridCreateRelationList = builder.inputRef<any>("SignalGridCreateRelationList").implement({
  fields: (t) => ({
    connect: t.field({ type: [SignalGridWhereUnique] }),
    create: t.field({ type: [SignalGridCreate] }),
  }),
});
