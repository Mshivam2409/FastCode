import axios from "axios"
import icsToJson from '../util/IcsToJson'

export default async function getCodeforcesCalender(): Promise<string> {
    const url = 'https://calendar.google.com/calendar/ical/k23j233gtcvau7a8ulk2p360m4%40group.calendar.google.com/public/basic.ics'
    var calender: string = ''
    axios.get(url, {
        responseType: 'text'
    }).then((resp) => {
        calender = icsToJson(resp.data)
    }).catch()
    console.log(calender)
    return calender;
}