import { builder } from "src/builder";

import { PocketUniverseOrderBy } from "../inputs/pocketUniverse/orderBy";
import { PocketUniverseWhere } from "../inputs/pocketUniverse/where";

export const EndlessLoop = builder.prismaObject("EndlessLoop", {
  fields: (t) => ({
    id: t.expose("id", { type: "ID", nullable: false }),
    createdAt: t.expose("createdAt", { type: "DateTime", nullable: false }),
    updatedAt: t.expose("updatedAt", { type: "DateTime", nullable: false }),
    gravityOverride: t.relation("gravityOverride", { nullable: false }),
    gravityOverrideId: t.expose("gravityOverrideId", { type: "ID", nullable: false }),
    pocketUniversesList: t.relation("pocketUniverses", {
      args: {
        where: t.arg({ type: PocketUniverseWhere, required: false }),
        orderBy: t.arg({ type: [PocketUniverseOrderBy], required: false }),
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
    pocketUniversesCount: t.relationCount("pocketUniverses", {
      args: {
        where: t.arg({ type: PocketUniverseWhere, required: false }),
      },
      where: (args) => args.where || {},
    }),
  }),
});
