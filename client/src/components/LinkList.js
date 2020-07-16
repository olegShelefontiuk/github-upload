import React from 'react'
import {Link} from 'react-router-dom'

export const LinkList = ({ links }) =>{
    if (!links.length) {
        return <p className="center">Немає жодних посилань</p>
    }
    return (
        <table>
            <thead>
            <tr>
                <th>Номер</th>
                <th>Оригінальна</th>
                <th>Коротка</th>
                <th>Відкрити</th>
            </tr>
            </thead>

            <tbody>
            { links.map((link, index) => {
                return(
                    <tr key={link._id}>
                        <th>{index + 1}</th>
                        <th>{link.from}</th>
                        <th>{link.to}</th>
                        <th>
                            <Link to={`/detail/${link._id}`}>Відкрити</Link>
                        </th>
                    </tr>
                )
            })}
            </tbody>
        </table>
    )
}