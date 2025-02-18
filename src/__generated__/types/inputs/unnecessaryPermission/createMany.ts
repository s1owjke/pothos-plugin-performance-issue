import { builder } from "src/builder";

export const UnnecessaryPermissionCreateMany = builder.inputRef<any>("UnnecessaryPermissionCreateMany").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: true }),
    updatedAt: t.field({ type: "DateTime", required: true }),
  }),
});
