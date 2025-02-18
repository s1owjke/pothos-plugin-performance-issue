import { builder } from "src/builder";

export const HyperlinkedUnicornCreateMany = builder.inputRef<any>("HyperlinkedUnicornCreateMany").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: true }),
    updatedAt: t.field({ type: "DateTime", required: true }),
    gravityOverrideId: t.field({ type: "ID", required: true }),
  }),
});
