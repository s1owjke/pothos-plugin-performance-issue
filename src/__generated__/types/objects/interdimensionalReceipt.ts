import { builder } from "src/builder";

export const InterdimensionalReceipt = builder.prismaObject("InterdimensionalReceipt", {
  fields: (t) => ({
    id: t.expose("id", { type: "ID", nullable: false }),
    createdAt: t.expose("createdAt", { type: "DateTime", nullable: false }),
    updatedAt: t.expose("updatedAt", { type: "DateTime", nullable: false }),
    schrodingerUser: t.relation("schrodingerUser", { nullable: false }),
    schrodingerUserId: t.expose("schrodingerUserId", { type: "ID", nullable: false }),
    singularityReport: t.relation("singularityReport", { nullable: false }),
    singularityReportId: t.expose("singularityReportId", { type: "ID", nullable: false }),
  }),
});
