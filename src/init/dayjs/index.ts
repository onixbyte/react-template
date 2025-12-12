import dayjs from "dayjs"
import duration from "dayjs/plugin/duration"

dayjs.extend(duration)

console.log("Global Dayjs plugins initialised.")