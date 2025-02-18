import { builder } from "src/builder";

export const OverwrittenLegacyWhereUnique = builder.inputRef<any>("OverwrittenLegacyWhereUnique").implement({
  fields: (t) => ({
    id: t.field({ type: "ID", required: true }),
  }),
});
