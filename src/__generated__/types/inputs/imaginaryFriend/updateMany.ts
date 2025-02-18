import { builder } from "src/builder";

import { DateTimeUpdate } from "../dateTimeUpdate";
import { IdUpdate } from "../idUpdate";

export const ImaginaryFriendUpdateMany = builder.inputRef<any>("ImaginaryFriendUpdateMany").implement({
  fields: (t) => ({
    createdAt: t.field({ type: DateTimeUpdate, required: false }),
    updatedAt: t.field({ type: DateTimeUpdate, required: false }),
    hypotheticalRevenueId: t.field({ type: IdUpdate, required: false }),
    lostAndNeverFoundId: t.field({ type: IdUpdate, required: false }),
    unassignedDestinyId: t.field({ type: IdUpdate, required: false }),
    unstableFrequencyId: t.field({ type: IdUpdate, required: false }),
    unstableFrequencyId2: t.field({ type: IdUpdate, required: false }),
  }),
});
