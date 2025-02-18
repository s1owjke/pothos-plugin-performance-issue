import { builder } from "src/builder";

import { DateTimeUpdate } from "../dateTimeUpdate";
import { IdUpdate } from "../idUpdate";

export const CosmicDebriUpdateMany = builder.inputRef<any>("CosmicDebriUpdateMany").implement({
  fields: (t) => ({
    createdAt: t.field({ type: DateTimeUpdate, required: false }),
    updatedAt: t.field({ type: DateTimeUpdate, required: false }),
    unstableFrequencyId: t.field({ type: IdUpdate, required: false }),
  }),
});
