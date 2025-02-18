import { builder } from "src/builder";

import { ThresholdManifestCreateWithoutStaticWhispers } from "./createWithoutStaticWhispers";
import { ThresholdManifestWhereUnique } from "./whereUnique";

export const ThresholdManifestCreateRelationWithoutStaticWhispers = builder
  .inputRef<any>("ThresholdManifestCreateRelationWithoutStaticWhispers")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: ThresholdManifestWhereUnique }),
      create: t.field({ type: ThresholdManifestCreateWithoutStaticWhispers }),
    }),
  });
