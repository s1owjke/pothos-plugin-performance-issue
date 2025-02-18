import { builder } from "src/builder";

export const SignalGridCreateMany = builder.inputRef<any>("SignalGridCreateMany").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: true }),
    updatedAt: t.field({ type: "DateTime", required: true }),
    schrodingerUserId: t.field({ type: "ID", required: true }),
  }),
});
