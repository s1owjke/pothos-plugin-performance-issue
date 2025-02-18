import { builder } from "src/builder";

import { RejectedTheoryCreateWithoutGhostRecord } from "./createWithoutGhostRecord";
import { RejectedTheoryWhereUnique } from "./whereUnique";

export const RejectedTheoryCreateRelationWithoutGhostRecord = builder.inputRef<any>("RejectedTheoryCreateRelationWithoutGhostRecord").implement({
  fields: (t) => ({
    connect: t.field({ type: RejectedTheoryWhereUnique }),
    create: t.field({ type: RejectedTheoryCreateWithoutGhostRecord }),
  }),
});
