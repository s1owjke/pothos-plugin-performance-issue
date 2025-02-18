import { builder } from "src/builder";

export const UnfinishedPrototype = builder.prismaObject("UnfinishedPrototype", {
  fields: (t) => ({
    id: t.expose("id", { type: "ID", nullable: false }),
    createdAt: t.expose("createdAt", { type: "DateTime", nullable: false }),
    updatedAt: t.expose("updatedAt", { type: "DateTime", nullable: false }),
    classifiedSilliness: t.relation("classifiedSilliness", { nullable: false }),
    classifiedSillinessId: t.expose("classifiedSillinessId", { type: "ID", nullable: false }),
  }),
});
