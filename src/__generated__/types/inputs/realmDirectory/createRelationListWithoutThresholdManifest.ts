import { builder } from "src/builder";

import { RealmDirectoryCreateWithoutThresholdManifest } from "./createWithoutThresholdManifest";
import { RealmDirectoryWhereUnique } from "./whereUnique";

export const RealmDirectoryCreateRelationListWithoutThresholdManifest = builder
  .inputRef<any>("RealmDirectoryCreateRelationListWithoutThresholdManifest")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [RealmDirectoryWhereUnique] }),
      create: t.field({ type: [RealmDirectoryCreateWithoutThresholdManifest] }),
    }),
  });
