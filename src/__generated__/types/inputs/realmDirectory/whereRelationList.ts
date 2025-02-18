import { builder } from "src/builder";

import { RealmDirectoryWhere } from "./where";

export const RealmDirectoryWhereRelationList = builder.inputRef<any>("RealmDirectoryWhereRelationList").implement({
  fields: (t) => ({
    some: t.field({ type: RealmDirectoryWhere, required: false }),
    every: t.field({ type: RealmDirectoryWhere, required: false }),
    none: t.field({ type: RealmDirectoryWhere, required: false }),
  }),
});
