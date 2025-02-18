import { builder } from "src/builder";

import { UnfinishedPrototypeUpdate } from "../../types/inputs/unfinishedPrototype/update";
import { UnfinishedPrototypeWhereUnique } from "../../types/inputs/unfinishedPrototype/whereUnique";
import { UnfinishedPrototype } from "../../types/objects/unfinishedPrototype";

builder.mutationField("unfinishedPrototypeUpdate", (t) =>
  t.field({
    type: UnfinishedPrototype,
    nullable: false,
    args: {
      where: t.arg({ type: UnfinishedPrototypeWhereUnique, required: true }),
      data: t.arg({ type: UnfinishedPrototypeUpdate, required: true }),
    },
    resolve: (root, args, { dbRls }) => {
      return dbRls.unfinishedPrototype.update({
        where: args.where,
        data: args.data,
      });
    },
  }),
);
