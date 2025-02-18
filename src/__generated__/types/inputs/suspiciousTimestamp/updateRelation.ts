import { builder } from "src/builder";

import { SuspiciousTimestampCreate } from "./create";
import { SuspiciousTimestampUpdate } from "./update";
import { SuspiciousTimestampWhereUnique } from "./whereUnique";

export const SuspiciousTimestampUpdateRelation = builder.inputRef<any>("SuspiciousTimestampUpdateRelation").implement({
  fields: (t) => ({
    connect: t.field({ type: SuspiciousTimestampWhereUnique }),
    disconnect: t.field({ type: SuspiciousTimestampWhereUnique }),
    create: t.field({ type: SuspiciousTimestampCreate }),
    update: t.field({ type: SuspiciousTimestampUpdate }),
  }),
});
