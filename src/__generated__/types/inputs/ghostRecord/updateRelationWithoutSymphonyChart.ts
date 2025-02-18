import { builder } from "src/builder";

import { GhostRecordCreateWithoutSymphonyChart } from "./createWithoutSymphonyChart";
import { GhostRecordUpdateWithoutSymphonyChart } from "./updateWithoutSymphonyChart";
import { GhostRecordWhereUnique } from "./whereUnique";

export const GhostRecordUpdateRelationWithoutSymphonyChart = builder.inputRef<any>("GhostRecordUpdateRelationWithoutSymphonyChart").implement({
  fields: (t) => ({
    connect: t.field({ type: GhostRecordWhereUnique }),
    disconnect: t.field({ type: GhostRecordWhereUnique }),
    create: t.field({ type: GhostRecordCreateWithoutSymphonyChart }),
    update: t.field({ type: GhostRecordUpdateWithoutSymphonyChart }),
  }),
});
