import { builder } from "src/builder";

import { DateTimeUpdate } from "../dateTimeUpdate";
import { IdUpdate } from "../idUpdate";

export const SignalGridUpdateMany = builder.inputRef<any>("SignalGridUpdateMany").implement({
  fields: (t) => ({
    createdAt: t.field({ type: DateTimeUpdate, required: false }),
    updatedAt: t.field({ type: DateTimeUpdate, required: false }),
    schrodingerUserId: t.field({ type: IdUpdate, required: false }),
  }),
});
