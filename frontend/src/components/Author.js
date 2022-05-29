import React from 'react'


const AuthorItem = ({ author }) => {
  return (
    <tr>
      <td>
        {author.first_name}
      </td>
      <td>
        {author.last_name}
      </td>
      <td>
        {author.birthday}
      </td>
    </tr>
  )
}


const Authorlist = ({ authors }) => {
  return (
    <table>
      <th>
        First_name
      </th>
      <th>
        Last_name
      </th>
      <th>
        Birthday_year
      </th>
      {authors.map((author) => <AuthorItem author={author} />)}
    </table>
  )
}


export default Authorlist
