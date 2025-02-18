import { builder } from "src/builder";

import { PendingDisasterCreateWithoutEmotionalSupportTable } from "./createWithoutEmotionalSupportTable";
import { PendingDisasterWhereUnique } from "./whereUnique";

export const PendingDisasterCreateRelationListWithoutEmotionalSupportTable = builder
  .inputRef<any>("PendingDisasterCreateRelationListWithoutEmotionalSupportTable")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [PendingDisasterWhereUnique] }),
      create: t.field({ type: [PendingDisasterCreateWithoutEmotionalSupportTable] }),
    }),
  });
