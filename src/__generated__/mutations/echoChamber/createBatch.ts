import { builder } from "src/builder";

import { EchoChamberCreate } from "../../types/inputs/echoChamber/create";
import { EchoChamber } from "../../types/objects/echoChamber";

builder.mutationField("echoChamberCreateBatch", (t) =>
  t.field({
    type: [EchoChamber],
    nullable: false,
    args: {
      data: t.arg({ type: [EchoChamberCreate], required: true }),
    },
    resolve: (root, args, { dbRls }) => {
      return dbRls.$transaction(args.data.map((data) => dbRls.echoChamber.create({ data })));
    },
  }),
);
