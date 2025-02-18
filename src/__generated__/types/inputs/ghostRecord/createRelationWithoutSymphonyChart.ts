import { builder } from "src/builder";

import { GhostRecordCreateWithoutSymphonyChart } from "./createWithoutSymphonyChart";
import { GhostRecordWhereUnique } from "./whereUnique";

export const GhostRecordCreateRelationWithoutSymphonyChart = builder.inputRef<any>("GhostRecordCreateRelationWithoutSymphonyChart").implement({
  fields: (t) => ({
    connect: t.field({ type: GhostRecordWhereUnique }),
    create: t.field({ type: GhostRecordCreateWithoutSymphonyChart }),
  }),
});
