import { builder } from "src/builder";

import { DateTimeUpdate } from "../dateTimeUpdate";
import { IdUpdate } from "../idUpdate";

export const RecursiveRecursionUpdateMany = builder.inputRef<any>("RecursiveRecursionUpdateMany").implement({
  fields: (t) => ({
    createdAt: t.field({ type: DateTimeUpdate, required: false }),
    updatedAt: t.field({ type: DateTimeUpdate, required: false }),
    gravityOverrideId: t.field({ type: IdUpdate, required: false }),
  }),
});
