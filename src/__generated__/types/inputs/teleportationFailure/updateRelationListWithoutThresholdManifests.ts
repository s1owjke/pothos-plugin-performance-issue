import { builder } from "src/builder";

import { TeleportationFailureCreateWithoutThresholdManifests } from "./createWithoutThresholdManifests";
import { TeleportationFailureWhereUnique } from "./whereUnique";

export const TeleportationFailureUpdateRelationListWithoutThresholdManifests = builder
  .inputRef<any>("TeleportationFailureUpdateRelationListWithoutThresholdManifests")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [TeleportationFailureWhereUnique] }),
      set: t.field({ type: [TeleportationFailureWhereUnique] }),
      disconnect: t.field({ type: [TeleportationFailureWhereUnique] }),
      create: t.field({ type: [TeleportationFailureCreateWithoutThresholdManifests] }),
    }),
  });
