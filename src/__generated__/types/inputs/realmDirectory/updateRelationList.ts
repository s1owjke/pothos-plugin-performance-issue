import { builder } from "src/builder";

import { RealmDirectoryCreate } from "./create";
import { RealmDirectoryWhereUnique } from "./whereUnique";

export const RealmDirectoryUpdateRelationList = builder.inputRef<any>("RealmDirectoryUpdateRelationList").implement({
  fields: (t) => ({
    connect: t.field({ type: [RealmDirectoryWhereUnique] }),
    set: t.field({ type: [RealmDirectoryWhereUnique] }),
    disconnect: t.field({ type: [RealmDirectoryWhereUnique] }),
    create: t.field({ type: [RealmDirectoryCreate] }),
  }),
});
