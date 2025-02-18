import { builder } from "src/builder";

import { RealmDirectoryCreateWithoutThresholdManifest } from "./createWithoutThresholdManifest";
import { RealmDirectoryWhereUnique } from "./whereUnique";

export const RealmDirectoryUpdateRelationListWithoutThresholdManifest = builder
  .inputRef<any>("RealmDirectoryUpdateRelationListWithoutThresholdManifest")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [RealmDirectoryWhereUnique] }),
      set: t.field({ type: [RealmDirectoryWhereUnique] }),
      disconnect: t.field({ type: [RealmDirectoryWhereUnique] }),
      create: t.field({ type: [RealmDirectoryCreateWithoutThresholdManifest] }),
    }),
  });
