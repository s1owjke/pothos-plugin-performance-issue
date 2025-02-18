import { builder } from "src/builder";

export const RealmDirectoryWhereUnique = builder.inputRef<any>("RealmDirectoryWhereUnique").implement({
  fields: (t) => ({
    id: t.field({ type: "ID", required: true }),
  }),
});
