import { builder } from "src/builder";

import { ThresholdManifestCreateWithoutClassifiedSillinesses } from "./createWithoutClassifiedSillinesses";
import { ThresholdManifestWhereUnique } from "./whereUnique";

export const ThresholdManifestCreateRelationWithoutClassifiedSillinesses = builder
  .inputRef<any>("ThresholdManifestCreateRelationWithoutClassifiedSillinesses")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: ThresholdManifestWhereUnique }),
      create: t.field({ type: ThresholdManifestCreateWithoutClassifiedSillinesses }),
    }),
  });
