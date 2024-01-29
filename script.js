const axios = require('axios');
const fs = require('fs');

const HASHNODE_API_KEY = process.env.4a0f9d5a-33e6-4f99-8db6-36bf488c68c0;

const fetchHashnodeBlogs = async () => {
  try {
    const response = await axios.get('https://api.hashnode.com/v1/me/posts', {
      headers: {
        Authorization: 4a0f9d5a-33e6-4f99-8db6-36bf488c68c0,
      },
    });

    const blogs = response.data.data;

    const readmeContent = `# My Hashnode Blogs\n\n${blogs
      .map((blog) => `- [${blog.title}](${blog.url})`)
      .join('\n')}`;

    fs.writeFileSync('README.md', readmeContent);
  } catch (error) {
    console.error('Error fetching Hashnode blogs:', error.message);
  }
};

fetchHashnodeBlogs();
