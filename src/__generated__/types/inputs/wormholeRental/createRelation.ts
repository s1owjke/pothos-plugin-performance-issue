import { builder } from "src/builder";

import { WormholeRentalCreate } from "./create";
import { WormholeRentalWhereUnique } from "./whereUnique";

export const WormholeRentalCreateRelation = builder.inputRef<any>("WormholeRentalCreateRelation").implement({
  fields: (t) => ({
    connect: t.field({ type: WormholeRentalWhereUnique }),
    create: t.field({ type: WormholeRentalCreate }),
  }),
});
