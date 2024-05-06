import React, { useState } from "react";
import { ChakraProvider, Box, Flex, Heading, Text, Select, Button, Input, useColorMode, ColorModeScript, Link } from "@chakra-ui/react";

const Register = () => {
  const [selectedRole, setSelectedRole] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [verifyPassword, setVerifyPassword] = useState("");
  const [industry, setIndustry] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [businessWebsite, setBusinessWebsite] = useState("");
  const { colorMode, toggleColorMode } = useColorMode();

  const handleRoleChange = (event) => {
    setSelectedRole(event.target.value);
  };

  const formatPhoneNumber = (input) => {
    const phoneNumberDigits = input.replace(/\D/g, "");

    if (!phoneNumberDigits || phoneNumberDigits.length < 3) {
      return phoneNumberDigits;
    }

    if (phoneNumberDigits.length < 7) {
      return `(${phoneNumberDigits.slice(0, 3)}) - ${phoneNumberDigits.slice(3)}`;
    } else if (phoneNumberDigits.length < 10) {
      return `(${phoneNumberDigits.slice(0, 3)}) - ${phoneNumberDigits.slice(3, 6)} - ${phoneNumberDigits.slice(6)}`;
    } else {
      return `(${phoneNumberDigits.slice(0, 3)}) - ${phoneNumberDigits.slice(3, 6)} - ${phoneNumberDigits.slice(6, 10)}`;
    }
  };

  const handlePhoneNumberChange = (event) => {
    let inputPhoneNumber = event.target.value;
    const phoneNumberDigits = inputPhoneNumber.replace(/\D/g, "").slice(0, 10);
  
    let formattedPhoneNumber = "";
    if (phoneNumberDigits.length > 0) {
      formattedPhoneNumber += `(${phoneNumberDigits.slice(0, 3)}`;
    }
    if (phoneNumberDigits.length > 3) {
      formattedPhoneNumber += `) - ${phoneNumberDigits.slice(3, 6)}`;
    }
    if (phoneNumberDigits.length > 6) {
      formattedPhoneNumber += ` - ${phoneNumberDigits.slice(6, 10)}`;
    }
  
    setPhoneNumber(formattedPhoneNumber);
  };  

  const handleSubmit = () => {
    // Check if selected role is empty
    if (!selectedRole) {
      console.error("Please select a role.");
      return;
    }
  
    // Check if required fields are filled out depending on the selected role
    if (
      (selectedRole === "job-seeker" && (!firstName || !lastName || !email || !password || !verifyPassword || !industry)) ||
      (selectedRole === "employer" && (!businessName || !businessWebsite || !industry))
    ) {
      console.error("Please fill out all required fields.");
      return;
    }
  
    // Additional validation logic here


    console.log("Form submitted successfully!");
  };  

  return (
    <ChakraProvider>
      <ColorModeScript initialColorMode="dark" />
      <Box
        p={[2, 4, 6, 8]}
        maxWidth="800px"
        margin="auto"
        bg={colorMode === "light" ? "#663399" : "#0B1215"} // Change box background color
        color={colorMode === "light" ? "#000000" : "#F3F3F3"} // Change box text color
      >
        <Flex direction="column" alignItems="center">
          <Box bg={colorMode === "light" ? "#FFFFFF" : "#0B1215"} p={4} borderRadius="md" width="100%">
            <Flex justifyContent="flex-end">
              <Button
                onClick={toggleColorMode}
                mr={2}
                color={colorMode === "light" ? "#FFFFFF" : "#A96CDE"} // Change button text color
                backgroundColor={colorMode === "light" ? "#000000" : "#FFFFFF"} // Change button background color
              >
                Toggle {colorMode === "light" ? "Dark" : "Light"} Mode
              </Button>
            </Flex>
            <Heading mb={4}>Sign Up 🗣️</Heading>
            <Text fontWeight="bold">User Type:</Text>
            <Select 
              placeholder="Select option" // Placeholder preview text in input
              value={selectedRole} // Check if employer or job-seeker
              onChange={handleRoleChange} mt={2} mb={4}
              _hover={{ bg: colorMode === "light" ? "gray.200" : "gray.800" }} // Color of input field on hover
            >
              <option value="job-seeker">Job Seeker</option>
              <option value="employer">Employer</option>
            </Select>

            <Flex>
              <Box flex={1} mr={4} position="relative">
              <Text fontSize="sm">First Name</Text>
                <Input 
                  placeholder="First Name" 
                  value={firstName} 
                  onChange={(e) => setFirstName(e.target.value)} 
                  isRequired // Required for form submission
                  _hover={{ bg: colorMode === "light" ? "gray.200" : "gray.800" }}
                />
                <Text ml={1} color="red" position="absolute" bottom="10px" right="0">*</Text> {/* Required Field Asterik */}
              </Box>
              <Box flex={1} position="relative">
              <Text fontSize="sm">Last Name</Text>
                <Input 
                  placeholder="Last Name" 
                  value={lastName} 
                  onChange={(e) => setLastName(e.target.value)} 
                  isRequired 
                  _hover={{ bg: colorMode === "light" ? "gray.200" : "gray.800" }}
                />
                <Text ml={1} color="red" position="absolute" bottom="10px" right="0px">*</Text>
              </Box>
            </Flex>
            <Text fontSize="sm">Email Address</Text>
            <Box display="flex" alignItems="center">
              <Input 
                placeholder="Email Address" mt={2} 
                value={email} onChange={(e) => setEmail(e.target.value)} 
                isRequired 
                _hover={{ bg: colorMode === "light" ? "gray.200" : "gray.800" }}
              />
              <Text ml={1} color="red">*</Text>
            </Box>
            <Text fontSize="sm">Password</Text>
            <Box display="flex" alignItems="center">
              <Input 
                type="password" // Input type is "password" to hide characters when typed
                placeholder="Password" mt={2} 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                isRequired 
                _hover={{ bg: colorMode === "light" ? "gray.200" : "gray.800" }}
              />
              <Text ml={1} color="red">*</Text>
            </Box>
            <Text fontSize="sm">Verify Password</Text>
            <Box display="flex" alignItems="center">
              <Input 
                type="password" 
                placeholder="Verify Password" mt={2} 
                value={verifyPassword} 
                onChange={(e) => setVerifyPassword(e.target.value)} 
                isRequired 
                _hover={{ bg: colorMode === "light" ? "gray.200" : "gray.800" }}
              />
              <Text ml={1} color="red">*</Text>
            </Box>
            <Text fontSize="sm">Business Number</Text>
            <Box display="flex" alignItems="center">
              <Input 
                placeholder="(123) - 456 - 7890" mt={2} 
                value={phoneNumber} 
                onChange={handlePhoneNumberChange} 
                _hover={{ bg: colorMode === "light" ? "gray.200" : "gray.800" }}
              />
            </Box>

            {selectedRole === "job-seeker" && (
              <Text mt={4} mb={2} fontWeight="bold" color={colorMode === "light" ? "#000000" : "#FFFFFF"}>
                Job Seeker Fields
              </Text>
            )}

            {selectedRole === "job-seeker" && (
              <>
                <Box display="flex" alignItems="center">
                  <Select 
                    placeholder="Select industry" mt={4} 
                    value={industry} 
                    onChange={(e) => setIndustry(e.target.value)} 
                    isRequired
                    _hover={{ bg: colorMode === "light" ? "gray.200" : "gray.800" }}
                  >
                    <option value="Retail">Option 1</option>
                    <option value="Finance">Option 2</option>
                  </Select>
                  <Text ml={1} color="red">*</Text>
                </Box>
                <Box display="flex" alignItems="center">
                  <Input 
                    placeholder="Field 1" mt={2} 
                    value={lastName} 
                    onChange={(e) => setLastName(e.target.value)} 
                    isRequired 
                    _hover={{ bg: colorMode === "light" ? "gray.200" : "gray.800" }}
                  />
                  <Text ml={1} color="red">*</Text>
                </Box>
              </>
            )}

            {selectedRole === "employer" && (
              <Text mt={4} mb={2} fontWeight="bold" color={colorMode === "light" ? "#000000" : "#FFFFFF"}>
                Employer Fields
              </Text>
            )}

            {selectedRole === "employer" && (
              <>
                <Box display="flex" alignItems="center">
                  <Input
                    placeholder="Business Name"
                    mt={2}
                    value={businessName}
                    onChange={(e) => setBusinessName(e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1))}
                    isRequired
                    _hover={{ bg: colorMode === "light" ? "gray.200" : "gray.800" }}
                  />
                  <Text ml={1} color="red">*</Text>
                </Box>
                <Box display="flex" alignItems="center">
                  <Input 
                    placeholder="Business Website" mt={2} 
                    value={businessWebsite} 
                    onChange={(e) => setBusinessWebsite(e.target.value)} 
                    isRequired 
                    _hover={{ bg: colorMode === "light" ? "gray.200" : "gray.800" }}
                  />
                  <Text ml={1} color="red">*</Text>
                </Box>
                <Box display="flex" alignItems="center">
                  <Select 
                    placeholder="Select industry" mt={4} 
                    value={industry} 
                    onChange={(e) => setIndustry(e.target.value)} 
                    isRequired
                    _hover={{ bg: colorMode === "light" ? "gray.200" : "gray.800" }}
                    >
                    <option value="Retail">Retail</option> 
                    <option value="Finance">Finance</option>
                    <option value="Real Estate">Real Estate</option> 
                    <option value="Education">Education</option>
                    <option value="Healthcare">Healthcare</option> 
                    <option value="Government">Government</option>
                    <option value="Construction">Construction</option> 
                    <option value="Entertainment">Entertainment</option>
                    <option value="Information Technology">Information Technology</option> 
                    <option value="Agriculture">Agriculture</option>
                    <option value="Automotive">Automotive</option> 
                    <option value="Manufacturing">Manufacturing</option>
                    <option value="Hospitality">Hospitality</option> 
                    <option value="Transportation and Logistics">Transportation and Logistics</option>
                    <option value="Energy">Energy</option> 
                    <option value="Other">Other</option>
                  </Select>
                  <Text ml={1} color="red">*</Text>
                </Box>
              </>
            )}

            <Button
              mt={4}
              colorScheme="teal"
              width="100%"
              onClick={handleSubmit}
              backgroundColor={colorMode === "light" ? "#000000" : "#A96CDE"}
            >
              Register
            </Button>
            <Text mt={2} textAlign="center">
              Already have an account? <Link color="teal.500">Sign In</Link>
            </Text>
          </Box>
        </Flex>
      </Box>
    </ChakraProvider>
  );
};

export default Register;