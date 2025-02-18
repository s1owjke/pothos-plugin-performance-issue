import { builder } from "src/builder";

import { DateTimeUpdate } from "../dateTimeUpdate";
import { IdUpdate } from "../idUpdate";

export const SchrodingerUserUpdateMany = builder.inputRef<any>("SchrodingerUserUpdateMany").implement({
  fields: (t) => ({
    createdAt: t.field({ type: DateTimeUpdate, required: false }),
    updatedAt: t.field({ type: DateTimeUpdate, required: false }),
    ghostRecordId: t.field({ type: IdUpdate, required: false }),
  }),
});
