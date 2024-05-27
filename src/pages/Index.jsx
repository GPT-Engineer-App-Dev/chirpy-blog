import { useState } from "react";
import { Box, Container, Flex, Heading, Text, VStack, HStack, Link, Spacer, Divider, Button, FormControl, FormLabel, Input, Textarea } from "@chakra-ui/react";
import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";

const Index = () => {
  const [posts, setPosts] = useState([
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
  ]);
  const [showForm, setShowForm] = useState(false);
  const [newPost, setNewPost] = useState({ title: "", date: "", excerpt: "" });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setPosts([...posts, newPost]);
    setNewPost({ title: "", date: "", excerpt: "" });
    setShowForm(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPost({ ...newPost, [name]: value });
  };

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
          <Button onClick={() => setShowForm(!showForm)}>
            {showForm ? "Cancel" : "Add New Post"}
          </Button>
        </HStack>
      </Flex>

      {/* Form for adding new post */}
      {showForm && (
        <Box as="form" onSubmit={handleFormSubmit} mb={8} p={4} borderWidth="1px" borderRadius="md" boxShadow="md">
          <VStack spacing={4}>
            <FormControl isRequired>
              <FormLabel>Title</FormLabel>
              <Input name="title" value={newPost.title} onChange={handleInputChange} />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Date</FormLabel>
              <Input name="date" value={newPost.date} onChange={handleInputChange} />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Content</FormLabel>
              <Textarea name="excerpt" value={newPost.excerpt} onChange={handleInputChange} />
            </FormControl>
            <Button type="submit" colorScheme="blue">Add Post</Button>
          </VStack>
        </Box>
      )}

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