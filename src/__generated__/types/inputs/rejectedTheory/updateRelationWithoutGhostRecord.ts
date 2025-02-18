import { builder } from "src/builder";

import { RejectedTheoryCreateWithoutGhostRecord } from "./createWithoutGhostRecord";
import { RejectedTheoryUpdateWithoutGhostRecord } from "./updateWithoutGhostRecord";
import { RejectedTheoryWhereUnique } from "./whereUnique";

export const RejectedTheoryUpdateRelationWithoutGhostRecord = builder.inputRef<any>("RejectedTheoryUpdateRelationWithoutGhostRecord").implement({
  fields: (t) => ({
    connect: t.field({ type: RejectedTheoryWhereUnique }),
    disconnect: t.field({ type: RejectedTheoryWhereUnique }),
    create: t.field({ type: RejectedTheoryCreateWithoutGhostRecord }),
    update: t.field({ type: RejectedTheoryUpdateWithoutGhostRecord }),
  }),
});
