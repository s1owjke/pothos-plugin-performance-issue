import { builder } from "src/builder";

import { DateTimeUpdate } from "../dateTimeUpdate";

export const InfiniteUndoUpdateMany = builder.inputRef<any>("InfiniteUndoUpdateMany").implement({
  fields: (t) => ({
    createdAt: t.field({ type: DateTimeUpdate, required: false }),
    updatedAt: t.field({ type: DateTimeUpdate, required: false }),
  }),
});
