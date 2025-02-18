import { builder } from "src/builder";

import { SuspiciousTimestampCreate } from "./create";
import { SuspiciousTimestampWhereUnique } from "./whereUnique";

export const SuspiciousTimestampCreateRelation = builder.inputRef<any>("SuspiciousTimestampCreateRelation").implement({
  fields: (t) => ({
    connect: t.field({ type: SuspiciousTimestampWhereUnique }),
    create: t.field({ type: SuspiciousTimestampCreate }),
  }),
});
