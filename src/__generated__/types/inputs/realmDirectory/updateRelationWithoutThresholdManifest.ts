import { builder } from "src/builder";

import { RealmDirectoryCreateWithoutThresholdManifest } from "./createWithoutThresholdManifest";
import { RealmDirectoryUpdateWithoutThresholdManifest } from "./updateWithoutThresholdManifest";
import { RealmDirectoryWhereUnique } from "./whereUnique";

export const RealmDirectoryUpdateRelationWithoutThresholdManifest = builder
  .inputRef<any>("RealmDirectoryUpdateRelationWithoutThresholdManifest")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: RealmDirectoryWhereUnique }),
      disconnect: t.field({ type: RealmDirectoryWhereUnique }),
      create: t.field({ type: RealmDirectoryCreateWithoutThresholdManifest }),
      update: t.field({ type: RealmDirectoryUpdateWithoutThresholdManifest }),
    }),
  });
