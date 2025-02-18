import { Prisma } from "@prisma/client";
import { GraphQLBoolean, GraphQLFloat, GraphQLID, GraphQLInt, GraphQLScalarType, GraphQLString } from "graphql";
import { GraphQLBigInt, GraphQLDate, GraphQLDateTime, GraphQLJSON } from "graphql-scalars";

import { builder } from "./builder";

import "./__generated__/mutations";
import "./__generated__/queries";

const stringifyValue = (value: unknown) => Object.prototype.toString.call(value);

builder.addScalarType("ID", GraphQLID, {});
builder.addScalarType("Boolean", GraphQLBoolean, {});
builder.addScalarType("Int", GraphQLInt, {});
builder.addScalarType("BigInt", GraphQLBigInt, {});
builder.addScalarType("Float", GraphQLFloat, {});
builder.addScalarType("String", GraphQLString, {});
builder.addScalarType("Date", GraphQLDate, {});
builder.addScalarType("DateTime", GraphQLDateTime, {});
builder.addScalarType("Json", GraphQLJSON, {});

builder.addScalarType(
  "Decimal",
  new GraphQLScalarType<Prisma.Decimal, number>({
    name: "Decimal",
    serialize: (value) => {
      if (!Prisma.Decimal.isDecimal(value)) {
        throw new Error(`Decimal couldn't serialize non-prisma decimal value: ${stringifyValue(value)}.`);
      }
      return (value as Prisma.Decimal).toNumber();
    },
    parseValue: (value) => {
      try {
        return new Prisma.Decimal(value as any);
      } catch (error) {
        throw new Error(`Decimal couldn't parse value: ${stringifyValue(value)}.`);
      }
    },
  }),
  {},
);

builder.queryType();
builder.mutationType();

export const buildSchema = () => builder.toSchema();
