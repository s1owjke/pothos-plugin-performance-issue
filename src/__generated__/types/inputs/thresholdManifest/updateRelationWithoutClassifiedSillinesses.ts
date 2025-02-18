import { builder } from "src/builder";

import { ThresholdManifestCreateWithoutClassifiedSillinesses } from "./createWithoutClassifiedSillinesses";
import { ThresholdManifestUpdateWithoutClassifiedSillinesses } from "./updateWithoutClassifiedSillinesses";
import { ThresholdManifestWhereUnique } from "./whereUnique";

export const ThresholdManifestUpdateRelationWithoutClassifiedSillinesses = builder
  .inputRef<any>("ThresholdManifestUpdateRelationWithoutClassifiedSillinesses")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: ThresholdManifestWhereUnique }),
      disconnect: t.field({ type: ThresholdManifestWhereUnique }),
      create: t.field({ type: ThresholdManifestCreateWithoutClassifiedSillinesses }),
      update: t.field({ type: ThresholdManifestUpdateWithoutClassifiedSillinesses }),
    }),
  });
