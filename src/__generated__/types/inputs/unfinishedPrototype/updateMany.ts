import { builder } from "src/builder";

import { DateTimeUpdate } from "../dateTimeUpdate";
import { IdUpdate } from "../idUpdate";

export const UnfinishedPrototypeUpdateMany = builder.inputRef<any>("UnfinishedPrototypeUpdateMany").implement({
  fields: (t) => ({
    createdAt: t.field({ type: DateTimeUpdate, required: false }),
    updatedAt: t.field({ type: DateTimeUpdate, required: false }),
    classifiedSillinessId: t.field({ type: IdUpdate, required: false }),
  }),
});
