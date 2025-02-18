import { builder } from "src/builder";

import { ClassifiedSillinessWhere } from "../classifiedSilliness/where";
import { DateTimeFilter } from "../dateTimeFilter";
import { IdFilter } from "../idFilter";

export const UnfinishedPrototypeWhere = builder.inputRef<any>("UnfinishedPrototypeWhere").implement({
  fields: (t) => ({
    id: t.field({ type: IdFilter, required: false }),
    createdAt: t.field({ type: DateTimeFilter, required: false }),
    updatedAt: t.field({ type: DateTimeFilter, required: false }),
    classifiedSilliness: t.field({ type: ClassifiedSillinessWhere, required: false }),
    classifiedSillinessId: t.field({ type: IdFilter, required: false }),
    AND: t.field({ type: [UnfinishedPrototypeWhere], required: false }),
    OR: t.field({ type: [UnfinishedPrototypeWhere], required: false }),
    NOT: t.field({ type: [UnfinishedPrototypeWhere], required: false }),
  }),
});
