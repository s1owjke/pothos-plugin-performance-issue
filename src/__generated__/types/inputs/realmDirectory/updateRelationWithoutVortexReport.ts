import { builder } from "src/builder";

import { RealmDirectoryCreateWithoutVortexReport } from "./createWithoutVortexReport";
import { RealmDirectoryUpdateWithoutVortexReport } from "./updateWithoutVortexReport";
import { RealmDirectoryWhereUnique } from "./whereUnique";

export const RealmDirectoryUpdateRelationWithoutVortexReport = builder.inputRef<any>("RealmDirectoryUpdateRelationWithoutVortexReport").implement({
  fields: (t) => ({
    connect: t.field({ type: RealmDirectoryWhereUnique }),
    disconnect: t.field({ type: RealmDirectoryWhereUnique }),
    create: t.field({ type: RealmDirectoryCreateWithoutVortexReport }),
    update: t.field({ type: RealmDirectoryUpdateWithoutVortexReport }),
  }),
});
