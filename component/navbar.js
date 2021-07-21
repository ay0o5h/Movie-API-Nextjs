import Image from 'next/image'
import logo from '../public/image/logo.png'
import { Input ,Icon } from 'antd';
import {SearchOutlined} from '@ant-design/icons'
  const Navbar= ()  =>{
   
  return (
    <nav>
    <div className="container">
    
      <Image src={logo}/ >
      <div className="searchContainer">
      <Input  
       type="search" 
      className="search" 
      placeholder="Find Move..."  
      extra={  <SearchOutlined className="searchIcon"/>} />
      <SearchOutlined className="searchIcon"/>

    
      </div>
    </div>
  </nav>
  )

} 
export default Navbar