import { builder } from "src/builder";

import { ThresholdManifestCreateRelationWithoutMetaphysicalReceipt } from "../thresholdManifest/createRelationWithoutMetaphysicalReceipt";

export const MetaphysicalReceiptCreate = builder.inputRef<any>("MetaphysicalReceiptCreate").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: true }),
    updatedAt: t.field({ type: "DateTime", required: true }),
    thresholdManifest: t.field({
      type: ThresholdManifestCreateRelationWithoutMetaphysicalReceipt,
      required: false,
    }),
  }),
});
