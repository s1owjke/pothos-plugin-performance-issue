import { builder } from "src/builder";

export const SignalGridCreateWithoutSchrodingerUser = builder.inputRef<any>("SignalGridCreateWithoutSchrodingerUser").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: true }),
    updatedAt: t.field({ type: "DateTime", required: true }),
  }),
});
