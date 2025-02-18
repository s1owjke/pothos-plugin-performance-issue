import { builder } from "src/builder";

export const ForbiddenCheeseburgerCreateMany = builder.inputRef<any>("ForbiddenCheeseburgerCreateMany").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: true }),
    updatedAt: t.field({ type: "DateTime", required: true }),
    thresholdManifestId: t.field({ type: "ID", required: true }),
  }),
});
