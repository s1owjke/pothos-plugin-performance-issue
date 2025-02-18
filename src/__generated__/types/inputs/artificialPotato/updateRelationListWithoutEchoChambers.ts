import { builder } from "src/builder";

import { ArtificialPotatoCreateWithoutEchoChambers } from "./createWithoutEchoChambers";
import { ArtificialPotatoWhereUnique } from "./whereUnique";

export const ArtificialPotatoUpdateRelationListWithoutEchoChambers = builder
  .inputRef<any>("ArtificialPotatoUpdateRelationListWithoutEchoChambers")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [ArtificialPotatoWhereUnique] }),
      set: t.field({ type: [ArtificialPotatoWhereUnique] }),
      disconnect: t.field({ type: [ArtificialPotatoWhereUnique] }),
      create: t.field({ type: [ArtificialPotatoCreateWithoutEchoChambers] }),
    }),
  });
