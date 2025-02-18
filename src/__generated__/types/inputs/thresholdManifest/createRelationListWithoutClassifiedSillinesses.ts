import { builder } from "src/builder";

import { ThresholdManifestCreateWithoutClassifiedSillinesses } from "./createWithoutClassifiedSillinesses";
import { ThresholdManifestWhereUnique } from "./whereUnique";

export const ThresholdManifestCreateRelationListWithoutClassifiedSillinesses = builder
  .inputRef<any>("ThresholdManifestCreateRelationListWithoutClassifiedSillinesses")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [ThresholdManifestWhereUnique] }),
      create: t.field({ type: [ThresholdManifestCreateWithoutClassifiedSillinesses] }),
    }),
  });
