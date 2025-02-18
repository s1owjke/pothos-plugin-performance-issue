import { builder } from "src/builder";

import { DateTimeUpdate } from "../dateTimeUpdate";
import { IdUpdate } from "../idUpdate";

export const GloriousMistakeUpdateMany = builder.inputRef<any>("GloriousMistakeUpdateMany").implement({
  fields: (t) => ({
    createdAt: t.field({ type: DateTimeUpdate, required: false }),
    updatedAt: t.field({ type: DateTimeUpdate, required: false }),
    alternativeFactId: t.field({ type: IdUpdate, required: false }),
    thresholdManifestId: t.field({ type: IdUpdate, required: false }),
  }),
});
