import { builder } from "src/builder";

import { PendingDisasterCreateWithoutEmotionalSupportTable } from "./createWithoutEmotionalSupportTable";
import { PendingDisasterWhereUnique } from "./whereUnique";

export const PendingDisasterCreateRelationWithoutEmotionalSupportTable = builder
  .inputRef<any>("PendingDisasterCreateRelationWithoutEmotionalSupportTable")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: PendingDisasterWhereUnique }),
      create: t.field({ type: PendingDisasterCreateWithoutEmotionalSupportTable }),
    }),
  });
