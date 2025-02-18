import { builder } from "src/builder";

import { UnfinishedPrototypeCreate } from "../../types/inputs/unfinishedPrototype/create";
import { UnfinishedPrototype } from "../../types/objects/unfinishedPrototype";

builder.mutationField("unfinishedPrototypeCreate", (t) =>
  t.field({
    type: UnfinishedPrototype,
    nullable: false,
    args: {
      data: t.arg({ type: UnfinishedPrototypeCreate, required: true }),
    },
    resolve: (root, args, { dbRls }) => {
      return dbRls.unfinishedPrototype.create({ data: args.data });
    },
  }),
);
