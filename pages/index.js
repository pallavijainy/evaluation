import {
  Box,
  Button,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import Head from "next/head";
import Link from "next/link";
import Experience from "./Experience";

export default function Home({ data, prodata }) {
  return (
    <>
      <Head>
        <title>pallavi-portfolio-website</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Box  textAlign="center" display={"flex"} flexDirection="row">
          <Box width={"600px"}>
            <Box
              margin={"30px"}
              p="20px"
              boxShadow="rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"
            >
              <Image
                borderRadius="full"
                boxSize="150px"
                src={data.avatar_url}
                alt={data.name}
                margin="auto"
              />

              <Heading>{data.name}</Heading>
              <Text>{data.login}</Text>
              <Text>Followers:- {data.followers}</Text>

              <Heading>{data.location}</Heading>
              <Text>{data.bio}</Text>
              <Text>Tech stack:- Nextjs | chakra</Text>
              <Text>
                Experience and Education:- Full stack developer | Bcom
                |Typescript
              </Text>

              <Box mt="20px">
                <Button borderRadius={"20px"} backgroundColor="green.300">
                  <Link
                    href={
                      "https://drive.google.com/file/d/1YAp-ywxagyg4lRCHMDKg6z4jAPTq8CEP/view?usp=share_link"
                    }
                  >
                    Resume
                  </Link>
                </Button>
                <Button borderRadius={"20px"} backgroundColor="blue.300">
                  Follow
                </Button>
              </Box>
            </Box>

            <Box>
              <Experience />
            </Box>
          </Box>

          {/* //project section */}
          <Box>
            <Box>
              <Heading textAlign={"center"}>Projects</Heading>

              <Box
                margin={"30px"}
                p="20px"
                boxShadow="rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"
              >
                {prodata.items.map((el) => (
                  <Box
                    key={el.id}
                    display="flex"
                    margin={"30px"}
                    justifyContent="space-between"
                    p="20px"
                    boxShadow="rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"
                  >
                    <Link href={el.clone_url}>
                      {" "}
                      <Box>
                        <Heading>{el.name}</Heading>
                        <Text>{el.description}</Text>
                        <Heading fontSize={"md"}>
                          Fork Count:- {el.forks_count}
                        </Heading>
                        <Heading fontSize={"md"}>
                          star Count:- {el.stargazers_count}
                        </Heading>
                      </Box>
                    </Link>
                    <Box>
                      <Heading fontSize={"lg"}>{el.language}</Heading>
                    </Box>
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>
        </Box>
      </main>
    </>
  );
}

export async function getStaticProps() {
  let res = await fetch(`https://api.github.com/users/pallavijainy`);
  let pro = await fetch(
    `https://api.github.com/search/repositories?q=user:pallavijainy+fork:true&sort=updated&per_page=10&type=Repositories`
  );
  let data = await res.json();
  let prodata = await pro.json();
  return {
    props: {
      data: data,
      prodata: prodata,
    },
  };
}
