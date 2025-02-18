import { builder } from "src/builder";

import { RealmDirectoryCreateWithoutHypotheticalRevenue } from "./createWithoutHypotheticalRevenue";
import { RealmDirectoryWhereUnique } from "./whereUnique";

export const RealmDirectoryCreateRelationWithoutHypotheticalRevenue = builder
  .inputRef<any>("RealmDirectoryCreateRelationWithoutHypotheticalRevenue")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: RealmDirectoryWhereUnique }),
      create: t.field({ type: RealmDirectoryCreateWithoutHypotheticalRevenue }),
    }),
  });
