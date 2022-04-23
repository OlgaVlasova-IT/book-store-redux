import { data } from '../data/data'
import { useState } from 'react'

export const  books = () => {

const [books] = useState( data)
return books;


}