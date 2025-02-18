import { builder } from "src/builder";

import { DoomedExperimentOrderBy } from "../inputs/doomedExperiment/orderBy";
import { DoomedExperimentWhere } from "../inputs/doomedExperiment/where";
import { UnderappreciatedCommentOrderBy } from "../inputs/underappreciatedComment/orderBy";
import { UnderappreciatedCommentWhere } from "../inputs/underappreciatedComment/where";

export const SpontaneousCombustion = builder.prismaObject("SpontaneousCombustion", {
  fields: (t) => ({
    id: t.expose("id", { type: "ID", nullable: false }),
    createdAt: t.expose("createdAt", { type: "DateTime", nullable: false }),
    updatedAt: t.expose("updatedAt", { type: "DateTime", nullable: false }),
    doomedExperimentsList: t.relation("doomedExperiments", {
      args: {
        where: t.arg({ type: DoomedExperimentWhere, required: false }),
        orderBy: t.arg({ type: [DoomedExperimentOrderBy], required: false }),
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
    doomedExperimentsCount: t.relationCount("doomedExperiments", {
      args: {
        where: t.arg({ type: DoomedExperimentWhere, required: false }),
      },
      where: (args) => args.where || {},
    }),
    gravityOverride: t.relation("gravityOverride", { nullable: true }),
    gravityOverrideId: t.expose("gravityOverrideId", { type: "ID", nullable: true }),
    missingContext: t.relation("missingContext", { nullable: true }),
    missingContextId: t.expose("missingContextId", { type: "ID", nullable: true }),
    sentientMetadata: t.relation("sentientMetadata", { nullable: true }),
    sentientMetadataId: t.expose("sentientMetadataId", { type: "ID", nullable: true }),
    symphonyChartId: t.expose("symphonyChartId", { type: "String", nullable: true }),
    underappreciatedCommentsList: t.relation("underappreciatedComments", {
      args: {
        where: t.arg({ type: UnderappreciatedCommentWhere, required: false }),
        orderBy: t.arg({ type: [UnderappreciatedCommentOrderBy], required: false }),
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
    underappreciatedCommentsCount: t.relationCount("underappreciatedComments", {
      args: {
        where: t.arg({ type: UnderappreciatedCommentWhere, required: false }),
      },
      where: (args) => args.where || {},
    }),
  }),
});
