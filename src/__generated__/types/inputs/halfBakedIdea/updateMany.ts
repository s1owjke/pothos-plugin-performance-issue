import { builder } from "src/builder";

import { DateTimeUpdate } from "../dateTimeUpdate";
import { IdUpdate } from "../idUpdate";

export const HalfBakedIdeaUpdateMany = builder.inputRef<any>("HalfBakedIdeaUpdateMany").implement({
  fields: (t) => ({
    createdAt: t.field({ type: DateTimeUpdate, required: false }),
    updatedAt: t.field({ type: DateTimeUpdate, required: false }),
    symphonyChartId: t.field({ type: IdUpdate, required: false }),
    thresholdManifestId: t.field({ type: IdUpdate, required: false }),
  }),
});
