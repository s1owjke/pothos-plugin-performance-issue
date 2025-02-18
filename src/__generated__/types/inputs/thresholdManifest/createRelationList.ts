import { builder } from "src/builder";

import { ThresholdManifestCreate } from "./create";
import { ThresholdManifestWhereUnique } from "./whereUnique";

export const ThresholdManifestCreateRelationList = builder.inputRef<any>("ThresholdManifestCreateRelationList").implement({
  fields: (t) => ({
    connect: t.field({ type: [ThresholdManifestWhereUnique] }),
    create: t.field({ type: [ThresholdManifestCreate] }),
  }),
});
