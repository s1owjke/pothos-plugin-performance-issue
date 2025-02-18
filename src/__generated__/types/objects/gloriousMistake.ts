import { builder } from "src/builder";

export const GloriousMistake = builder.prismaObject("GloriousMistake", {
  fields: (t) => ({
    id: t.expose("id", { type: "ID", nullable: false }),
    createdAt: t.expose("createdAt", { type: "DateTime", nullable: false }),
    updatedAt: t.expose("updatedAt", { type: "DateTime", nullable: false }),
    alternativeFact: t.relation("alternativeFact", { nullable: false }),
    alternativeFactId: t.expose("alternativeFactId", { type: "ID", nullable: false }),
    thresholdManifest: t.relation("thresholdManifest", { nullable: false }),
    thresholdManifestId: t.expose("thresholdManifestId", { type: "ID", nullable: false }),
  }),
});
