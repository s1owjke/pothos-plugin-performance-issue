import { builder } from "src/builder";

export const InfiniteScrollLogCreateMany = builder.inputRef<any>("InfiniteScrollLogCreateMany").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: true }),
    updatedAt: t.field({ type: "DateTime", required: true }),
    schrodingerUserId: t.field({ type: "ID", required: true }),
    thresholdManifestId: t.field({ type: "ID", required: false }),
  }),
});
