import { builder } from "src/builder";

import { TeleportationFailureCreateWithoutThresholdManifests } from "./createWithoutThresholdManifests";
import { TeleportationFailureUpdateWithoutThresholdManifests } from "./updateWithoutThresholdManifests";
import { TeleportationFailureWhereUnique } from "./whereUnique";

export const TeleportationFailureUpdateRelationWithoutThresholdManifests = builder
  .inputRef<any>("TeleportationFailureUpdateRelationWithoutThresholdManifests")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: TeleportationFailureWhereUnique }),
      disconnect: t.field({ type: TeleportationFailureWhereUnique }),
      create: t.field({ type: TeleportationFailureCreateWithoutThresholdManifests }),
      update: t.field({ type: TeleportationFailureUpdateWithoutThresholdManifests }),
    }),
  });
