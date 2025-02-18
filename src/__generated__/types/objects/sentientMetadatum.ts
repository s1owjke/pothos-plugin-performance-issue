import { builder } from "src/builder";

import { SpontaneousCombustionOrderBy } from "../inputs/spontaneousCombustion/orderBy";
import { SpontaneousCombustionWhere } from "../inputs/spontaneousCombustion/where";

export const SentientMetadatum = builder.prismaObject("SentientMetadata", {
  fields: (t) => ({
    id: t.expose("id", { type: "ID", nullable: false }),
    createdAt: t.expose("createdAt", { type: "DateTime", nullable: false }),
    updatedAt: t.expose("updatedAt", { type: "DateTime", nullable: false }),
    gravityOverride: t.relation("gravityOverride", { nullable: false }),
    gravityOverrideId: t.expose("gravityOverrideId", { type: "ID", nullable: false }),
    spontaneousCombustionsList: t.relation("spontaneousCombustions", {
      args: {
        where: t.arg({ type: SpontaneousCombustionWhere, required: false }),
        orderBy: t.arg({ type: [SpontaneousCombustionOrderBy], required: false }),
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
    spontaneousCombustionsCount: t.relationCount("spontaneousCombustions", {
      args: {
        where: t.arg({ type: SpontaneousCombustionWhere, required: false }),
      },
      where: (args) => args.where || {},
    }),
  }),
});
