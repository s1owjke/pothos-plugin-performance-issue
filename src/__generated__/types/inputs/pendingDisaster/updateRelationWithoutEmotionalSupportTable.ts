import { builder } from "src/builder";

import { PendingDisasterCreateWithoutEmotionalSupportTable } from "./createWithoutEmotionalSupportTable";
import { PendingDisasterUpdateWithoutEmotionalSupportTable } from "./updateWithoutEmotionalSupportTable";
import { PendingDisasterWhereUnique } from "./whereUnique";

export const PendingDisasterUpdateRelationWithoutEmotionalSupportTable = builder
  .inputRef<any>("PendingDisasterUpdateRelationWithoutEmotionalSupportTable")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: PendingDisasterWhereUnique }),
      disconnect: t.field({ type: PendingDisasterWhereUnique }),
      create: t.field({ type: PendingDisasterCreateWithoutEmotionalSupportTable }),
      update: t.field({ type: PendingDisasterUpdateWithoutEmotionalSupportTable }),
    }),
  });
