import Image from 'next/image'
import CustomLink from './Link'
import ProsCard from '../components/ProsCard'
import ConsCard from '../components/ConsCard'



const MDXComponents = {
  Image,
  a: CustomLink,
  ConsCard,
  ProsCard,
}

export default MDXComponents
