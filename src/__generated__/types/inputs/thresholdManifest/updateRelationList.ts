import { builder } from "src/builder";

import { ThresholdManifestCreate } from "./create";
import { ThresholdManifestWhereUnique } from "./whereUnique";

export const ThresholdManifestUpdateRelationList = builder.inputRef<any>("ThresholdManifestUpdateRelationList").implement({
  fields: (t) => ({
    connect: t.field({ type: [ThresholdManifestWhereUnique] }),
    set: t.field({ type: [ThresholdManifestWhereUnique] }),
    disconnect: t.field({ type: [ThresholdManifestWhereUnique] }),
    create: t.field({ type: [ThresholdManifestCreate] }),
  }),
});
