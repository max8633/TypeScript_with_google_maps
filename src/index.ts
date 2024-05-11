import { User } from "./User";
import { Company } from "./Company";
import { CustomMap } from "./CustomMap";
import dotenv from "dotenv";

dotenv.config();
console.log(process.env.API_key)

const user = new User();
const company = new Company();
const customMap = new CustomMap('map');

customMap.addMarker(user);
customMap.addMarker(company);
