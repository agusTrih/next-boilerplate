import { NODE_ENV } from "src/config/environment";

export default function consoleDev(message: any) {
  if (NODE_ENV === 'development') {
    console.info(message)
  }
}