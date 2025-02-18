import { builder } from "src/builder";

import { ArtificialPotatoCreateWithoutEchoChambers } from "./createWithoutEchoChambers";
import { ArtificialPotatoWhereUnique } from "./whereUnique";

export const ArtificialPotatoCreateRelationListWithoutEchoChambers = builder
  .inputRef<any>("ArtificialPotatoCreateRelationListWithoutEchoChambers")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [ArtificialPotatoWhereUnique] }),
      create: t.field({ type: [ArtificialPotatoCreateWithoutEchoChambers] }),
    }),
  });
