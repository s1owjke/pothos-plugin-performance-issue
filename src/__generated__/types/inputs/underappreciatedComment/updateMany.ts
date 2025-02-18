import { builder } from "src/builder";

import { DateTimeUpdate } from "../dateTimeUpdate";
import { IdUpdate } from "../idUpdate";

export const UnderappreciatedCommentUpdateMany = builder.inputRef<any>("UnderappreciatedCommentUpdateMany").implement({
  fields: (t) => ({
    createdAt: t.field({ type: DateTimeUpdate, required: false }),
    updatedAt: t.field({ type: DateTimeUpdate, required: false }),
    gravityOverrideId: t.field({ type: IdUpdate, required: false }),
  }),
});
