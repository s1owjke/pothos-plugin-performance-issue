import { builder } from "src/builder";

import { DateTimeUpdate } from "../dateTimeUpdate";
import { IdUpdate } from "../idUpdate";

export const OverwrittenLegacyUpdateMany = builder.inputRef<any>("OverwrittenLegacyUpdateMany").implement({
  fields: (t) => ({
    createdAt: t.field({ type: DateTimeUpdate, required: false }),
    updatedAt: t.field({ type: DateTimeUpdate, required: false }),
    artificialPotatoId: t.field({ type: IdUpdate, required: false }),
    prematureOptimizationId: t.field({ type: IdUpdate, required: false }),
  }),
});
