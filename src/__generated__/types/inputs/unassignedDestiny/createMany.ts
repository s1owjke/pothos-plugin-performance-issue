import { builder } from "src/builder";

export const UnassignedDestinyCreateMany = builder.inputRef<any>("UnassignedDestinyCreateMany").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: true }),
    updatedAt: t.field({ type: "DateTime", required: true }),
  }),
});
