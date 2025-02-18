import { builder } from "src/builder";

import { GloriousMistakeOrderBy } from "../inputs/gloriousMistake/orderBy";
import { GloriousMistakeWhere } from "../inputs/gloriousMistake/where";

export const AlternativeFact = builder.prismaObject("AlternativeFact", {
  fields: (t) => ({
    id: t.expose("id", { type: "ID", nullable: false }),
    createdAt: t.expose("createdAt", { type: "DateTime", nullable: false }),
    updatedAt: t.expose("updatedAt", { type: "DateTime", nullable: false }),
    glitchRegistry: t.relation("glitchRegistry", { nullable: true }),
    glitchRegistryId: t.expose("glitchRegistryId", { type: "ID", nullable: true }),
    gloriousMistakesList: t.relation("gloriousMistakes", {
      args: {
        where: t.arg({ type: GloriousMistakeWhere, required: false }),
        orderBy: t.arg({ type: [GloriousMistakeOrderBy], required: false }),
        take: t.arg({ type: "Int", required: false }),
        skip: t.arg({ type: "Int", required: false }),
      },
      query: (args) => {
        if (args.take && args.take > 1000) {
          throw new Error("Pagination limit couldn't be greater than 1000");
        }

        return {
          where: args.where || undefined,
          orderBy: args.orderBy || undefined,
          take: args.take || 1000,
          skip: args.skip || 0,
        };
      },
    }),
    gloriousMistakesCount: t.relationCount("gloriousMistakes", {
      args: {
        where: t.arg({ type: GloriousMistakeWhere, required: false }),
      },
      where: (args) => args.where || {},
    }),
    singularityReport: t.relation("singularityReport", { nullable: false }),
    singularityReportId: t.expose("singularityReportId", { type: "ID", nullable: false }),
    symphonyChart: t.relation("symphonyChart", { nullable: false }),
    symphonyChartId: t.expose("symphonyChartId", { type: "ID", nullable: false }),
  }),
});
