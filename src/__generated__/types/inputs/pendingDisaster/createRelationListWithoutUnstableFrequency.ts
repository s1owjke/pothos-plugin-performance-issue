import { builder } from "src/builder";

import { PendingDisasterCreateWithoutUnstableFrequency } from "./createWithoutUnstableFrequency";
import { PendingDisasterWhereUnique } from "./whereUnique";

export const PendingDisasterCreateRelationListWithoutUnstableFrequency = builder
  .inputRef<any>("PendingDisasterCreateRelationListWithoutUnstableFrequency")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [PendingDisasterWhereUnique] }),
      create: t.field({ type: [PendingDisasterCreateWithoutUnstableFrequency] }),
    }),
  });
