import { builder } from "src/builder";

export const UnnecessaryPermissionWhereUnique = builder.inputRef<any>("UnnecessaryPermissionWhereUnique").implement({
  fields: (t) => ({
    id: t.field({ type: "ID", required: true }),
  }),
});
