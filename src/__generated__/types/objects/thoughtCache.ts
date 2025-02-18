import { builder } from "src/builder";

export const ThoughtCache = builder.prismaObject("ThoughtCache", {
  fields: (t) => ({
    id: t.expose("id", { type: "ID", nullable: false }),
    createdAt: t.expose("createdAt", { type: "DateTime", nullable: false }),
    updatedAt: t.expose("updatedAt", { type: "DateTime", nullable: false }),
    schrodingerUser: t.relation("schrodingerUser", { nullable: false }),
    schrodingerUserId: t.expose("schrodingerUserId", { type: "ID", nullable: false }),
    symphonyChart: t.relation("symphonyChart", { nullable: false }),
    symphonyChartId: t.expose("symphonyChartId", { type: "ID", nullable: false }),
  }),
});
