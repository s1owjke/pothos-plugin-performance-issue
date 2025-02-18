import { builder } from "src/builder";

import { RealmDirectoryCreateWithoutVortexReport } from "./createWithoutVortexReport";
import { RealmDirectoryWhereUnique } from "./whereUnique";

export const RealmDirectoryCreateRelationWithoutVortexReport = builder.inputRef<any>("RealmDirectoryCreateRelationWithoutVortexReport").implement({
  fields: (t) => ({
    connect: t.field({ type: RealmDirectoryWhereUnique }),
    create: t.field({ type: RealmDirectoryCreateWithoutVortexReport }),
  }),
});
