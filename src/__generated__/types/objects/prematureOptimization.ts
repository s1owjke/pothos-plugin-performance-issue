import { builder } from "src/builder";

import { OverwrittenLegacyOrderBy } from "../inputs/overwrittenLegacy/orderBy";
import { OverwrittenLegacyWhere } from "../inputs/overwrittenLegacy/where";

export const PrematureOptimization = builder.prismaObject("PrematureOptimization", {
  fields: (t) => ({
    id: t.expose("id", { type: "ID", nullable: false }),
    createdAt: t.expose("createdAt", { type: "DateTime", nullable: false }),
    updatedAt: t.expose("updatedAt", { type: "DateTime", nullable: false }),
    overwrittenLegaciesList: t.relation("overwrittenLegacies", {
      args: {
        where: t.arg({ type: OverwrittenLegacyWhere, required: false }),
        orderBy: t.arg({ type: [OverwrittenLegacyOrderBy], required: false }),
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
    overwrittenLegaciesCount: t.relationCount("overwrittenLegacies", {
      args: {
        where: t.arg({ type: OverwrittenLegacyWhere, required: false }),
      },
      where: (args) => args.where || {},
    }),
  }),
});
