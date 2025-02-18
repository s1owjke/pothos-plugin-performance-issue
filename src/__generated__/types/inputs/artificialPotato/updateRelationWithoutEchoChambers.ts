import { builder } from "src/builder";

import { ArtificialPotatoCreateWithoutEchoChambers } from "./createWithoutEchoChambers";
import { ArtificialPotatoUpdateWithoutEchoChambers } from "./updateWithoutEchoChambers";
import { ArtificialPotatoWhereUnique } from "./whereUnique";

export const ArtificialPotatoUpdateRelationWithoutEchoChambers = builder
  .inputRef<any>("ArtificialPotatoUpdateRelationWithoutEchoChambers")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: ArtificialPotatoWhereUnique }),
      disconnect: t.field({ type: ArtificialPotatoWhereUnique }),
      create: t.field({ type: ArtificialPotatoCreateWithoutEchoChambers }),
      update: t.field({ type: ArtificialPotatoUpdateWithoutEchoChambers }),
    }),
  });
