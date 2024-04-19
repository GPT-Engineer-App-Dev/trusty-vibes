import { Box, Button, Container, Flex, Grid, Heading, Image, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { FaCheckCircle, FaQuoteLeft, FaUserFriends } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl">
      {/* Hero Section */}
      <Flex direction="column" align="center" justify="center" minH="90vh" bg="blue.100">
        <Heading as="h1" size="2xl" mb="4">
          Innovating for a Healthier Tomorrow
        </Heading>
        <Text fontSize="xl" mb="8">
          Explore cutting-edge health solutions that empower your life.
        </Text>
        <Button colorScheme="green" size="lg">
          Learn More
        </Button>
        <Image src="https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxoZWFsdGglMjB0ZWNobm9sb2d5fGVufDB8fHx8MTcxMzU1MjM5OHww&ixlib=rb-4.0.3&q=80&w=1080" alt="Health Technology" />
      </Flex>

      {/* About Us */}
      <VStack spacing="5" py="10">
        <Heading as="h2" size="xl">
          About Us
        </Heading>
        <Text>We are dedicated to improving health standards through innovative technology.</Text>
        <Image src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwdGVhbXxlbnwwfHx8fDE3MTM1NTIzOTh8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Healthcare Team" />
      </VStack>

      {/* Features */}
      <Box py="10">
        <Heading as="h2" size="xl" textAlign="center" mb="6">
          Features
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing="6">
          <FeatureCard icon={FaCheckCircle} title="Accuracy" description="High precision in every measurement." />
          <FeatureCard icon={FaCheckCircle} title="Usability" description="Simple interfaces for all age groups." />
          <FeatureCard icon={FaCheckCircle} title="Integration" description="Seamlessly connects with existing systems." />
        </SimpleGrid>
      </Box>

      {/* Testimonials */}
      <VStack spacing="5" py="10" bg="gray.100">
        <Heading as="h2" size="xl">
          What Our Users Say
        </Heading>
        <Grid templateColumns="repeat(3, 1fr)" gap={6}>
          <TestimonialCard author="John Doe" content="This product has changed my life for the better!" />
          <TestimonialCard author="Jane Smith" content="Very easy to use and reliable!" />
          <TestimonialCard author="Alice Johnson" content="I can't imagine going back to how things were before." />
        </Grid>
      </VStack>

      {/* Contact/Form */}
      <Flex direction="column" align="center" justify="center" py="10">
        <Heading as="h2" size="xl" mb="4">
          Get in Touch
        </Heading>
        <Text mb="8">We're here to help and answer any question you might have.</Text>
        <Button colorScheme="green" size="lg">
          Contact Us
        </Button>
      </Flex>
    </Container>
  );
};

const FeatureCard = ({ icon, title, description }) => (
  <VStack bg="white" boxShadow="md" p="6" rounded="md" align="center">
    <Box as={icon} size="3rem" color="green.500" />
    <Text fontWeight="bold">{title}</Text>
    <Text textAlign="center">{description}</Text>
  </VStack>
);

const TestimonialCard = ({ author, content }) => (
  <Box bg="white" boxShadow="md" p="6" rounded="md">
    <Text as="i" fontSize="lg">
      <FaQuoteLeft /> {content}
    </Text>
    <Text fontWeight="bold" mt="4">
      - {author}
    </Text>
  </Box>
);

export default Index;
