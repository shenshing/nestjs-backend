import { Transform } from "class-transformer";

export const TransformToNumber = () => Transform((value) => parseInt(value, 10), { toClassOnly: true }); // prettier-ignore
