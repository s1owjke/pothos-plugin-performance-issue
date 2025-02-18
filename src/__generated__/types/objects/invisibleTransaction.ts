import { builder } from "src/builder";

export const InvisibleTransaction = builder.prismaObject("InvisibleTransaction", {
  fields: (t) => ({
    id: t.expose("id", { type: "ID", nullable: false }),
    createdAt: t.expose("createdAt", { type: "DateTime", nullable: false }),
    updatedAt: t.expose("updatedAt", { type: "DateTime", nullable: false }),
    artificialPotato: t.relation("artificialPotato", { nullable: false }),
    artificialPotatoId: t.expose("artificialPotatoId", { type: "ID", nullable: false }),
  }),
});
