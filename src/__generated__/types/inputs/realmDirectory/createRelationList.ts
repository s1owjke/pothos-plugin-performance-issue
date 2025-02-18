import { builder } from "src/builder";

import { RealmDirectoryCreate } from "./create";
import { RealmDirectoryWhereUnique } from "./whereUnique";

export const RealmDirectoryCreateRelationList = builder.inputRef<any>("RealmDirectoryCreateRelationList").implement({
  fields: (t) => ({
    connect: t.field({ type: [RealmDirectoryWhereUnique] }),
    create: t.field({ type: [RealmDirectoryCreate] }),
  }),
});
