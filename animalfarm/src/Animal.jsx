export default function Animal({type,name,age}) {
  return (
    <li>
       <span>{type}</span> {name} / {age} years old
    </li>
  )
}
