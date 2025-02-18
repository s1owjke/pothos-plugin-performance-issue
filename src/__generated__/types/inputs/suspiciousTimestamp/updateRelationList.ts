import { builder } from "src/builder";

import { SuspiciousTimestampCreate } from "./create";
import { SuspiciousTimestampWhereUnique } from "./whereUnique";

export const SuspiciousTimestampUpdateRelationList = builder.inputRef<any>("SuspiciousTimestampUpdateRelationList").implement({
  fields: (t) => ({
    connect: t.field({ type: [SuspiciousTimestampWhereUnique] }),
    set: t.field({ type: [SuspiciousTimestampWhereUnique] }),
    disconnect: t.field({ type: [SuspiciousTimestampWhereUnique] }),
    create: t.field({ type: [SuspiciousTimestampCreate] }),
  }),
});
