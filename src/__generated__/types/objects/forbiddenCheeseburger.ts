import { builder } from "src/builder";

import { StaticWhisperOrderBy } from "../inputs/staticWhisper/orderBy";
import { StaticWhisperWhere } from "../inputs/staticWhisper/where";

export const ForbiddenCheeseburger = builder.prismaObject("ForbiddenCheeseburger", {
  fields: (t) => ({
    id: t.expose("id", { type: "ID", nullable: false }),
    createdAt: t.expose("createdAt", { type: "DateTime", nullable: false }),
    updatedAt: t.expose("updatedAt", { type: "DateTime", nullable: false }),
    staticWhispersList: t.relation("staticWhispers", {
      args: {
        where: t.arg({ type: StaticWhisperWhere, required: false }),
        orderBy: t.arg({ type: [StaticWhisperOrderBy], required: false }),
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
    staticWhispersCount: t.relationCount("staticWhispers", {
      args: {
        where: t.arg({ type: StaticWhisperWhere, required: false }),
      },
      where: (args) => args.where || {},
    }),
    thresholdManifest: t.relation("thresholdManifest", { nullable: false }),
    thresholdManifestId: t.expose("thresholdManifestId", { type: "ID", nullable: false }),
  }),
});
