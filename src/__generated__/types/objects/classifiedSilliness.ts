import { builder } from "src/builder";

import { UnfinishedPrototypeOrderBy } from "../inputs/unfinishedPrototype/orderBy";
import { UnfinishedPrototypeWhere } from "../inputs/unfinishedPrototype/where";

export const ClassifiedSilliness = builder.prismaObject("ClassifiedSilliness", {
  fields: (t) => ({
    id: t.expose("id", { type: "ID", nullable: false }),
    createdAt: t.expose("createdAt", { type: "DateTime", nullable: false }),
    updatedAt: t.expose("updatedAt", { type: "DateTime", nullable: false }),
    ghostRecord: t.relation("ghostRecord", { nullable: true }),
    ghostRecordId: t.expose("ghostRecordId", { type: "ID", nullable: true }),
    portalIndex: t.relation("portalIndex", { nullable: true }),
    portalIndexId: t.expose("portalIndexId", { type: "ID", nullable: true }),
    symphonyChart: t.relation("symphonyChart", { nullable: false }),
    symphonyChartId: t.expose("symphonyChartId", { type: "ID", nullable: false }),
    thresholdManifest: t.relation("thresholdManifest", { nullable: false }),
    thresholdManifestId: t.expose("thresholdManifestId", { type: "ID", nullable: false }),
    unfinishedPrototypesList: t.relation("unfinishedPrototypes", {
      args: {
        where: t.arg({ type: UnfinishedPrototypeWhere, required: false }),
        orderBy: t.arg({ type: [UnfinishedPrototypeOrderBy], required: false }),
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
    unfinishedPrototypesCount: t.relationCount("unfinishedPrototypes", {
      args: {
        where: t.arg({ type: UnfinishedPrototypeWhere, required: false }),
      },
      where: (args) => args.where || {},
    }),
    unstableFrequency: t.relation("unstableFrequency", { nullable: true }),
    unstableFrequencyId: t.expose("unstableFrequencyId", { type: "ID", nullable: true }),
  }),
});
