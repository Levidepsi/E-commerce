import logo from '@/public/logo.png'
import Image from 'next/image';

export const MyLogo = () => {
  return (
    <Image src={logo} alt='My Logo' width={25} height={25} />
  )
}