import { Box, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import Link from "next/link"
const Project = ({data}) => {
  return (
    <Box>
        <Heading textAlign={"center"}>Projects</Heading>

        <Box margin={"30px"}
            p="20px"
            boxShadow="rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px">
        {data.items.map((el)=>(
            <Box key={el.id} display="flex" margin={"30px"} justifyContent="space-between"
            p="20px"
            boxShadow="rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px">
           <Link href={el.clone_url}>  <Box  >
                <Heading>{el.name}</Heading>
                <Text>{el.description}</Text>
                <Heading fontSize={"md"}>Fork Count:- {el.forks_count}</Heading>
                <Heading fontSize={"md"}>star Count:- {el.stargazers_count}</Heading>
            </Box>
            </Link>
            <Box>
            <Heading fontSize={"lg"}>{el.language}</Heading>
            </Box>
            </Box>
           
        ))}

        </Box>
    </Box>
  )
}
export default Project

export async function getStaticProps(){
    let res=await fetch(`https://api.github.com/search/repositories?q=user:pallavijainy+fork:true&sort=updated&per_page=10&type=Repositories`)
    let data=await res.json()
    return{
      props:{
        data:data
      }
    }
  }



