import { builder } from "src/builder";

import { DateTimeUpdate } from "../dateTimeUpdate";
import { IdUpdate } from "../idUpdate";

export const TeleportationFailureUpdateMany = builder.inputRef<any>("TeleportationFailureUpdateMany").implement({
  fields: (t) => ({
    createdAt: t.field({ type: DateTimeUpdate, required: false }),
    updatedAt: t.field({ type: DateTimeUpdate, required: false }),
    schrodingerUserId: t.field({ type: IdUpdate, required: false }),
    vortexReportId: t.field({ type: IdUpdate, required: false }),
  }),
});
