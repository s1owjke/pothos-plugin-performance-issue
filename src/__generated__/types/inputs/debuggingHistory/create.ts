import { builder } from "src/builder";

import { GravityOverrideCreateRelationWithoutDebuggingHistories } from "../gravityOverride/createRelationWithoutDebuggingHistories";

export const DebuggingHistoryCreate = builder.inputRef<any>("DebuggingHistoryCreate").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: true }),
    updatedAt: t.field({ type: "DateTime", required: true }),
    gravityOverride: t.field({
      type: GravityOverrideCreateRelationWithoutDebuggingHistories,
      required: true,
    }),
  }),
});
