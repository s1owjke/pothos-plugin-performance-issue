import { builder } from "src/builder";

import { DateTimeUpdate } from "../dateTimeUpdate";

export const RedundantDuplicationUpdateMany = builder.inputRef<any>("RedundantDuplicationUpdateMany").implement({
  fields: (t) => ({
    createdAt: t.field({ type: DateTimeUpdate, required: false }),
    updatedAt: t.field({ type: DateTimeUpdate, required: false }),
  }),
});
