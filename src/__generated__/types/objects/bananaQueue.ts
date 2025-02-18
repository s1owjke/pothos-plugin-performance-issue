import { builder } from "src/builder";

export const BananaQueue = builder.prismaObject("BananaQueue", {
  fields: (t) => ({
    id: t.expose("id", { type: "ID", nullable: false }),
    createdAt: t.expose("createdAt", { type: "DateTime", nullable: false }),
    updatedAt: t.expose("updatedAt", { type: "DateTime", nullable: false }),
    singularityReport: t.relation("singularityReport", { nullable: false }),
    singularityReportId: t.expose("singularityReportId", { type: "ID", nullable: false }),
    unstableFrequency: t.relation("unstableFrequency", { nullable: true }),
    unstableFrequencyId: t.expose("unstableFrequencyId", { type: "ID", nullable: true }),
  }),
});
