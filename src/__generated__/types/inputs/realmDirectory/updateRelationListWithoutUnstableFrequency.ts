import { builder } from "src/builder";

import { RealmDirectoryCreateWithoutUnstableFrequency } from "./createWithoutUnstableFrequency";
import { RealmDirectoryWhereUnique } from "./whereUnique";

export const RealmDirectoryUpdateRelationListWithoutUnstableFrequency = builder
  .inputRef<any>("RealmDirectoryUpdateRelationListWithoutUnstableFrequency")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [RealmDirectoryWhereUnique] }),
      set: t.field({ type: [RealmDirectoryWhereUnique] }),
      disconnect: t.field({ type: [RealmDirectoryWhereUnique] }),
      create: t.field({ type: [RealmDirectoryCreateWithoutUnstableFrequency] }),
    }),
  });
