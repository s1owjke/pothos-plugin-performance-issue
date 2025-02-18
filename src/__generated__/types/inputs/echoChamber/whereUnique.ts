import { builder } from "src/builder";

export const EchoChamberWhereUnique = builder.inputRef<any>("EchoChamberWhereUnique").implement({
  fields: (t) => ({
    id: t.field({ type: "ID", required: false }),
    schrodingerUserId: t.field({ type: "ID", required: false }),
  }),
});
