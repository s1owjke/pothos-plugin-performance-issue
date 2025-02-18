import { builder } from "src/builder";

export const TimeTravelLogWhereUnique = builder.inputRef<any>("TimeTravelLogWhereUnique").implement({
  fields: (t) => ({
    id: t.field({ type: "ID", required: true }),
  }),
});
