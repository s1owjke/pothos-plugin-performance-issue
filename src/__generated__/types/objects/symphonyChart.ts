import { builder } from "src/builder";

import { AlternativeFactOrderBy } from "../inputs/alternativeFact/orderBy";
import { AlternativeFactWhere } from "../inputs/alternativeFact/where";
import { ClassifiedSillinessOrderBy } from "../inputs/classifiedSilliness/orderBy";
import { ClassifiedSillinessWhere } from "../inputs/classifiedSilliness/where";
import { EmotionalSupportTableOrderBy } from "../inputs/emotionalSupportTable/orderBy";
import { EmotionalSupportTableWhere } from "../inputs/emotionalSupportTable/where";
import { GlitchRegistryOrderBy } from "../inputs/glitchRegistry/orderBy";
import { GlitchRegistryWhere } from "../inputs/glitchRegistry/where";
import { HalfBakedIdeaOrderBy } from "../inputs/halfBakedIdea/orderBy";
import { HalfBakedIdeaWhere } from "../inputs/halfBakedIdea/where";
import { TeleportationFailureOrderBy } from "../inputs/teleportationFailure/orderBy";
import { TeleportationFailureWhere } from "../inputs/teleportationFailure/where";
import { ThoughtCacheOrderBy } from "../inputs/thoughtCache/orderBy";
import { ThoughtCacheWhere } from "../inputs/thoughtCache/where";

export const SymphonyChart = builder.prismaObject("SymphonyChart", {
  fields: (t) => ({
    id: t.expose("id", { type: "ID", nullable: false }),
    createdAt: t.expose("createdAt", { type: "DateTime", nullable: false }),
    updatedAt: t.expose("updatedAt", { type: "DateTime", nullable: false }),
    alternativeFactsList: t.relation("alternativeFacts", {
      args: {
        where: t.arg({ type: AlternativeFactWhere, required: false }),
        orderBy: t.arg({ type: [AlternativeFactOrderBy], required: false }),
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
    alternativeFactsCount: t.relationCount("alternativeFacts", {
      args: {
        where: t.arg({ type: AlternativeFactWhere, required: false }),
      },
      where: (args) => args.where || {},
    }),
    classifiedSillinessesList: t.relation("classifiedSillinesses", {
      args: {
        where: t.arg({ type: ClassifiedSillinessWhere, required: false }),
        orderBy: t.arg({ type: [ClassifiedSillinessOrderBy], required: false }),
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
    classifiedSillinessesCount: t.relationCount("classifiedSillinesses", {
      args: {
        where: t.arg({ type: ClassifiedSillinessWhere, required: false }),
      },
      where: (args) => args.where || {},
    }),
    emotionalSupportTablesList: t.relation("emotionalSupportTables", {
      args: {
        where: t.arg({ type: EmotionalSupportTableWhere, required: false }),
        orderBy: t.arg({ type: [EmotionalSupportTableOrderBy], required: false }),
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
    emotionalSupportTablesCount: t.relationCount("emotionalSupportTables", {
      args: {
        where: t.arg({ type: EmotionalSupportTableWhere, required: false }),
      },
      where: (args) => args.where || {},
    }),
    ghostRecord: t.relation("ghostRecord", { nullable: true }),
    ghostRecordId: t.expose("ghostRecordId", { type: "ID", nullable: true }),
    glitchRegistriesList: t.relation("glitchRegistries", {
      args: {
        where: t.arg({ type: GlitchRegistryWhere, required: false }),
        orderBy: t.arg({ type: [GlitchRegistryOrderBy], required: false }),
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
    glitchRegistriesCount: t.relationCount("glitchRegistries", {
      args: {
        where: t.arg({ type: GlitchRegistryWhere, required: false }),
      },
      where: (args) => args.where || {},
    }),
    halfBakedIdeasList: t.relation("halfBakedIdeas", {
      args: {
        where: t.arg({ type: HalfBakedIdeaWhere, required: false }),
        orderBy: t.arg({ type: [HalfBakedIdeaOrderBy], required: false }),
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
    halfBakedIdeasCount: t.relationCount("halfBakedIdeas", {
      args: {
        where: t.arg({ type: HalfBakedIdeaWhere, required: false }),
      },
      where: (args) => args.where || {},
    }),
    schrodingerUser: t.relation("schrodingerUser", { nullable: true }),
    schrodingerUserId: t.expose("schrodingerUserId", { type: "ID", nullable: true }),
    teleportationFailuresList: t.relation("teleportationFailures", {
      args: {
        where: t.arg({ type: TeleportationFailureWhere, required: false }),
        orderBy: t.arg({ type: [TeleportationFailureOrderBy], required: false }),
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
    teleportationFailuresCount: t.relationCount("teleportationFailures", {
      args: {
        where: t.arg({ type: TeleportationFailureWhere, required: false }),
      },
      where: (args) => args.where || {},
    }),
    thoughtCachesList: t.relation("thoughtCaches", {
      args: {
        where: t.arg({ type: ThoughtCacheWhere, required: false }),
        orderBy: t.arg({ type: [ThoughtCacheOrderBy], required: false }),
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
    thoughtCachesCount: t.relationCount("thoughtCaches", {
      args: {
        where: t.arg({ type: ThoughtCacheWhere, required: false }),
      },
      where: (args) => args.where || {},
    }),
    unstableFrequency: t.relation("unstableFrequency", { nullable: true }),
    unstableFrequencyId: t.expose("unstableFrequencyId", { type: "ID", nullable: true }),
  }),
});
