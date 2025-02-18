import { builder } from "src/builder";

import { RealmDirectoryCreateWithoutThresholdManifest } from "./createWithoutThresholdManifest";
import { RealmDirectoryWhereUnique } from "./whereUnique";

export const RealmDirectoryCreateRelationWithoutThresholdManifest = builder
  .inputRef<any>("RealmDirectoryCreateRelationWithoutThresholdManifest")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: RealmDirectoryWhereUnique }),
      create: t.field({ type: RealmDirectoryCreateWithoutThresholdManifest }),
    }),
  });
