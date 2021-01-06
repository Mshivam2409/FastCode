import icsToJson from "ics-to-json";

export default function IcsToJson(icsData) {
  const data = icsToJson(icsData);
  return data;
}
