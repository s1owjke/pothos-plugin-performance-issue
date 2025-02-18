import { builder } from "src/builder";

import { RealmDirectoryCreate } from "./create";
import { RealmDirectoryUpdate } from "./update";
import { RealmDirectoryWhereUnique } from "./whereUnique";

export const RealmDirectoryUpdateRelation = builder.inputRef<any>("RealmDirectoryUpdateRelation").implement({
  fields: (t) => ({
    connect: t.field({ type: RealmDirectoryWhereUnique }),
    disconnect: t.field({ type: RealmDirectoryWhereUnique }),
    create: t.field({ type: RealmDirectoryCreate }),
    update: t.field({ type: RealmDirectoryUpdate }),
  }),
});
