import { builder } from "src/builder";

export const DebuggingHistory = builder.prismaObject("DebuggingHistory", {
  fields: (t) => ({
    id: t.expose("id", { type: "ID", nullable: false }),
    createdAt: t.expose("createdAt", { type: "DateTime", nullable: false }),
    updatedAt: t.expose("updatedAt", { type: "DateTime", nullable: false }),
    gravityOverride: t.relation("gravityOverride", { nullable: false }),
    gravityOverrideId: t.expose("gravityOverrideId", { type: "ID", nullable: false }),
  }),
});
