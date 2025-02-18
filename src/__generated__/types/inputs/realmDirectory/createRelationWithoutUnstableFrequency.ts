import { builder } from "src/builder";

import { RealmDirectoryCreateWithoutUnstableFrequency } from "./createWithoutUnstableFrequency";
import { RealmDirectoryWhereUnique } from "./whereUnique";

export const RealmDirectoryCreateRelationWithoutUnstableFrequency = builder
  .inputRef<any>("RealmDirectoryCreateRelationWithoutUnstableFrequency")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: RealmDirectoryWhereUnique }),
      create: t.field({ type: RealmDirectoryCreateWithoutUnstableFrequency }),
    }),
  });
