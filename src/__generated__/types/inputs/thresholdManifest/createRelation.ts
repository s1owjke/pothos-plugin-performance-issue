import { builder } from "src/builder";

import { ThresholdManifestCreate } from "./create";
import { ThresholdManifestWhereUnique } from "./whereUnique";

export const ThresholdManifestCreateRelation = builder.inputRef<any>("ThresholdManifestCreateRelation").implement({
  fields: (t) => ({
    connect: t.field({ type: ThresholdManifestWhereUnique }),
    create: t.field({ type: ThresholdManifestCreate }),
  }),
});
