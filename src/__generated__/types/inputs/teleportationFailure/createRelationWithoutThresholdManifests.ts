import { builder } from "src/builder";

import { TeleportationFailureCreateWithoutThresholdManifests } from "./createWithoutThresholdManifests";
import { TeleportationFailureWhereUnique } from "./whereUnique";

export const TeleportationFailureCreateRelationWithoutThresholdManifests = builder
  .inputRef<any>("TeleportationFailureCreateRelationWithoutThresholdManifests")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: TeleportationFailureWhereUnique }),
      create: t.field({ type: TeleportationFailureCreateWithoutThresholdManifests }),
    }),
  });
