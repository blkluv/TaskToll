import { ConnectWallet,useAddress } from "@thirdweb-dev/react";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import { NextPage } from "next";
import { Container,Flex,Box } from "@chakra-ui/react";


import AccountablityCard from "../componnets/AcccountablityCard";

const Home: NextPage = () => {

const address = useAddress();

  return (
    <Container maxW="1440px">
        <Flex justifyContent={"center"} alignItems={"center"} height={"100vh"} flexDirection={"column"}>
        <ConnectWallet />
        <Box h={"20px"}></Box>

        {address && (
          <AccountablityCard />
        )}

        </Flex>
      </Container>
  );
};

export default Home;
