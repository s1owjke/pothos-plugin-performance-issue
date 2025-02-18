import { builder } from "src/builder";

export const PendingDisaster = builder.prismaObject("PendingDisaster", {
  fields: (t) => ({
    id: t.expose("id", { type: "ID", nullable: false }),
    createdAt: t.expose("createdAt", { type: "DateTime", nullable: false }),
    updatedAt: t.expose("updatedAt", { type: "DateTime", nullable: false }),
    emotionalSupportTable: t.relation("emotionalSupportTable", { nullable: true }),
    emotionalSupportTableId: t.expose("emotionalSupportTableId", { type: "ID", nullable: true }),
    glitchRegistry: t.relation("glitchRegistry", { nullable: true }),
    glitchRegistryId: t.expose("glitchRegistryId", { type: "ID", nullable: true }),
    thresholdManifest: t.relation("thresholdManifest", { nullable: true }),
    thresholdManifestId: t.expose("thresholdManifestId", { type: "ID", nullable: true }),
    unstableFrequency: t.relation("unstableFrequency", { nullable: true }),
    unstableFrequencyId: t.expose("unstableFrequencyId", { type: "ID", nullable: true }),
  }),
});
