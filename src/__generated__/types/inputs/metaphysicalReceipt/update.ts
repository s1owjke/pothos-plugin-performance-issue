import { builder } from "src/builder";

import { ThresholdManifestUpdateRelationWithoutMetaphysicalReceipt } from "../thresholdManifest/updateRelationWithoutMetaphysicalReceipt";

export const MetaphysicalReceiptUpdate = builder.inputRef<any>("MetaphysicalReceiptUpdate").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: false }),
    updatedAt: t.field({ type: "DateTime", required: false }),
    thresholdManifest: t.field({
      type: ThresholdManifestUpdateRelationWithoutMetaphysicalReceipt,
      required: false,
    }),
  }),
});
