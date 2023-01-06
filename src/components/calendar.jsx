import "./calendar.css"

const monthNames = ['jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez']
const weekNames = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab']
const timeNumbers = ['8:00', '9:00', '10:00', '11:00', '14:00', '15:00', '16:00', '17:00']

const Calendar = () => {

    const date = new Date();
    const dayWeek = date.getDay();
    const day = date.getDate();
    const year = date.getFullYear()
    const month = date.getMonth()

    const nameMonth = monthNames[month]
    const week = weekNames[dayWeek]

    const firt = date.getDate() - date.getDay()

    function getWeeks() {
        const arrayWeeks = []

        for(let i = 0; i < 7; i++) {
            let next = new Date(date.getTime())
            next.setDate(firt + i)

            const nameweek = weekNames[next.getDay()]
            arrayWeeks.push(nameweek)
        }

        return arrayWeeks
    }

    function getNumber() {
        const numbersWeek = []

        for(let i = 0; i < 7; i++){
            let next = new Date(date.getTime())

            next.setDate(firt + i)

            const numberWeek = next.getDate()
            numbersWeek.push(numberWeek)
        }

        return numbersWeek
    }

    const weekDays = getWeeks()
    const numberDays = getNumber()

    return ( 
        <div>
            <h1 className="title">{nameMonth}</h1>
            <h2 className="sub-title">{year}</h2>

            <ul className="list">
                {
                    weekDays.map((date) => (
                        <li className="list-item">
                            <span>{date}</span>
                        </li>
                    ))
                }
            </ul>

            <ul className="list">
                {
                    numberDays.map((number) => (
                        <li className={`list-item ${day === number ? 'active' : ''}`}>
                            <span>{number}</span>
                            {
                                timeNumbers.map((times) => (
                                    <button>{times} hrs</button>
                                ))
                            }
                        </li>                     
                    ))
                }
            </ul>
        </div>
     );
}
 
export default Calendar;