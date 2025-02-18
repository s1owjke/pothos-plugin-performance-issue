import { builder } from "src/builder";

import { HyperlinkedUnicornOrderBy } from "../inputs/hyperlinkedUnicorn/orderBy";
import { HyperlinkedUnicornWhere } from "../inputs/hyperlinkedUnicorn/where";
import { SecretSauceOrderBy } from "../inputs/secretSauce/orderBy";
import { SecretSauceWhere } from "../inputs/secretSauce/where";

export const RecursiveRecursion = builder.prismaObject("RecursiveRecursion", {
  fields: (t) => ({
    id: t.expose("id", { type: "ID", nullable: false }),
    createdAt: t.expose("createdAt", { type: "DateTime", nullable: false }),
    updatedAt: t.expose("updatedAt", { type: "DateTime", nullable: false }),
    gravityOverride: t.relation("gravityOverride", { nullable: false }),
    gravityOverrideId: t.expose("gravityOverrideId", { type: "ID", nullable: false }),
    hyperlinkedUnicornsList: t.relation("hyperlinkedUnicorns", {
      args: {
        where: t.arg({ type: HyperlinkedUnicornWhere, required: false }),
        orderBy: t.arg({ type: [HyperlinkedUnicornOrderBy], required: false }),
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
    hyperlinkedUnicornsCount: t.relationCount("hyperlinkedUnicorns", {
      args: {
        where: t.arg({ type: HyperlinkedUnicornWhere, required: false }),
      },
      where: (args) => args.where || {},
    }),
    secretSaucesList: t.relation("secretSauces", {
      args: {
        where: t.arg({ type: SecretSauceWhere, required: false }),
        orderBy: t.arg({ type: [SecretSauceOrderBy], required: false }),
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
    secretSaucesCount: t.relationCount("secretSauces", {
      args: {
        where: t.arg({ type: SecretSauceWhere, required: false }),
      },
      where: (args) => args.where || {},
    }),
  }),
});
