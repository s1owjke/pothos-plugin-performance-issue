import { builder } from "src/builder";

import { RealmDirectoryCreate } from "./create";
import { RealmDirectoryWhereUnique } from "./whereUnique";

export const RealmDirectoryCreateRelation = builder.inputRef<any>("RealmDirectoryCreateRelation").implement({
  fields: (t) => ({
    connect: t.field({ type: RealmDirectoryWhereUnique }),
    create: t.field({ type: RealmDirectoryCreate }),
  }),
});
