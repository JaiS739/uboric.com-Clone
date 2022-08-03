import React from "react";
import {
  Box,
  Container,
  Flex,
  Stack,
  Text,
  Input,
  FormControl,
  Heading,
  FormLabel,
  FormHelperText,
  Textarea,
  Button,
} from "@chakra-ui/react";
import { ArrowRightIcon } from "@chakra-ui/icons";
const BestSeller = () => {
  return (
      <Box>
        <Container maxW="6xl">
          <Flex direction="column">
            <Box>
              <Heading
                style={{
                  fontSize: "20px",
                  lineHeight: "26px",
                  fontWeight: "700",
                  letterSpacing: "3px",
                  color: "rgb(30,86,160)",
                }}
                textAlign="center"
              >
                Become A Seller
              </Heading>
            </Box>
            <Box textAlign="center">
              <span
                height="19px"
                style={{ color: "rgb(30,86,160)", fontSize: "12px" }}
              >
                Home
              </span>
              <ArrowRightIcon height="6px" />
              <span
                height="19px"
                style={{ color: "rgb(30,86,160)", fontSize: "12px" }}
              >
                Become a Seller
              </span>
            </Box>
          </Flex>
          <Box mt="8">
            <Box>
              <Text textAlign="left" fontWeight="bold" fontSize="22">
                Vendor Registration
              </Text>
              <Text textAlign="left" fontSize="16" mt="3">
                Submit the form below to become a vendor on this store
              </Text>
            </Box>
            <Box>
              <Stack direction="column">
                <Flex
                  direction="row"
                  justifyContent="space-between"
                  mt="6"
                  padding="2"
                >
                  <FormControl width="46%" textAlign="left" isRequired>
                    <FormLabel fontSize="14px" fontWeight="normal">
                      First Name
                    </FormLabel>
                    <Input type="text" size="lg" />
                  </FormControl>
                  <FormControl width="46%" textAlign="left" isRequired>
                    <FormLabel fontSize="14px" fontWeight="normal">
                      Last Name
                    </FormLabel>
                    <Input type="text" size="lg" />
                  </FormControl>
                </Flex>
                <Flex
                  direction="row"
                  justifyContent="space-between"
                  mt="6"
                  padding="2"
                >
                  <FormControl textAlign="left" isRequired>
                    <FormLabel fontSize="14px" fontWeight="normal">
                      Login Username
                    </FormLabel>
                    <Input type="text" size="lg" />
                  </FormControl>
                </Flex>
                <Flex
                  direction="row"
                  justifyContent="space-between"
                  mt="6"
                  padding="2"
                >
                  <FormControl width="46%" textAlign="left" isRequired>
                    <FormLabel fontSize="14px" fontWeight="normal">
                      Email
                    </FormLabel>
                    <Input type="text" size="lg" />
                  </FormControl>
                  <FormControl width="46%" textAlign="left" isRequired>
                    <FormLabel fontSize="14px" fontWeight="normal">
                      Confirm Email
                    </FormLabel>
                    <Input type="text" size="lg" />
                  </FormControl>
                </Flex>
                <Flex
                  direction="row"
                  justifyContent="space-between"
                  mt="6"
                  padding="2"
                >
                  <FormControl textAlign="left" isRequired>
                    <FormLabel fontSize="14px" fontWeight="normal">
                      Vendor Name
                    </FormLabel>
                    <Input type="text" size="lg" />
                    <FormHelperText fontSize="16px">
                      <i>
                        Important: This is the name that customers see when
                        purchasing your products. Please choose carefully.
                      </i>
                    </FormHelperText>
                  </FormControl>
                </Flex>
                <Flex
                  direction="row"
                  justifyContent="space-between"
                  mt="6"
                  padding="2"
                >
                  <FormControl textAlign="left" isRequired>
                    <FormLabel fontSize="14px" fontWeight="normal">
                      Please describe something about your company and what you
                      sell.
                    </FormLabel>
                    <Textarea size="sm" />
                  </FormControl>
                </Flex>
                <Flex
                  direction="row"
                  justifyContent="space-between"
                  mt="6"
                  padding="2"
                >
                  <FormControl width="46%" textAlign="left">
                    <FormLabel fontSize="14px" fontWeight="normal">
                      Pan No
                    </FormLabel>
                    <Input type="text" size="lg" />
                  </FormControl>
                  <FormControl width="46%" textAlign="left">
                    <FormLabel fontSize="14px" fontWeight="normal">
                      GST No
                    </FormLabel>
                    <Input type="text" size="lg" />
                  </FormControl>
                </Flex>
                <Flex
                  direction="row"
                  justifyContent="space-between"
                  mt="6"
                  padding="2"
                >
                  <FormControl textAlign="left" width="46%">
                    <FormLabel fontSize="14px" fontWeight="normal">
                      Contact No
                    </FormLabel>
                    <Input type="text" size="lg" />
                  </FormControl>
                </Flex>
              </Stack>
            </Box>
            <Box mt="6">
              <Button bg="rgb(255,206,97)" color="white" fontSize="16px" size="lg"_hover={{ bg: 'rgb(250, 186, 45)' }}>
                Register
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>

  );
};

export default BestSeller;
