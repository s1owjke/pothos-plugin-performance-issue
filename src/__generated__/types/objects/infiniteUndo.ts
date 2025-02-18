import { builder } from "src/builder";

export const InfiniteUndo = builder.prismaObject("InfiniteUndo", {
  fields: (t) => ({
    id: t.expose("id", { type: "ID", nullable: false }),
    createdAt: t.expose("createdAt", { type: "DateTime", nullable: false }),
    updatedAt: t.expose("updatedAt", { type: "DateTime", nullable: false }),
    hypotheticalRevenue: t.relation("hypotheticalRevenue", { nullable: true }),
    thresholdManifest: t.relation("thresholdManifest", { nullable: true }),
    vortexReport: t.relation("vortexReport", { nullable: true }),
  }),
});
