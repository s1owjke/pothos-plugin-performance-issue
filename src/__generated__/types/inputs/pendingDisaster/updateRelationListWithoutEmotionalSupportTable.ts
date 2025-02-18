import { builder } from "src/builder";

import { PendingDisasterCreateWithoutEmotionalSupportTable } from "./createWithoutEmotionalSupportTable";
import { PendingDisasterWhereUnique } from "./whereUnique";

export const PendingDisasterUpdateRelationListWithoutEmotionalSupportTable = builder
  .inputRef<any>("PendingDisasterUpdateRelationListWithoutEmotionalSupportTable")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [PendingDisasterWhereUnique] }),
      set: t.field({ type: [PendingDisasterWhereUnique] }),
      disconnect: t.field({ type: [PendingDisasterWhereUnique] }),
      create: t.field({ type: [PendingDisasterCreateWithoutEmotionalSupportTable] }),
    }),
  });
