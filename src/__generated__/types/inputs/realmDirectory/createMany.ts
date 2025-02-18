import { builder } from "src/builder";

export const RealmDirectoryCreateMany = builder.inputRef<any>("RealmDirectoryCreateMany").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: true }),
    updatedAt: t.field({ type: "DateTime", required: true }),
    unstableFrequencyId: t.field({ type: "ID", required: false }),
  }),
});
