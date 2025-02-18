import { builder } from "src/builder";

import { UnfinishedPrototypeCreate } from "../../types/inputs/unfinishedPrototype/create";
import { UnfinishedPrototype } from "../../types/objects/unfinishedPrototype";

builder.mutationField("unfinishedPrototypeCreateBatch", (t) =>
  t.field({
    type: [UnfinishedPrototype],
    nullable: false,
    args: {
      data: t.arg({ type: [UnfinishedPrototypeCreate], required: true }),
    },
    resolve: (root, args, { dbRls }) => {
      return dbRls.$transaction(args.data.map((data) => dbRls.unfinishedPrototype.create({ data })));
    },
  }),
);
