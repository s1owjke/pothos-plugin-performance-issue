import { builder } from "src/builder";

import { DateTimeUpdate } from "../dateTimeUpdate";
import { IdUpdate } from "../idUpdate";

export const LostAndNeverFoundUpdateMany = builder.inputRef<any>("LostAndNeverFoundUpdateMany").implement({
  fields: (t) => ({
    createdAt: t.field({ type: DateTimeUpdate, required: false }),
    updatedAt: t.field({ type: DateTimeUpdate, required: false }),
    hypotheticalRevenueId: t.field({ type: IdUpdate, required: false }),
    schrodingerUserId: t.field({ type: IdUpdate, required: false }),
  }),
});
