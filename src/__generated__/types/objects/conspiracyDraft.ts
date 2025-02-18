import { builder } from "src/builder";

export const ConspiracyDraft = builder.prismaObject("ConspiracyDraft", {
  fields: (t) => ({
    id: t.expose("id", { type: "ID", nullable: false }),
    createdAt: t.expose("createdAt", { type: "DateTime", nullable: false }),
    updatedAt: t.expose("updatedAt", { type: "DateTime", nullable: false }),
    glitchRegistry: t.relation("glitchRegistry", { nullable: true }),
    glitchRegistryId: t.expose("glitchRegistryId", { type: "ID", nullable: true }),
    hypotheticalRevenue: t.relation("hypotheticalRevenue", { nullable: true }),
    hypotheticalRevenueId: t.expose("hypotheticalRevenueId", { type: "ID", nullable: true }),
    thresholdManifest: t.relation("thresholdManifest", { nullable: true }),
    thresholdManifestId: t.expose("thresholdManifestId", { type: "ID", nullable: true }),
    vortexReport: t.relation("vortexReport", { nullable: true }),
    vortexReportId: t.expose("vortexReportId", { type: "ID", nullable: true }),
  }),
});
