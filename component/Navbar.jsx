// import {
//     Box,
//     Flex,
//     Avatar,
//     Button,
//     Menu,
//     MenuButton,
//     MenuList,
//     MenuItem,
//     MenuDivider,
//     useDisclosure,
//     useColorModeValue,
//     Stack,
//     useColorMode,
//     Center,
//   } from '@chakra-ui/react';
//   import { MoonIcon, SunIcon } from '@chakra-ui/icons';
  
//   import Link from 'next/link'
//   import Experience from './../pages/experience';
  
//   export default function Navbar({data}) {
//     const { colorMode, toggleColorMode } = useColorMode();
//     const { isOpen, onOpen, onClose } = useDisclosure();
//     return (
//       <>
      
//         <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
//           <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
//             <Box display={"flex"} gap="20px">
//           <Link href={"/"}><Box>Pallavi Jain</Box></Link>  
//           <Link href={"/project"}> <Box>Projects</Box></Link> 
//           <Link href={"/experience"}><Box>Experience</Box></Link>  
//             </Box>
        
  
//             <Flex alignItems={'center'}>
//               <Stack direction={'row'} spacing={7}>
//                 <Button onClick={toggleColorMode}>
//                   {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
//                 </Button>
  
//                 <Menu>
//                   <MenuButton
//                     as={Button}
//                     rounded={'full'}
//                     variant={'link'}
//                     cursor={'pointer'}
//                     minW={0}>
//                     <Avatar
//                       size={'sm'}
//                       src={'https://avatars.githubusercontent.com/u/107476738?v=4'}
//                     />
//                   </MenuButton>
//                   <MenuList alignItems={'center'}>
//                     <br />
//                     <Center>
//                       <Avatar
//                         size={'2xl'}
//                         src={'https://avatars.githubusercontent.com/u/107476738?v=4'}
//                       />
//                     </Center>
//                     <br />
//                     <Center>
//                       <p>pallavijainy</p>
//                     </Center>
//                     <br />
//                     <MenuDivider />
                  
//                     <Link href={"/project"}><MenuItem>Projects</MenuItem></Link>
//                    <Link href={"/experience"}> <MenuItem>Experience</MenuItem></Link>
//                   </MenuList>
//                 </Menu>
//               </Stack>
//             </Flex>
//           </Flex>
//         </Box>
//       </>
//     );
//   }
  
  
  