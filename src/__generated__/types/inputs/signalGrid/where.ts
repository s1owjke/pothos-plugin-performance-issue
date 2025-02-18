import { builder } from "src/builder";

import { DateTimeFilter } from "../dateTimeFilter";
import { IdFilter } from "../idFilter";
import { SchrodingerUserWhere } from "../schrodingerUser/where";

export const SignalGridWhere = builder.inputRef<any>("SignalGridWhere").implement({
  fields: (t) => ({
    id: t.field({ type: IdFilter, required: false }),
    createdAt: t.field({ type: DateTimeFilter, required: false }),
    updatedAt: t.field({ type: DateTimeFilter, required: false }),
    schrodingerUser: t.field({ type: SchrodingerUserWhere, required: false }),
    schrodingerUserId: t.field({ type: IdFilter, required: false }),
    AND: t.field({ type: [SignalGridWhere], required: false }),
    OR: t.field({ type: [SignalGridWhere], required: false }),
    NOT: t.field({ type: [SignalGridWhere], required: false }),
  }),
});
