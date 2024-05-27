import { Box, Container, Flex, Heading, Text, VStack, HStack, Link, Spacer, Divider } from "@chakra-ui/react";
import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";

const posts = [
  {
    title: "First Blog Post",
    date: "October 1, 2023",
    excerpt: "This is a short excerpt of the first blog post.",
  },
  {
    title: "Second Blog Post",
    date: "October 2, 2023",
    excerpt: "This is a short excerpt of the second blog post.",
  },
];

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      {/* Navigation Bar */}
      <Flex as="nav" bg="gray.100" p={4} mb={4} borderRadius="md" boxShadow="md">
        <Heading size="md">My Blog</Heading>
        <Spacer />
        <HStack spacing={4}>
          <Link href="#">Home</Link>
          <Link href="#">About</Link>
          <Link href="#">Contact</Link>
        </HStack>
      </Flex>

      {/* Main Content */}
      <Flex direction={{ base: "column", md: "row" }} align="start">
        {/* Blog Posts */}
        <Box flex="3" mr={{ md: 4 }}>
          {posts.map((post, index) => (
            <Box key={index} mb={8} p={4} borderWidth="1px" borderRadius="md" boxShadow="md">
              <Heading size="lg" mb={2}>{post.title}</Heading>
              <Text fontSize="sm" color="gray.500" mb={2}>{post.date}</Text>
              <Text>{post.excerpt}</Text>
            </Box>
          ))}
        </Box>

        {/* Sidebar */}
        <Box flex="1" mt={{ base: 8, md: 0 }}>
          <Heading size="md" mb={4}>Recent Posts</Heading>
          {posts.map((post, index) => (
            <Box key={index} mb={4}>
              <Text fontWeight="bold">{post.title}</Text>
              <Text fontSize="sm" color="gray.500">{post.date}</Text>
            </Box>
          ))}
        </Box>
      </Flex>

      {/* Footer */}
      <Divider my={8} />
      <Flex as="footer" justify="center" align="center" py={4}>
        <HStack spacing={4}>
          <Link href="https://twitter.com" isExternal>
            <FaTwitter />
          </Link>
          <Link href="https://facebook.com" isExternal>
            <FaFacebook />
          </Link>
          <Link href="https://instagram.com" isExternal>
            <FaInstagram />
          </Link>
        </HStack>
      </Flex>
    </Container>
  );
};

export default Index;