import { builder } from "src/builder";

import { RealmDirectoryCreateWithoutUnstableFrequency } from "./createWithoutUnstableFrequency";
import { RealmDirectoryUpdateWithoutUnstableFrequency } from "./updateWithoutUnstableFrequency";
import { RealmDirectoryWhereUnique } from "./whereUnique";

export const RealmDirectoryUpdateRelationWithoutUnstableFrequency = builder
  .inputRef<any>("RealmDirectoryUpdateRelationWithoutUnstableFrequency")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: RealmDirectoryWhereUnique }),
      disconnect: t.field({ type: RealmDirectoryWhereUnique }),
      create: t.field({ type: RealmDirectoryCreateWithoutUnstableFrequency }),
      update: t.field({ type: RealmDirectoryUpdateWithoutUnstableFrequency }),
    }),
  });
