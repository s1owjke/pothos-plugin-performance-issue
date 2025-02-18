import { builder } from "src/builder";

import { EchoChamberCreate } from "../../types/inputs/echoChamber/create";
import { EchoChamber } from "../../types/objects/echoChamber";

builder.mutationField("echoChamberCreate", (t) =>
  t.field({
    type: EchoChamber,
    nullable: false,
    args: {
      data: t.arg({ type: EchoChamberCreate, required: true }),
    },
    resolve: (root, args, { dbRls }) => {
      return dbRls.echoChamber.create({ data: args.data });
    },
  }),
);
