import { builder } from "src/builder";

import { DateTimeFilter } from "../dateTimeFilter";
import { IdFilter } from "../idFilter";
import { UnstableFrequencyWhere } from "../unstableFrequency/where";

export const UnfinishedSymphonyWhere = builder.inputRef<any>("UnfinishedSymphonyWhere").implement({
  fields: (t) => ({
    id: t.field({ type: IdFilter, required: false }),
    createdAt: t.field({ type: DateTimeFilter, required: false }),
    updatedAt: t.field({ type: DateTimeFilter, required: false }),
    unstableFrequency: t.field({ type: UnstableFrequencyWhere, required: false }),
    unstableFrequencyId: t.field({ type: IdFilter, required: false }),
    AND: t.field({ type: [UnfinishedSymphonyWhere], required: false }),
    OR: t.field({ type: [UnfinishedSymphonyWhere], required: false }),
    NOT: t.field({ type: [UnfinishedSymphonyWhere], required: false }),
  }),
});
