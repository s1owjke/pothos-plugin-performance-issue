import { builder } from "src/builder";

import { RealmDirectoryCreateWithoutHypotheticalRevenue } from "./createWithoutHypotheticalRevenue";
import { RealmDirectoryUpdateWithoutHypotheticalRevenue } from "./updateWithoutHypotheticalRevenue";
import { RealmDirectoryWhereUnique } from "./whereUnique";

export const RealmDirectoryUpdateRelationWithoutHypotheticalRevenue = builder
  .inputRef<any>("RealmDirectoryUpdateRelationWithoutHypotheticalRevenue")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: RealmDirectoryWhereUnique }),
      disconnect: t.field({ type: RealmDirectoryWhereUnique }),
      create: t.field({ type: RealmDirectoryCreateWithoutHypotheticalRevenue }),
      update: t.field({ type: RealmDirectoryUpdateWithoutHypotheticalRevenue }),
    }),
  });
