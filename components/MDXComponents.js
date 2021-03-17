import Image from 'next/image'
import CustomLink from './Link'
import ProsCard from '../components/ProsCard'
import ConsCard from '../components/ConsCard'
import Step from '../components/Step'



const MDXComponents = {
  Image,
  a: CustomLink,
  ConsCard,
  ProsCard,
  Step
}

export default MDXComponents
