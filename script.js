const axios = require('axios');
const fs = require('fs');

const HASHNODE_API_KEY = process.env.HASHNODE_API_KEY;

const fetchHashnodeBlogs = async () => {
  try {
    const response = await axios.get('https://api.hashnode.com/v1/me/posts', {
      headers: {
        Authorization: HASHNODE_API_KEY,
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
