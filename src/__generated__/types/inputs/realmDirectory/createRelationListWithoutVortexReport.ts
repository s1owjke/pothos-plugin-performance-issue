import { builder } from "src/builder";

import { RealmDirectoryCreateWithoutVortexReport } from "./createWithoutVortexReport";
import { RealmDirectoryWhereUnique } from "./whereUnique";

export const RealmDirectoryCreateRelationListWithoutVortexReport = builder
  .inputRef<any>("RealmDirectoryCreateRelationListWithoutVortexReport")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [RealmDirectoryWhereUnique] }),
      create: t.field({ type: [RealmDirectoryCreateWithoutVortexReport] }),
    }),
  });
