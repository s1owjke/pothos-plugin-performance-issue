import { builder } from "src/builder";

import { DateTimeUpdate } from "../dateTimeUpdate";
import { IdUpdate } from "../idUpdate";
import { StringUpdate } from "../stringUpdate";

export const SpontaneousCombustionUpdateMany = builder.inputRef<any>("SpontaneousCombustionUpdateMany").implement({
  fields: (t) => ({
    createdAt: t.field({ type: DateTimeUpdate, required: false }),
    updatedAt: t.field({ type: DateTimeUpdate, required: false }),
    gravityOverrideId: t.field({ type: IdUpdate, required: false }),
    missingContextId: t.field({ type: IdUpdate, required: false }),
    sentientMetadataId: t.field({ type: IdUpdate, required: false }),
    symphonyChartId: t.field({ type: StringUpdate, required: false }),
  }),
});
