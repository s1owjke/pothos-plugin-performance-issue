import { builder } from "src/builder";

import { RealmDirectoryCreateWithoutVortexReport } from "./createWithoutVortexReport";
import { RealmDirectoryWhereUnique } from "./whereUnique";

export const RealmDirectoryUpdateRelationListWithoutVortexReport = builder
  .inputRef<any>("RealmDirectoryUpdateRelationListWithoutVortexReport")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [RealmDirectoryWhereUnique] }),
      set: t.field({ type: [RealmDirectoryWhereUnique] }),
      disconnect: t.field({ type: [RealmDirectoryWhereUnique] }),
      create: t.field({ type: [RealmDirectoryCreateWithoutVortexReport] }),
    }),
  });
