import { builder } from "src/builder";

import { ThresholdManifestCreateWithoutStaticWhispers } from "./createWithoutStaticWhispers";
import { ThresholdManifestWhereUnique } from "./whereUnique";

export const ThresholdManifestCreateRelationListWithoutStaticWhispers = builder
  .inputRef<any>("ThresholdManifestCreateRelationListWithoutStaticWhispers")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [ThresholdManifestWhereUnique] }),
      create: t.field({ type: [ThresholdManifestCreateWithoutStaticWhispers] }),
    }),
  });
