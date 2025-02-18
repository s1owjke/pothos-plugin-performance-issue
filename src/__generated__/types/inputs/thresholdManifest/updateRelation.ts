import { builder } from "src/builder";

import { ThresholdManifestCreate } from "./create";
import { ThresholdManifestUpdate } from "./update";
import { ThresholdManifestWhereUnique } from "./whereUnique";

export const ThresholdManifestUpdateRelation = builder.inputRef<any>("ThresholdManifestUpdateRelation").implement({
  fields: (t) => ({
    connect: t.field({ type: ThresholdManifestWhereUnique }),
    disconnect: t.field({ type: ThresholdManifestWhereUnique }),
    create: t.field({ type: ThresholdManifestCreate }),
    update: t.field({ type: ThresholdManifestUpdate }),
  }),
});
