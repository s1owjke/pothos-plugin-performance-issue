import { builder } from "src/builder";

export const StaticWhisperCreateMany = builder.inputRef<any>("StaticWhisperCreateMany").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: true }),
    updatedAt: t.field({ type: "DateTime", required: true }),
    forbiddenCheeseburgerId: t.field({ type: "ID", required: true }),
    thresholdManifestId: t.field({ type: "ID", required: true }),
  }),
});
