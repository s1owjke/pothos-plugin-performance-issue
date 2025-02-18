import { builder } from "src/builder";

export const SignalGridUpdateWithoutSchrodingerUser = builder.inputRef<any>("SignalGridUpdateWithoutSchrodingerUser").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: false }),
    updatedAt: t.field({ type: "DateTime", required: false }),
  }),
});
