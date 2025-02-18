import { builder } from "src/builder";

export const InfiniteScrollLogWhereUnique = builder.inputRef<any>("InfiniteScrollLogWhereUnique").implement({
  fields: (t) => ({
    id: t.field({ type: "ID", required: false }),
    schrodingerUserId: t.field({ type: "ID", required: false }),
  }),
});
