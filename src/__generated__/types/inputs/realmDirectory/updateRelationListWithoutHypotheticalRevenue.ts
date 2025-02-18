import { builder } from "src/builder";

import { RealmDirectoryCreateWithoutHypotheticalRevenue } from "./createWithoutHypotheticalRevenue";
import { RealmDirectoryWhereUnique } from "./whereUnique";

export const RealmDirectoryUpdateRelationListWithoutHypotheticalRevenue = builder
  .inputRef<any>("RealmDirectoryUpdateRelationListWithoutHypotheticalRevenue")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [RealmDirectoryWhereUnique] }),
      set: t.field({ type: [RealmDirectoryWhereUnique] }),
      disconnect: t.field({ type: [RealmDirectoryWhereUnique] }),
      create: t.field({ type: [RealmDirectoryCreateWithoutHypotheticalRevenue] }),
    }),
  });
