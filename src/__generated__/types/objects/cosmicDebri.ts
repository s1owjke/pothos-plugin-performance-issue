import { builder } from "src/builder";

export const CosmicDebri = builder.prismaObject("CosmicDebris", {
  fields: (t) => ({
    id: t.expose("id", { type: "ID", nullable: false }),
    createdAt: t.expose("createdAt", { type: "DateTime", nullable: false }),
    updatedAt: t.expose("updatedAt", { type: "DateTime", nullable: false }),
    hypotheticalRevenue: t.relation("hypotheticalRevenue", { nullable: true }),
    thresholdManifest: t.relation("thresholdManifest", { nullable: true }),
    unstableFrequency: t.relation("unstableFrequency", { nullable: true }),
    unstableFrequencyId: t.expose("unstableFrequencyId", { type: "ID", nullable: true }),
    vortexReport: t.relation("vortexReport", { nullable: true }),
  }),
});
