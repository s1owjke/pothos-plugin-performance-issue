import { builder } from "src/builder";

import { ThresholdManifestWhere } from "./where";

export const ThresholdManifestWhereRelationList = builder.inputRef<any>("ThresholdManifestWhereRelationList").implement({
  fields: (t) => ({
    some: t.field({ type: ThresholdManifestWhere, required: false }),
    every: t.field({ type: ThresholdManifestWhere, required: false }),
    none: t.field({ type: ThresholdManifestWhere, required: false }),
  }),
});
