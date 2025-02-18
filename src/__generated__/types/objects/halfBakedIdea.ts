import { builder } from "src/builder";

export const HalfBakedIdea = builder.prismaObject("HalfBakedIdea", {
  fields: (t) => ({
    id: t.expose("id", { type: "ID", nullable: false }),
    createdAt: t.expose("createdAt", { type: "DateTime", nullable: false }),
    updatedAt: t.expose("updatedAt", { type: "DateTime", nullable: false }),
    symphonyChart: t.relation("symphonyChart", { nullable: false }),
    symphonyChartId: t.expose("symphonyChartId", { type: "ID", nullable: false }),
    thresholdManifest: t.relation("thresholdManifest", { nullable: false }),
    thresholdManifestId: t.expose("thresholdManifestId", { type: "ID", nullable: false }),
  }),
});
