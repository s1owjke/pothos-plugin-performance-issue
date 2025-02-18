import schemaBuilder from "@pothos/core";
import prismaPlugin from "@pothos/plugin-prisma";
import PrismaTypes from "@pothos/plugin-prisma/generated";
import { Prisma, PrismaClient } from "@prisma/client";

import transformInputsPlugin from "src/plugins/transformInputs";

export type PothosTypes = PothosSchemaTypes.ExtendDefaultTypes<{
  DefaultFieldNullability: false;
  Context: { dbRls: PrismaClient };
  PrismaTypes: PrismaTypes;
  Scalars: {
    ID: { Input: string; Output: string };
    Boolean: { Input: boolean; Output: boolean };
    Int: { Input: number; Output: number };
    BigInt: { Input: bigint; Output: bigint };
    Float: { Input: number; Output: number };
    Decimal: { Input: Prisma.Decimal; Output: Prisma.Decimal };
    String: { Input: string; Output: string };
    Date: { Input: Date; Output: Date | string };
    DateTime: { Input: Date; Output: Date | string };
    Json: { Input: unknown; Output: unknown };
  };
}>;

export const builder: PothosSchemaTypes.SchemaBuilder<PothosTypes> = new schemaBuilder({
  defaultFieldNullability: false,
  plugins: [prismaPlugin, transformInputsPlugin],
  prisma: {
    client: ({ dbRls }) => dbRls,
    dmmf: Prisma.dmmf,
    filterConnectionTotalCount: true,
  },
});
