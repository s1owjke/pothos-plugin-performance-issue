import { builder } from "src/builder";

export const MissingContextCreateMany = builder.inputRef<any>("MissingContextCreateMany").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: true }),
    updatedAt: t.field({ type: "DateTime", required: true }),
    gravityOverrideId: t.field({ type: "ID", required: true }),
    portalIndexId: t.field({ type: "ID", required: false }),
  }),
});
