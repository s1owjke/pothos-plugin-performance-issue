import { builder } from "src/builder";

export const EchoChamberCreateMany = builder.inputRef<any>("EchoChamberCreateMany").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: true }),
    updatedAt: t.field({ type: "DateTime", required: true }),
    artificialPotatoId: t.field({ type: "ID", required: true }),
    schrodingerUserId: t.field({ type: "ID", required: true }),
  }),
});
