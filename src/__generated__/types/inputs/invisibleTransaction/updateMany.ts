import { builder } from "src/builder";

import { DateTimeUpdate } from "../dateTimeUpdate";
import { IdUpdate } from "../idUpdate";

export const InvisibleTransactionUpdateMany = builder.inputRef<any>("InvisibleTransactionUpdateMany").implement({
  fields: (t) => ({
    createdAt: t.field({ type: DateTimeUpdate, required: false }),
    updatedAt: t.field({ type: DateTimeUpdate, required: false }),
    artificialPotatoId: t.field({ type: IdUpdate, required: false }),
  }),
});
