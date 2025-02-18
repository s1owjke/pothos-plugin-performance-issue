import { builder } from "src/builder";

import { GravityOverrideUpdateRelationWithoutDebuggingHistories } from "../gravityOverride/updateRelationWithoutDebuggingHistories";

export const DebuggingHistoryUpdate = builder.inputRef<any>("DebuggingHistoryUpdate").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: false }),
    updatedAt: t.field({ type: "DateTime", required: false }),
    gravityOverride: t.field({
      type: GravityOverrideUpdateRelationWithoutDebuggingHistories,
      required: false,
    }),
  }),
});
