import { builder } from "src/builder";

export const SignalGridWhereUnique = builder.inputRef<any>("SignalGridWhereUnique").implement({
  fields: (t) => ({
    id: t.field({ type: "ID", required: false }),
    schrodingerUserId: t.field({ type: "ID", required: false }),
  }),
});
